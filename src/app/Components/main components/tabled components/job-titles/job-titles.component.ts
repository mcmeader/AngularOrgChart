import { Component, OnInit } from '@angular/core';
import { IJobTitle } from 'src/app/Interfaces/JobTitleInterface';
import { JobTitleService } from 'src/app/Services/job-title.service';

@Component({
  selector: 'app-job-titles',
  templateUrl: './job-titles.component.html',
  styleUrls: ['./job-titles.component.scss']
})
export class JobTitlesComponent implements OnInit {
  headerData: Array<string>;
  mappedBodyData: String[][];
  link: string = "/edit-job-title"

  constructor(private jobTitleService: JobTitleService) {
    this.headerData = ["Job Title", "Actions"]
  }

  getActiveJobTitles() {
    this.jobTitleService.getJobTitles()
      .subscribe((data: IJobTitle[]) => {
        let jobTitles = data.filter(jobTitle => jobTitle.isActive == true)
        this.mappedBodyData = jobTitles.map(response => [response.name, response.id.toString()])
      })
  }

  ngOnInit(): void {
    this.getActiveJobTitles()
  }

  onDelete(id: number) {
    this.jobTitleService.deleteJobTitle(id).subscribe(() => this.getActiveJobTitles())
  }
}
