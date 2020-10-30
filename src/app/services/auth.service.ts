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
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(loginForm) {
    let input = loginForm.ticket.trim();
    let found = tickets['default'].filter(item => item.number === input);

    if (found[0]) {
      let rawToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'; 
      const decodedToken = this.jwtHelper.decodeToken(rawToken);
      
      localStorage.setItem('token', rawToken);
      const decodedUser = this.decodeUserFromToken(rawToken);
      this.setCurrentUser(decodedToken);
    }
    return this.loggedIn;
  }

  logout() {
    localStorage.removeItem('token');
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

    this.currentUser._id = decodedUser._id;
    this.currentUser.username = decodedUser.username;
    this.currentUser.role = decodedUser.role;
      decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    delete decodedUser.role;
  }

}
