import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IJobTitle } from 'src/app/Interfaces/JobTitleInterface';
import { JobTitleService } from 'src/app/Services/job-title.service';

@Component({
  selector: 'app-create-job-title',
  templateUrl: './create-job-title.component.html',
  styleUrls: ['./create-job-title.component.scss']
})
export class CreateJobTitleComponent {
  text: string = "Job Title"
  jobTitle: IJobTitle = { id: null, isActive: true, name: "" }

  constructor(private jobTitleService: JobTitleService, private toastr: ToastrService) { }

  onSubmit(form) {
    this.jobTitle.name = form.value.jobTitle
    this.jobTitleService.createJobTitle(this.jobTitle).subscribe(
      () => {
        this.toastr.success("Job Title Created Successfully!")
        form.reset()
      },
      () => this.toastr.error("A Job Title With That Name Already Exists!")
    )
  }
}
