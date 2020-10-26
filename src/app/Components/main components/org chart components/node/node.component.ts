import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/Interfaces/EmployeeInterface';
import { EmployeeService } from 'src/app/Services/employee-service.service';
@Component({
  selector: 'orgchart-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() employee: IEmployee
  managedEmployees: IEmployee[]
  employeesShown: boolean = false
  buttonText: string = "Show Employees"

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  showEmployees() {
    this.buttonText = "Hide Employees"
    this.employeeService.getEmployeesByManagerId(this.employee.id)
      .subscribe((employees: IEmployee[]) => this.managedEmployees = employees)
  }

  hideEmployees() {
    this.buttonText = "Show Employees"
    this.managedEmployees = undefined
  }

  clickHandler() {
    this.employeesShown ? this.hideEmployees() : this.showEmployees()
    this.employeesShown = !this.employeesShown
  }
}
