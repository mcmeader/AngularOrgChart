import { Component, Input, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class InputFieldComponent implements OnInit {
  @Input() text: string
  @Input() input
  @Input() name
  @Input() maxLength: string
  @Input() inputCondition: boolean

  invalidCharacters = new RegExp(/^[a-z .A-Z]+$/)
  errorText: string

  ngOnInit(): void {
    this.errorText = this.name + " contains an invalid character!"
  }
}
