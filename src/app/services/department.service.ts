import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Department} from "../departments/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private serviceUrl : string = "/depts";

  constructor(private apiService: ApiService) { }

  getActiveDepartments() {
    return this.apiService.get<Department[]>(this.serviceUrl);
  }

  getArchivedDepartments() {
    return this.apiService.get<Department[]>(`${this.serviceUrl}/archives`);
  }

  getDepartmentById(departmentId) {
    return this.apiService.get<Department>(`${this.serviceUrl}/${departmentId}`);
  }

  createDepartment(department) {
    return this.apiService.post<Department>(this.serviceUrl, department);
  }

  updateDepartment(department) {
    return this.apiService.put<Department>(this.serviceUrl, department);
  }

  deleteDepartment(departmentId) {
    return this.apiService.delete(`${this.serviceUrl}/${departmentId}`);
  }

}
