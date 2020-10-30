import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IDepartment } from 'src/app/Interfaces/DepartmentInterface';
import { IEmployee } from 'src/app/Interfaces/EmployeeInterface';
import { IJobTitle } from 'src/app/Interfaces/JobTitleInterface';

import { DepartmentService } from 'src/app/Services/department.service';
import { EmployeeService } from 'src/app/Services/employee.service';
import { JobTitleService } from 'src/app/Services/job-title.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})

export class CreateEmployeeComponent implements OnInit {
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
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.departmentService.getActiveDepartments().subscribe((value: IDepartment[]) => this.departments = value)
    this.jobTitleService.getJobTitles().subscribe((value: IJobTitle[]) => this.jobTitles = value)
    this.employeeService.getEmployees().subscribe((value: IEmployee[]) => this.employees = value)
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
          this.employeeService.createEmployee(this.employee).subscribe(() => {
            this.toastr.success("Employee Created Successfully!")
            this.employeeService.getEmployees().subscribe((value: IEmployee[]) => {
              this.employees = value.filter(data => data.id != this.employee.id)
              form.reset()
            })
          },
            () => this.toastr.error("A Employee With That Name Already Exists!"))
        })
      })
    })
  }
}