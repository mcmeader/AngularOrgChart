import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { IEmployee } from 'src/app/Interfaces/EmployeeInterface';

@Component({
  selector: 'manager-select-field',
  templateUrl: './manager-select-field.component.html',
  styleUrls: ['./manager-select-field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class ManagerSelectFieldComponent {
  @Input() text: string
  @Input() input: number
  @Input() name: string
  @Input() employees: IEmployee[]
}
