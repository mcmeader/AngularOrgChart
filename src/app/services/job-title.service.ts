import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {JobTitle} from "../job-titles/job-title";

@Injectable({
  providedIn: 'root'
})
export class JobTitleService {

  private serviceUrl : string = "/titles";

  constructor(private apiService: ApiService) { }

  getActiveJobTitles() {
    return this.apiService.get<JobTitle[]>(this.serviceUrl);
  }

  getArchivedJobTitles() {
    return this.apiService.get<JobTitle[]>(`${this.serviceUrl}/archives`);
  }

  getJobTitleById(jobTitleId) {
    return this.apiService.get<JobTitle>(`${this.serviceUrl}/${jobTitleId}`);
  }

  createJobTitle(jobTitle) {
    return this.apiService.post<JobTitle>(this.serviceUrl, jobTitle);
  }

  updateJobTitle(jobTitle) {
    return this.apiService.put<JobTitle>(this.serviceUrl, jobTitle);
  }

  deleteJobTitle(jobTitleId) {
    return this.apiService.delete(`${this.serviceUrl}/${jobTitleId}`);
  }

}
