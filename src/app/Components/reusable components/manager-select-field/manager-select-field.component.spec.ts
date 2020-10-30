import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerSelectFieldComponent } from './manager-select-field.component';

describe('ManagerSelectFieldComponent', () => {
  let component: ManagerSelectFieldComponent;
  let fixture: ComponentFixture<ManagerSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
