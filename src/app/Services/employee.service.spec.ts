import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';

describe('Employee Service', () => {
  let service: EmployeeService;
  let httpMock: HttpTestingController
  let employeeUrl: string = "http://localhost:8080/api/orgchart/emps/"
  let archivedEmployeeUrl: string = employeeUrl + "archives"

  let mockEmployees = [{
    "id": 1,
    "isActive": true,
    "firstName": "Mock",
    "lastName": "Employee",
    "middleInitial": "c",
    "manager": null,
    "department": {
      "id": 1,
      "isActive": true,
      "name": "Mock Title"
    },
    "email": null,
    "jobTitle": {
      "id": 1,
      "isActive": true,
      "name": "Mock Title"
    },
    "skypeName": null,
    "isManager": false
  },
  {
    "id": 1,
    "isActive": true,
    "firstName": "Mock",
    "lastName": "Employee",
    "middleInitial": "c",
    "manager": {
      "id": 1,
      "isActive": true,
      "firstName": "Mock",
      "lastName": "Employee",
      "middleInitial": "c",
      "manager": null,
      "department": {
        "id": 1,
        "isActive": true,
        "parentDepartment": null,
        "manager": null,
        "name": "Department"
      },
      "email": null,
      "jobTitle": {
        "id": 1,
        "isActive": true,
        "name": "Mock Title"
      },
      "skypeName": null,
      "isManager": false
    },
    "department": {
      "id": 2,
      "isActive": true,
      "parentDepartment": null,
      "manager": null,
      "name": "Department Two"
    },
    "email": null,
    "jobTitle": {
      "id": 2,
      "isActive": true,
      "name": "Other Mock Title"
    },
    "skypeName": null,
    "isManager": false
  },
  ]

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(EmployeeService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects getEmployees to call correct URL with a GET request',
    inject([HttpTestingController, EmployeeService],
      (httpMock: HttpTestingController, service: EmployeeService) => {
        service.getEmployees().subscribe()

        let http = httpMock.expectOne(employeeUrl)
        expect(http.request.method).toBe("GET")
      }))

  it('expects getArchivedEmployees to call correct URL with a GET request',
    inject([HttpTestingController, EmployeeService],
      (httpMock: HttpTestingController, service: EmployeeService) => {
        service.getArchivedEmployees().subscribe()

        let http = httpMock.expectOne(archivedEmployeeUrl)
        expect(http.request.method).toBe("GET")
      }))

  it('expects getEmployeeId to call correct URL with a GET request',
    inject([HttpTestingController, EmployeeService],
      (httpMock: HttpTestingController, service: EmployeeService) => {
        let EmployeeId = Math.floor(100 * Math.random())
        service.getEmployeeById(EmployeeId).subscribe()

        let http = httpMock.expectOne(employeeUrl + EmployeeId)
        expect(http.request.method).toBe("GET")
      }))

  it('expects createEmployee to call correct URL with a POST request',
    inject([HttpTestingController, EmployeeService],
      (httpMock: HttpTestingController, service: EmployeeService) => {
        service.createEmployee(mockEmployees[0]).subscribe()

        let http = httpMock.expectOne(employeeUrl)
        expect(http.request.method).toBe("POST")
      }))

  it('expects updateEmployee to call correct URL with a PUT request',
    inject([HttpTestingController, EmployeeService],
      (httpMock: HttpTestingController, service: EmployeeService) => {
        service.updateEmployee(mockEmployees[0]).subscribe()

        let http = httpMock.expectOne(employeeUrl)
        expect(http.request.method).toBe("PUT")
      }))

  it('expects deleteEmployee to call correct URL with a DELETE request',
    inject([HttpTestingController, EmployeeService],
      (httpMock: HttpTestingController, service: EmployeeService) => {
        service.deleteEmployee(mockEmployees[0].id).subscribe()

        let http = httpMock.expectOne(employeeUrl + mockEmployees[0].id)
        expect(http.request.method).toBe("DELETE")
      }))
});
