import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';
import { UserService } from './user.service';
import { User } from '../shared/models/user.model';

import * as tickets from '../../assets/json/tickets.json';

@Injectable({
  'providedIn': 'root'
})
export class AuthService {
  
  loggedIn = false;
  isAdmin = false;

  currentUser: User = new User();

  constructor(private userService: UserService,
              private jwtHelper: JwtHelperService) {
    const token = localStorage.getItem('jfk-lancer-token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(loginForm) {
    let input = loginForm.ticket.trim();
    const ticketIndex = tickets['default'].findIndex(item => item.number === input);
   
    if (ticketIndex > -1) {
      let rawToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBc3Nhc3NpbmF0aW9uIENvbmZlcmVuY2UiLCJpYXQiOjE2MDU5MzkxODcsImV4cCI6MTYwOTM5NTE4NywiYXVkIjoiYXNzYXNzaW5hdGlvbmNvbmZlcmVuY2UuY29tIiwic3ViIjoiIiwicm9sZSI6ImxpbWl0ZWQtYWNjZXNzIiwiX2lkIjoicXdlcnR5dWlvcGFzZGZnaGprbHp4Y3Zibm0xMjM0NTYifQ.e-e8IYsijjQHtOTph4SkHaccPgDX8Z5_XcsXs2iO_Ik';

      if (ticketIndex <= 100) {
        rawToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBc3Nhc3NpbmF0aW9uIENvbmZlcmVuY2UiLCJpYXQiOjE2MDU5MzkxODcsImV4cCI6MTYwOTM5NTE4NywiYXVkIjoiYXNzYXNzaW5hdGlvbmNvbmZlcmVuY2UuY29tIiwic3ViIjoiIiwicm9sZSI6ImFsbC1hY2Nlc3MiLCJfaWQiOiJxd2VydHl1aW9wYXNkZmdoamtsenhjdmJubTEyMzQ1NiJ9.KXRi7nP4b-0x7oaF1pPIGGIHmMOXFlkYg0Y125mDzq4';
      }

      const decodedToken = this.jwtHelper.decodeToken(rawToken);
      localStorage.setItem('jfk-lancer-token', rawToken);

      this.setCurrentUser(decodedToken);
    }
    return this.loggedIn;
  }

  logout() {
    localStorage.removeItem('jfk-lancer-token');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = new User();
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token);
  }

  setCurrentUser(decodedUser) {
    // User is logged in
    this.loggedIn = true;
    this.currentUser = {
      _id: decodedUser._id,
      iss: decodedUser.iss,
      iat: decodedUser.iat,
      exp: decodedUser.exp,
      aud: decodedUser.aud,
      role: decodedUser.role
    };
  }

}
