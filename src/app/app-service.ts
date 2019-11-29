import { Injectable } from '@angular/core';
import { RegisterEmployee } from './model/registerEmployee'
@Injectable({
  providedIn: 'root'
})
export class AppService {

  registeredEmployees: RegisterEmployee[] = [];
  constructor() { }

  setRegisteredEmployees(student): void {
    this.registeredEmployees.push(student);
  }

  getRegisteredEmployees(): RegisterEmployee[] {
    return this.registeredEmployees;
  }
  sortStudent(): void {
    this.registeredEmployees.sort((a, b) => (a.name > b.name) ? 1 : -1)
  }

}
