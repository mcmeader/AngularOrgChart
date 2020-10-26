import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { IJobTitle } from '../Interfaces/JobTitleInterface';

@Injectable({
  providedIn: 'root'
})

export class JobTitleService {
  serviceUrl: string = "http://localhost:8080/api/orgchart/titles/"
  archivedJobTitleUrl: string = this.serviceUrl + "archives"
  jobTitleListChanged: boolean = true

  jobTitles: IJobTitle[]
  jobTitle: IJobTitle

  constructor(private http: HttpClient) { }

  getJobTitles() {
    return this.http.get<IJobTitle[]>(this.serviceUrl)
  }

  getArchivedJobTitles() {
    return this.http.get(this.archivedJobTitleUrl)
  }

  getJobTitleById(jobTitleId: number) {
    return this.http.get(this.serviceUrl + "/" + jobTitleId)
  }

  createJobTitle(jobTitle: IJobTitle) {
    this.jobTitleListChanged = true
    return this.http.post(this.serviceUrl, jobTitle, { observe: 'response' })
  }

  updateJobTitle(jobTitle: Object) {
    this.jobTitleListChanged = true
    return this.http.put(this.serviceUrl, jobTitle)
  }

  deleteJobTitle(jobTitleId: number) {
    this.jobTitleListChanged = true
    return this.http.delete(this.serviceUrl + "/" + jobTitleId)
  }
}
