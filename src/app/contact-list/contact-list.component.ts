import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: Person[] = [];

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    this.personService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  onDelete(contact: Person): void {
    this.personService.deleteContact(contact);
    console.log(contact);
  }
}
