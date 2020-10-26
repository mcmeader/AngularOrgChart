import { IEmployee } from './EmployeeInterface'

export interface IDepartment {
    id: number,
    isActive: boolean,
    manager: IEmployee,
    name: string,
    parentDepartment: IDepartment
}