import { Component, OnInit } from '@angular/core';
import { IDepartment } from 'src/app/Interfaces/DepartmentInterface';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  headerData: Array<string>;
  mappedBodyData: String[][]
  link: string = "/edit-department"

  constructor(private departmentService: DepartmentService) {
    this.headerData = ["Department Name", "Action"]
  }

  getActiveDepartments() {
    this.departmentService.getActiveDepartments()
      .subscribe((data: IDepartment[]) => {
        let departments = data.filter(department => department.isActive == true)
        this.mappedBodyData =
          departments.map(response => [response.name, response.id.toString()])
      })
  }

  ngOnInit(): void {
    this.getActiveDepartments()
  }

  onDelete(id: number) {
    this.departmentService.deleteDepartment(id).subscribe(() => this.getActiveDepartments())
  }

}
