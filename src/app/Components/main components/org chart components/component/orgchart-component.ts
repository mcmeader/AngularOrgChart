import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/Interfaces/EmployeeInterface';

@Component({
  selector: 'orgchart-component',
  templateUrl: './orgchart-component.component.html',
  styleUrls: ['./orgchart-component.component.scss']
})
export class OrgchartComponent implements OnInit {
  @Input() employee: IEmployee

  constructor() { }

  ngOnInit(): void {
  }

  showEmployees() {

  }

}
