import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {
  contact: any = { name: '', phone: '', email: '', address: '' };
  index: number = -1;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.index = this.route.snapshot.params['index']; // Get the contact index from URL
    let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    if (this.index >= 0 && this.index < contacts.length) {
      this.contact = { ...contacts[this.index] }; // Load contact data
    } else {
      this.router.navigate(['/contact-list']); // Redirect if invalid index
    }
  }

  updateContact() {
    let contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts[this.index] = this.contact; // Update contact details
    localStorage.setItem('contacts', JSON.stringify(contacts)); // Save to storage
    this.router.navigate(['/contact-list']); // Redirect to list
  }
}
