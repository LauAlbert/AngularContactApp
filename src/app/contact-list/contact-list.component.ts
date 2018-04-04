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
  currentPageContacts: Person[] = [];
  maxPage: number;
  currentPage = 1;
  pageSize = 5;
  searchFirstName = '';

  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getContacts();
    console.log(this.contacts.length);
    this.maxPage = Math.ceil(this.contacts.length / this.pageSize);
    this.currentPageContacts = this.contacts.slice(0, this.pageSize);
  }

  getContacts(): void {
    this.personService.getContacts()
      .subscribe(contacts => this.contacts = contacts);
  }

  onDelete(contact: Person): void {
    this.personService.deleteContact(contact);
    console.log(contact);
    this.updateList();
  }

  changePageSize(): void {
    this.currentPage = 1;
    this.updateList();

  }

  searchByFirstName(): void {
    this.currentPage = 1;
    this.updateList();
  }

  updateList(): void {

    const filterContacts = this.contacts.filter(contact => contact.firstName.toLowerCase().includes(this.searchFirstName.toLowerCase()));

    this.currentPageContacts = filterContacts.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
    this.maxPage = Math.ceil(filterContacts.length / this.pageSize);
  }
  changePage(page: number): void {
    if (page > 0 && page < this.maxPage + 1) {
      this.currentPage = page;
      this.updateList();
    }
  }

  isFirstPage(): boolean {
    return this.currentPage > 1;
  }

  isLastPage(): boolean {
    return this.currentPage < this.maxPage;
  }
}
