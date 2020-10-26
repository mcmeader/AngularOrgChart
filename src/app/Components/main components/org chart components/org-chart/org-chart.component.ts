import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/Interfaces/EmployeeInterface';
import { EmployeeService } from 'src/app/Services/employee.service';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.scss']
})
export class OrgChartComponent implements OnInit {
  baseEmployee: IEmployee

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployeesByManagerId(0).subscribe((employee: IEmployee) => {
      this.baseEmployee = employee[0]
    })
  }
}
