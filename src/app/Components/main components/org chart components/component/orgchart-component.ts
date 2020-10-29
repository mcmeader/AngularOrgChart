import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEmployee } from 'src/app/Interfaces/EmployeeInterface';

@Component({
  selector: 'orgchart-component',
  templateUrl: './orgchart-component.component.html',
  styleUrls: ['./orgchart-component.component.scss']
})
export class OrgchartComponent {
  @Input() employee: IEmployee
  @Input() clickHandler: Function
  @Input() buttonText: string
  @Output() buttonClick = new EventEmitter()

  onClick() {
    this.buttonClick.emit()
  }
}
