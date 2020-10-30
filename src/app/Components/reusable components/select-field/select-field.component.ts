import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class SelectFieldComponent {
  @Input() label: string
  @Input() input: string
  @Input() name: string
  @Input() selectOptions: Object[]
}
