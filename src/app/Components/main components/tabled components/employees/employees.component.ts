import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/Interfaces/EmployeeInterface';
import { EmployeeService } from 'src/app/Services/employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  headerData: Array<string> = ["First Name", "Last Name", "Middle Initial", "Actions"]
  mappedBodyData: String[][]
  link: string = "/edit-employee"

  constructor(private employeeService: EmployeeService) {
  }

  getActiveEmployees() {
    this.employeeService.getEmployees()
      .subscribe((data: IEmployee[]) => {
        let activeEmployees = data.filter(employee => employee.isActive == true)
        this.mappedBodyData = activeEmployees.map(employee => [employee.firstName, employee.lastName, employee.middleInitial, employee.id.toString()])
      })
  }

  ngOnInit() {
    this.getActiveEmployees()
  }

  onDelete(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => this.getActiveEmployees())
  }
}
