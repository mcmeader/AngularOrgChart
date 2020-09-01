import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiService} from "./api.service";
import {Employee} from "../employees/employee";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private serviceUrl: string = "/emps"

  constructor(private apiService: ApiService) { }

  getEmployees() : Observable<Employee[]> {
    return this.apiService.get<Employee[]>(this.serviceUrl);
  }

  getArchivedEmployees() {
    return this.apiService.get<Employee[]>(this.serviceUrl + "/archives");
  }

  getEmployeesByManagerId(managerId) {
    return this.apiService.get<Employee[]>(`${this.serviceUrl}/manager/${managerId}`);
  }

  getEmployeeById(employeeId) {
    return this.apiService.get<Employee>(`${this.serviceUrl}/${employeeId}`)
  }

  createEmployee(employee) {
    return this.apiService.post<Employee>(this.serviceUrl, employee);
  }

  updateEmployee(employee) {
    return this.apiService.put<Employee>(this.serviceUrl, employee);
  }

  deleteEmployee(employeeId) {
    return this.apiService.delete(`${this.serviceUrl}/${employeeId}`);
  }

}
