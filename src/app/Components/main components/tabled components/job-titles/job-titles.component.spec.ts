import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTitlesComponent } from './job-titles.component';

describe('JobTitlesComponent', () => {
  let component: JobTitlesComponent;
  let fixture: ComponentFixture<JobTitlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JobTitlesComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTitlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
