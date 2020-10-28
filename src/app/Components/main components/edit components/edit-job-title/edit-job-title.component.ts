import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IJobTitle } from 'src/app/Interfaces/JobTitleInterface';
import { JobTitleService } from 'src/app/Services/job-title.service';

@Component({
  selector: 'app-edit-job-title',
  templateUrl: './edit-job-title.component.html',
  styleUrls: ['./edit-job-title.component.scss']
})

export class EditJobTitleComponent implements OnInit {
  text: string = "Job Title"
  jobTitle: IJobTitle = { id: null, isActive: true, name: "" }

  constructor(private jobTitleService: JobTitleService,
    private toastr: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let jobTitleId = this.route.snapshot.paramMap.get("id")
    this.jobTitleService.getJobTitleById(parseInt(jobTitleId))
      .subscribe((data: IJobTitle) => this.jobTitle = data)
  }

  onSubmit(form) {
    this.jobTitle.name = form.value.jobTitle
    this.jobTitleService.updateJobTitle(this.jobTitle).subscribe(
      () => this.toastr.success("Department Updated Successfully!"),
      () => this.toastr.error("A Department With That Name Already Exists!"))
  }
}
