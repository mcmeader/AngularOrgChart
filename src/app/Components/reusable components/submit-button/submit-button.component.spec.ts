import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitButtonComponent } from './submit-button.component';

describe('SubmitButtonComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitButtonComponent, TestHostComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be disabled on form being invalid', () => {
    component.form = {
      valid: false,
      pristine: false
    }
    fixture.detectChanges()
    let button = fixture.nativeElement.querySelector('button')
    expect(button.disabled).toBe(true)
  })

  it('should be disabled on form being pristine', () => {
    component.form = {
      valid: true,
      pristine: true
    }
    fixture.detectChanges()
    let button = fixture.nativeElement.querySelector('button')
    expect(button.disabled).toBe(true)
  })

  it('should be enabled on form being valid and not pristine', () => {
    component.form = {
      valid: true,
      pristine: false
    }
    fixture.detectChanges()
    let button = fixture.nativeElement.querySelector('button')
    expect(button.disabled).toBe(false)
  })

  @Component({
    selector: `host-component`,
    template: `<submit-button [form]="form"></submit-button>`
  })
  class TestHostComponent {
    form = {
      valid: false,
      pristine: false
    }
  }

})