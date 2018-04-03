import { Person } from './person';
import { Injectable } from '@angular/core';
import { PERSONDATABASE } from './person-database';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class PersonService {

  constructor() { }

  getContacts(): Observable<Person[]> {
    return of(PERSONDATABASE);
  }

  deleteContact(item: Person)
  {
    const index = PERSONDATABASE.indexOf(item);
    PERSONDATABASE.splice(index, 1);
  }
}
