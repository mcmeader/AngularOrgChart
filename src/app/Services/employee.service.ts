import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IEmployee } from '../Interfaces/EmployeeInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  serviceUrl: string = "http://localhost:8080/api/orgchart/emps/"
  archivedEmpsUrl: string = this.serviceUrl + "archives"
  employeeListChanged: boolean = true

  currentEmployees: Observable<IEmployee[]>

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<IEmployee[]>(this.serviceUrl)
  }

  getArchivedEmployees() {
    return this.http.get(this.archivedEmpsUrl)
  }

  getEmployeeById(employeeId: number) {
    return this.http.get(this.serviceUrl + employeeId)
  }

  getEmployeesByManagerId(managerId: number) {
    return this.http.get(this.serviceUrl + "/manager/" + managerId)
  }

  createEmployee(employee: Object) {
    this.employeeListChanged = true
    return this.http.post(this.serviceUrl, employee)
  }

  updateEmployee(employee: Object) {
    this.employeeListChanged = true
    return this.http.put(this.serviceUrl, employee)
  }

  deleteEmployee(employeeId) {
    this.employeeListChanged = true
    return this.http.delete(this.serviceUrl + employeeId)
  }
}
