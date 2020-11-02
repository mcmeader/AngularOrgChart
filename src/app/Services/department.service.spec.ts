import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { DepartmentService } from './department.service';

describe('DepartmentService', () => {
  let service: DepartmentService;
  let httpMock: HttpTestingController
  let departmentUrl: string = "http://localhost:8080/api/orgchart/depts/"
  let archivedDepartmentUrl: string = departmentUrl + "archives"

  let mockDepartments = [
    {
      "id": 1,
      "isActive": true,
      "parentDepartment": null,
      "manager": null,
      "name": "Department"
    },
    {
      "id": 2,
      "isActive": true,
      "parentDepartment": null,
      "manager": null,
      "name": "Department Two"
    }]


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DepartmentService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(DepartmentService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects getActiveDepartments to call correct URL with a GET request',
    inject([HttpTestingController, DepartmentService],
      (httpMock: HttpTestingController, service: DepartmentService) => {
        service.getActiveDepartments().subscribe()

        let http = httpMock.expectOne(departmentUrl)
        expect(http.request.method).toBe("GET")
      }))

  it('expects getArchivedDepartments to call correct URL with a GET request',
    inject([HttpTestingController, DepartmentService],
      (httpMock: HttpTestingController, service: DepartmentService) => {
        service.getArchivedDepartments().subscribe()

        let http = httpMock.expectOne(archivedDepartmentUrl)
        expect(http.request.method).toBe("GET")
      }))

  it('expects getDepartmentId to call correct URL with a GET request',
    inject([HttpTestingController, DepartmentService],
      (httpMock: HttpTestingController, service: DepartmentService) => {
        let departmentId = Math.floor(100 * Math.random())
        service.getDepartmentById(departmentId).subscribe()

        let http = httpMock.expectOne(departmentUrl + departmentId)
        expect(http.request.method).toBe("GET")
      }))

  it('expects createDepartment to call correct URL with a POST request',
    inject([HttpTestingController, DepartmentService],
      (httpMock: HttpTestingController, service: DepartmentService) => {
        service.createDepartment(mockDepartments[0]).subscribe()

        let http = httpMock.expectOne(departmentUrl)
        expect(http.request.method).toBe("POST")
      }))

  it('expects updateDepartment to call correct URL with a PUT request',
    inject([HttpTestingController, DepartmentService],
      (httpMock: HttpTestingController, service: DepartmentService) => {
        service.updateDepartment(mockDepartments[0]).subscribe()

        let http = httpMock.expectOne(departmentUrl)
        expect(http.request.method).toBe("PUT")
      }))

  it('expects deleteDepartment to call correct URL with a DELETE request',
    inject([HttpTestingController, DepartmentService],
      (httpMock: HttpTestingController, service: DepartmentService) => {
        service.deleteDepartment(mockDepartments[0].id).subscribe()

        let http = httpMock.expectOne(departmentUrl + mockDepartments[0].id)
        expect(http.request.method).toBe("DELETE")
      }))
});
