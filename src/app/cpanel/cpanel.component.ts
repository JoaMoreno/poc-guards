import { Component, OnInit } from '@angular/core';
import { GuardControlService, OptionsUserStatus } from './guard-control.service';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.scss']
})
export class CpanelComponent implements OnInit {

  options: OptionsUserStatus
  isChecked = true;
  constructor(
    private _guardService : GuardControlService
  ) {}

  ngOnInit(): void {
    this.getStatus()
  }

  getStatus(){
    this._guardService.userStatus().subscribe(
      (res)=> {
        this.options = res;
        console.log(this.options);
      }
    )
  }

  setStatus(){
    this._guardService.setUserStatus(this.options);
  }

  get userTypeValid(){
    return this.options.userType === 'admin' || this.options.userType === 'standar'
  }
  get roleForm(){
    return this.options.isLogged && this.userTypeValid
  }

}
