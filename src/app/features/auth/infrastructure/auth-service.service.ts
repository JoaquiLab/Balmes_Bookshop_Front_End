import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
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
    console.log('name:', name)
    console.log('password: ', password)
    const endpointPath = `${environment.apiUrl}/users?userId=1`;
    return this.http.get<AuthResponse>(endpointPath);
  }
}
