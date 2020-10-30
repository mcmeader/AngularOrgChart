import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InputFieldComponent {
  @Input() text: string
  @Input() input: string
  @Input() name: string
  @Input() maxLength: string
}
