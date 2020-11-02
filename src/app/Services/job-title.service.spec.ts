import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { JobTitleService } from './job-title.service';

describe('JobTitleService', () => {
  let service: JobTitleService;
  let httpMock: HttpTestingController
  let JobTitleUrl: string = "http://localhost:8080/api/orgchart/titles/"
  let archivedJobTitleUrl: string = JobTitleUrl + "archives"

  let mockJobTitles = [
    {
      "id": 1,
      "isActive": true,
      "name": "Mock Title"
    },
    {
      "id": 2,
      "isActive": true,
      "name": "Other Mock Title"
    }]


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobTitleService],
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(JobTitleService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('expects getJobTitles to call correct URL with a GET request',
    inject([HttpTestingController, JobTitleService],
      (httpMock: HttpTestingController, service: JobTitleService) => {
        service.getJobTitles().subscribe()

        let http = httpMock.expectOne(JobTitleUrl)
        expect(http.request.method).toBe("GET")
      }))

  it('expects getArchivedJobTitles to call correct URL with a GET request',
    inject([HttpTestingController, JobTitleService],
      (httpMock: HttpTestingController, service: JobTitleService) => {
        service.getArchivedJobTitles().subscribe()

        let http = httpMock.expectOne(archivedJobTitleUrl)
        expect(http.request.method).toBe("GET")
      }))

  it('expects getJobTitleId to call correct URL with a GET request',
    inject([HttpTestingController, JobTitleService],
      (httpMock: HttpTestingController, service: JobTitleService) => {
        let JobTitleId = Math.floor(100 * Math.random())
        service.getJobTitleById(JobTitleId).subscribe()

        let http = httpMock.expectOne(JobTitleUrl + JobTitleId)
        expect(http.request.method).toBe("GET")
      }))

  it('expects createJobTitle to call correct URL with a POST request',
    inject([HttpTestingController, JobTitleService],
      (httpMock: HttpTestingController, service: JobTitleService) => {
        service.createJobTitle(mockJobTitles[0]).subscribe()

        let http = httpMock.expectOne(JobTitleUrl)
        expect(http.request.method).toBe("POST")
      }))

  it('expects updateJobTitle to call correct URL with a PUT request',
    inject([HttpTestingController, JobTitleService],
      (httpMock: HttpTestingController, service: JobTitleService) => {
        service.updateJobTitle(mockJobTitles[0]).subscribe()

        let http = httpMock.expectOne(JobTitleUrl)
        expect(http.request.method).toBe("PUT")
      }))

  it('expects deleteJobTitle to call correct URL with a DELETE request',
    inject([HttpTestingController, JobTitleService],
      (httpMock: HttpTestingController, service: JobTitleService) => {
        service.deleteJobTitle(mockJobTitles[0].id).subscribe()

        let http = httpMock.expectOne(JobTitleUrl + mockJobTitles[0].id)
        expect(http.request.method).toBe("DELETE")
      }))
});
