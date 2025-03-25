import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { UpdateContactComponent } from './components/update-contact/update-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/contact-list', pathMatch: 'full' },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'contact-list', component: ContactListComponent },
  { path: 'update-contact/:index', component: UpdateContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
