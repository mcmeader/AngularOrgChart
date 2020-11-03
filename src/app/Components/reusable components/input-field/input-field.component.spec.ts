import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

import { InputFieldComponent } from './input-field.component';

describe('InputFieldComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let label: string = Math.random().toString(36).slice(2)
  let input: string = Math.random().toString(36).slice(2)
  let name: string = Math.random().toString(36).slice(2)
  let maxLength: number = 1

  let divComponent
  let errorComponent
  let inputComponent
  let labelComponent

  @Component({
    selector: `host-component`,
    template: `<input-field [text]="testLabel" [input]="testInput" 
    [name]="testName" [maxLength]="testLength"></input-field>`
  })
  class TestHostComponent {
    testLabel: string = label
    testInput: string = input
    testName: string = name
    testLength: number = maxLength
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TestHostComponent, InputFieldComponent, NgForm],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    divComponent = fixture.nativeElement.querySelector('div')
    inputComponent = fixture.nativeElement.querySelector('input')
    labelComponent = fixture.nativeElement.querySelector('label')
    console.info(divComponent, inputComponent, labelComponent)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // describe('Inputs', () => {
  //   it('should have the label text provided', () => {
  //     // console.info(fixture, component, fixture.nativeElement)
  //     expect(false).toBeTrue()
  //   })

  //   it('should have input name attribute match provided value', () => {
  //   })

  //   it('should have an input field with pattern matching expected pattern', () => {
  //   })

  //   it('should have an input field with max character length matching provided value', () => {
  //   })

  //   it('should have input field required with class name form-group', () => {
  //   })

  //   it('should have a div with class error-message', () => {
  //   })

  //   it('should be wrapped in a div with class form-group', () => {
  //   })
  // })

  // describe('Error Field', () => {
  //   it('should have visible error message field on invalid input and dirty input', () => {
  //   })

  //   it('should have visible error message field on invalid input and touched input', () => {
  //   })

  //   it('should have error with correct message on pattern error', () => {
  //   })

  //   it('should have error with correct message on required error', () => {
  //   })

  //   it('should have visible error message field on invalid input and dirty input', () => {
  //   })

  //   it('should have visible error message field on invalid input and touched input', () => {
  //   })

  //   it('should have error with correct message on pattern error', () => {
  //   })

  //   it('should have error with correct message on required error', () => {
  //   })
  // })

});
