import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeesComponent} from "./employees/employees.component";
import {DepartmentsComponent} from "./departments/departments.component";
import {JobTitlesComponent} from "./job-titles/job-titles.component";
import {OrgChartComponent} from "./org-chart/org-chart.component";

const routes: Routes = [
  { path: "", component: OrgChartComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "departments", component: DepartmentsComponent },
  { path: "job-titles", component: JobTitlesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
