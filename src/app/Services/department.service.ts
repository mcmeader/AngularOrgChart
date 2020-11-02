import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IDepartment } from '../Interfaces/DepartmentInterface';

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {
  serviceUrl: string = "http://localhost:8080/api/orgchart/depts/"
  archivedDeptsUrl: string = this.serviceUrl + "archives"
  departmentListChanged: boolean = true

  currentDepartments: IDepartment[]
  currentDepartment: IDepartment

  constructor(private http: HttpClient) { }

  getActiveDepartments() {
    return this.http.get<IDepartment[]>(this.serviceUrl)
  }

  getArchivedDepartments() {
    return this.http.get<IDepartment[]>(this.archivedDeptsUrl)
  }

  getDepartmentById(departmentId: number) {
    return this.http.get<IDepartment>(this.serviceUrl + departmentId)
  }

  createDepartment(department: IDepartment) {
    return this.http.post(this.serviceUrl, department)
  }

  updateDepartment(department: IDepartment) {
    return this.http.put(this.serviceUrl, department)
  }

  deleteDepartment(departmentId: number) {
    return this.http.delete(this.serviceUrl + departmentId)
  }
}
