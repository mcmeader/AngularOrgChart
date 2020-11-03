import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFieldComponent } from './select-field.component';

describe('SelectFieldComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  let label: string = Math.random().toString(36).slice(2)
  let input: string = Math.random().toString(36).slice(2)
  let name: string = Math.random().toString(36).slice(2)
  let options: any[] = [{ name: Math.random().toString(36).slice(2), id: 0 },
  { name: Math.random().toString(36).slice(2), id: 1 },
  { name: Math.random().toString(36).slice(2), id: 2 }]

  let divComponent
  let selectComponent
  let optionComponents
  let labelComponent

  @Component({
    selector: `host-component`,
    template: `<select-field [selectOptions]="testOptions" [label]="testLabel" 
    [input]="testInput" [name]="testName"></select-field>`
  })
  class TestHostComponent {
    testLabel: string = label
    testInput: string = input
    testName: string = name
    testOptions: Object[] = options
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, SelectFieldComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    divComponent = fixture.nativeElement.querySelector('div')
    selectComponent = fixture.nativeElement.querySelector('select')
    optionComponents = fixture.nativeElement.querySelectorAll('option')
    labelComponent = fixture.nativeElement.querySelector('label')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have display text equal to label', () => {
    expect(labelComponent.innerText).toContain(label)
  })

  it('should display name values of select options provided with ids of those provided', () => {
    let components = []
    optionComponents.forEach(option =>
      components.push([option.innerText.trim(), option.value])
    )

    options.forEach(option =>
      expect(components.some(component =>
        component[0] == option.name && component[1] == option.id)).toBeTrue()
    )
  })

  it('should have select name attribute match provided value', () => {
    expect(selectComponent.name).toContain(name)
  })

  it('should have a select field be required with class containing form-control', () => {
    expect(selectComponent.required).toBeTrue()
  })

  it('should be wrapped in a div with class form-group', () => {
    expect(divComponent.className).toContain("form-group")
  })
});
