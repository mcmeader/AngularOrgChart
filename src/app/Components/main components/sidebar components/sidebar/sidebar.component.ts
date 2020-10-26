import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class Sidebar implements OnInit {
  url: string
  showEmployees: boolean = false
  showDepartments: boolean = false
  showJobTitles: boolean = false

  sidebarData: any[] = [
    { class: "", link: "/org-chart", text: "Org Chart" },
    { class: "", link: "/employees", text: "Employees" },
    { class: "subValue", link: "/create-employee", text: "Create Employee" },
    { class: "", link: "/departments", text: "Departments" },
    { class: "subValue", link: "/create-department", text: "Create Department" },
    { class: "", link: "/job-titles", text: "Job Titles" },
    { class: "subValue", link: "/create-job-title", text: "Create Job Title" }
  ]

  constructor(private router: Router) { }

  updateItemsShown() {
    console.log(this.url)
    if (this.url.includes("employee")) {
      this.showEmployees = true
      this.showDepartments = false
      this.showJobTitles = false
    } else {
      if (this.url.includes("department")) {
        this.showEmployees = false
        this.showDepartments = true
        this.showJobTitles = false
      } else {
        if (this.url.includes("job-title")) {
          this.showEmployees = false
          this.showDepartments = false
          this.showJobTitles = true
        } else {
          this.showEmployees = false
          this.showDepartments = false
          this.showJobTitles = false
        }
      }
    }
  }

  ngOnInit(): void {
    this.url = this.router.url
    this.updateItemsShown()
  }

  updateUrl(newUrl) {
    this.url = newUrl
    this.updateItemsShown()
  }

}
