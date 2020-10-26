import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IDepartment } from 'src/app/Interfaces/DepartmentInterface';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {
  text: string = "Department Name"
  department: IDepartment = { id: null, isActive: true, name: "", parentDepartment: null, manager: null }

  constructor(
    private departmentService: DepartmentService,
    private toastr: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let departmentId = this.route.snapshot.paramMap.get("id")
    this.departmentService.getDepartmentById(parseInt(departmentId))
      .subscribe((data: IDepartment) => this.department = data)
  }

  onSubmit() {
    this.departmentService.createDepartment(this.department).subscribe(() => {
      this.toastr.success("Department Information Changed Successfully!")
    })
  }
}
