import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesComponent } from './Components/main components/tabled components/employees/employees.component';
import { DepartmentsComponent } from './Components/main components/tabled components/departments/departments.component';
import { JobTitlesComponent } from './Components/main components/tabled components/job-titles/job-titles.component';
import { CreateDepartmentComponent } from './Components/main components/create components/create-department/create-department.component';
import { CreateEmployeeComponent } from './Components/main components/create components/create-employee/create-employee.component';
import { CreateJobTitleComponent } from './Components/main components/create components/create-job-title/create-job-title.component';
import { SubmitButtonComponent } from './Components/reusable components/submit-button/submit-button.component';
import { AnchorTagComponent } from './Components/reusable components/anchor-tag/anchor-tag.component';
import { EditDepartmentComponent } from './Components/main components/edit components/edit-department/edit-department.component';
import { EditEmployeeComponent } from './Components/main components/edit components/edit-employee/edit-employee.component';
import { EditJobTitleComponent } from './Components/main components/edit components/edit-job-title/edit-job-title.component';
import { CommonModule } from '@angular/common';
import { OrgchartComponent } from './Components/main components/org chart components/component/orgchart-component';
import { OrgChartComponent } from './Components/main components/org chart components/org-chart/org-chart.component';
import { NodeComponent } from './Components/main components/org chart components/node/node.component';
import { InputFieldComponent } from './Components/reusable components/input-field/input-field.component';
import { SelectFieldComponent } from './Components/reusable components/select-field/select-field.component';
import { Sidebar } from './Components/main components/sidebar components/sidebar/sidebar.component';
import { SidebarComponent } from './Components/main components/sidebar components/sidebar-component/sidebar-component.component';
import { ManagerSelectFieldComponent } from './Components/reusable components/manager-select-field/manager-select-field.component';

@NgModule({
  declarations: [
    AppComponent,
    Sidebar,
    EmployeesComponent,
    DepartmentsComponent,
    JobTitlesComponent,
    CreateDepartmentComponent,
    CreateEmployeeComponent,
    CreateJobTitleComponent,
    OrgChartComponent,
    SubmitButtonComponent,
    AnchorTagComponent,
    EditDepartmentComponent,
    EditEmployeeComponent,
    EditJobTitleComponent,
    NodeComponent,
    OrgchartComponent,
    InputFieldComponent,
    SelectFieldComponent,
    SidebarComponent,
    ManagerSelectFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
