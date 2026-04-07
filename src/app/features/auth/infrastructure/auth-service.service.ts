import { HttpClient } from '@angular/common/http';
import { Component, inject, Injectable } from '@angular/core';
import { environment } from '@env';
import { Observable } from 'rxjs';
import { AuthResponse } from 'src/app/features/auth/interfaces/auth-response.interface';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  http: HttpClient = inject(HttpClient);
  /**
   * Makes a call to the DB to get the JWT token for the user
   * @param name
   * @param password
   * @returns
   */
  login(name: string, password: string): Observable<AuthResponse> {
    const backendApi: string = environment.apiUrl;
    const endpointPath = `${environment.apiUrl}/users?userId=1`;
    return this.http.get<AuthResponse>(endpointPath);
  }
}
