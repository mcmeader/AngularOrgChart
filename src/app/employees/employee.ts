import {JobTitle} from "../job-titles/job-title";

export interface Employee {
  id: bigint,
  firstName: string,
  lastName: string,
  jobTitle: JobTitle
}
