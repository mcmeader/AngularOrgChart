import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IDepartment } from 'src/app/Interfaces/DepartmentInterface';
import { DepartmentService } from 'src/app/Services/department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.scss']
})
export class CreateDepartmentComponent {
  text: string = "Department Name"
  form: FormGroup
  department: IDepartment = { id: null, isActive: true, name: "", parentDepartment: null, manager: null }

  constructor(
    private departmentService: DepartmentService,
    private toastr: ToastrService,
    private builder: FormBuilder) { }

  ngOnInit() {
    this.form = this.builder.group({
      name: ''
    })
  }

  this.form.valueChanges.subscribe()

onSubmit(form) {
  this.department.name = form.value.department
  this.departmentService.createDepartment(this.department).subscribe(
    () => {
      this.toastr.success("Department Created Successfully!")
      form.reset()
    },
    () => this.toastr.error("A Department With That Name Already Exists!")
  )
}
}
