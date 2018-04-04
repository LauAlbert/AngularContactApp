import { Location } from '@angular/common';
import { PersonService } from './../person.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {
  contact: Person;

  constructor(private personService: PersonService, private router: Router, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.getContact();
  }

  getContact(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.personService.getContact(+id - 1)
        .subscribe(contact => this.contact = contact);
    } else {
      this.contact = new Person();
    }

  }

  Back(): void {
    this.location.back();
  }

  onUpdate(): void {
    this.router.navigate(['/']);
  }

  onAdd(): void {
    this.personService.postContact(this.contact);
    this.router.navigate(['/']);
  }
}
