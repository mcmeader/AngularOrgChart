import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDepartment } from 'src/app/Interfaces/DepartmentInterface';
import { IEmployee } from 'src/app/Interfaces/EmployeeInterface';
import { IJobTitle } from 'src/app/Interfaces/JobTitleInterface';

import { DepartmentService } from 'src/app/Services/department.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { JobTitleService } from 'src/app/Services/job-title.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})

export class EditEmployeeComponent implements OnInit {
  text: String[] = ["First Name", "Last Name", "Middle Initial"]
  selectLabelValues: String[] = ["Departments", "Job Titles", "Managers"]
  departments: IDepartment[]
  jobTitles: IJobTitle[]
  employees: IEmployee[]

  employee: IEmployee = {
    id: null, email: null, isManager: false, skypeName: null, department: null,
    firstName: "", lastName: "", middleInitial: "", isActive: true, jobTitle: null, manager: null
  }

  constructor(private employeeService: EmployeeService,
    private departmentService: DepartmentService,
    private jobTitleService: JobTitleService,
    private toastr: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let employeeId = parseInt(this.route.snapshot.paramMap.get("id"))
    this.employeeService.getEmployeeById(employeeId)
      .subscribe((data: IEmployee) => {
        this.employee = data
        this.departmentService.getActiveDepartments().subscribe((value: IDepartment[]) => {
          this.departments = value
          this.jobTitleService.getJobTitles().subscribe((value: IJobTitle[]) => {
            this.jobTitles = value
            this.employeeService.getEmployees().subscribe((value: IEmployee[]) => this.employees =
              value.filter(data => data.id != employeeId)
            )
          })
        })
      })
  }

  onSubmit(form) {
    this.employee.firstName = form.value.firstName
    this.employee.lastName = form.value.lastName
    this.employee.middleInitial = form.value.middleInitial

    this.departmentService.getDepartmentById(form.value.department).subscribe((value: IDepartment) => {
      this.employee.department = value
      this.jobTitleService.getJobTitleById(form.value.jobTitle).subscribe((value: IJobTitle) => {
        this.employee.jobTitle = value
        this.employeeService.getEmployeeById(form.value.manager).subscribe((value: IEmployee) => {
          this.employee.manager = value
          this.employeeService.updateEmployee(this.employee).subscribe(
            () => {
              this.toastr.success("Employee Edited Successfully!")
              this.employeeService.getEmployees().subscribe((value: IEmployee[]) => this.employees = value.filter(data => data.id != this.employee.id))
            },
            () => this.toastr.error("An Employee With That Name Already Exists!"))
        })
      })
    })
  }
}
