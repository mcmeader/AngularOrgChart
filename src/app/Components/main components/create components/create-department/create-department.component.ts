import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { IDepartment } from 'src/app/Interfaces/DepartmentInterface';
import { DepartmentService } from 'src/app/Services/department-service.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent {
  text: string = "Department Name"
  department: IDepartment = { id: null, isActive: true, name: "", parentDepartment: null, manager: null }

  constructor(
    private departmentService: DepartmentService,
    private toastr: ToastrService) { }

  onSubmit(form) {
    this.department.name = form.value.department
    this.departmentService.createDepartment(this.department).subscribe(() => {
      this.toastr.success("Department Created Successfully!")
      form.reset()
    })
  }
}
