import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { ContactRequest } from '../models/contact-request.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  sendContactRequest(contactRequest: ContactRequest): Observable<any> {
    return this.http.post(environment.web3Form.api, contactRequest);
  }
}
