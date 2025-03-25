import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact = {
    name: '',
    phone: '',
    email: '',
    address: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push(this.contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    alert('Contact added successfully!');
    this.router.navigate(['/contact-list']);
  }
}
