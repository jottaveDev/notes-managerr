import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../../models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:3000';

  getContacts() {
    return this.http.get<Contact[]>(`${this.apiUrl}/contacts`);
  }

  postContact(contact: Contact) {
    return this.http.post<Contact>(`${this.apiUrl}/contacts`, contact);
  }

  editContact(id: string, contact: Contact) {
    return this.http.put<Contact>(`${this.apiUrl}/contacts/${id}`, contact);
  }

  deleteContact(contactId: string) {
    return this.http.delete(`${this.apiUrl}/contacts/${contactId}`);
  }
}
