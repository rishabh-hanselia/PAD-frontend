// Abhishek

import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})

//   type User = {
//     id: number,
//     email: string,
//     name: string
//   }
// type GetUserData = {
//   data: User
// }
export class AuthService {
  constructor() { }
  async getUser(email: string, name: string, pass: string) {
    return await axios({
      url: "http://localhost:5000/api/register",
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      data: {
        email: email, password: pass, name: name
      }
    })
  }
  async loginUserAxios(email: string, pass: string) {
    return await axios({
      url: "http://localhost:5000/api/login",
      method: "POST",
      headers: {
        'Content-Type': "application/json",
      },
      data: {
        email: email, password: pass
      }
    })
  }
  users: registerNS.IusersService = {};
  currentUser: string = '';
  // Rishabh


  async registeruser(email: string, pass: string, name: string) {
    console.log(this.getUser(email, name, pass));
    this.users = { ...this.users, [email]: `${pass},|${name}` };
    this.currentUser = email;
  }

  loginUser(email: string, pass: string): boolean {
    console.log(this.loginUserAxios(email, pass))
    if (!this.users[email]) {
      return false;
    } else {
      if (this.users[email]?.split(',|')[0] === pass) {
        this.currentUser = email;
        return true;
      } else {
        return false;
      }
    }
  }
  // Rishabh
  emailAlreadyExits(email: string): boolean {
    if (this.users[email]) {
      return true;
    } else return false;
  }

  getUsername(): string {
    return this.users[this.currentUser]?.split(',|')[1];
  }

  logoutUser(): void {
    this.currentUser = '';
  }
}
