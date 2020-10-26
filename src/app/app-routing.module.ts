import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDepartmentComponent } from './Components/main components/create components/create-department/create-department.component';
import { CreateEmployeeComponent } from './Components/main components/create components/create-employee/create-employee.component';
import { CreateJobTitleComponent } from './Components/main components/create components/create-job-title/create-job-title.component';
import { EditDepartmentComponent } from './Components/main components/edit components/edit-department/edit-department.component';
import { EditEmployeeComponent } from './Components/main components/edit components/edit-employee/edit-employee.component';
import { EditJobTitleComponent } from './Components/main components/edit components/edit-job-title/edit-job-title.component';
import { OrgChartComponent } from './Components/main components/org chart components/org-chart/org-chart.component';
import { DepartmentsComponent } from './Components/main components/tabled components/departments/departments.component';
import { EmployeesComponent } from './Components/main components/tabled components/employees/employees.component';
import { JobTitlesComponent } from './Components/main components/tabled components/job-titles/job-titles.component';

const routes: Routes = [
  {
    path: "org-chart",
    component: OrgChartComponent,
  },
  {
    path: "employees",
    component: EmployeesComponent,
  },
  {
    path: "job-titles",
    component: JobTitlesComponent,
  },
  {
    path: "departments",
    component: DepartmentsComponent,
  },
  {
    path: "create-department",
    component: CreateDepartmentComponent,
  },
  {
    path: "create-employee",
    component: CreateEmployeeComponent,
  },
  {
    path: "create-job-title",
    component: CreateJobTitleComponent,
  },
  {
    path: "edit-job-title/:id",
    component: EditJobTitleComponent,
  },
  {
    path: "edit-employee/:id",
    component: EditEmployeeComponent,
  },
  {
    path: "edit-department/:id",
    component: EditDepartmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
