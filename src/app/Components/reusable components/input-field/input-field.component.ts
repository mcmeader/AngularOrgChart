import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InputFieldComponent implements OnInit {
  @Input() text: string
  @Input() input: string
  @Input() name: string
  @Input() maxLength: string

  errorText: string

  ngOnInit(): void {
    this.errorText = this.name + " contains an invalid character!"
  }
}
