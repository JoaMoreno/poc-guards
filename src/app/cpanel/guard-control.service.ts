import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

type UserType = 'admin'|'standar'|'public'
type Role = 'deudor'|'regular'
export interface OptionsUserStatus {
  isLogged: boolean
  userType: UserType
  role: Role
}
@Injectable({
  providedIn: 'root'
})
export class GuardControlService {

  private isLogged: boolean
  private userType: UserType
  private role: Role

  constructor() {
    // Initialization
    this.isLogged = false
    this.userType = 'admin'
    this.role = 'regular'
   }

  userStatus(){
    return of<OptionsUserStatus>({
      isLogged: this.isLogged,
      userType: this.userType,
      role: this.role
    })
  }

  setUserStatus(options: OptionsUserStatus){
    this.isLogged = options.isLogged;
    this.userType = options.userType;
    this.role = options.role;
  }

  getStatusIsLogged = ()=> this.isLogged;
  getStatusUserType = ()=> this.userType;
  getStatusRole     = ()=> this.role;

  toggleLoggedStatus(){
    this.isLogged = !this.isLogged
  }
  setUserType(type : UserType){
    this.userType = type
  }
}
