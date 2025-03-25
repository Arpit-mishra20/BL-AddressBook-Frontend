import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadContacts();
  }

  loadContacts() {
    this.contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
  }

  deleteContact(index: number) {
    if (confirm('Are you sure you want to delete this contact?')) {
      this.contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(this.contacts));
      this.loadContacts(); // Refresh list
    }
  }

  editContact(index: number) {
    this.router.navigate(['/update-contact', index]);
  }
}
