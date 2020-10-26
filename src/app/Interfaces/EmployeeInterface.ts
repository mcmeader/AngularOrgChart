import { IDepartment } from './DepartmentInterface';
import { IJobTitle } from './JobTitleInterface';

export interface IEmployee {
    id: number,
    email: string,
    isManager: boolean,
    skypeName: string,
    department: IDepartment,
    firstName: string,
    lastName: string,
    middleInitial: string,
    isActive: boolean,
    jobTitle: IJobTitle,
    manager: IEmployee,
}