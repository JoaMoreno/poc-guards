import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.setAccessRequired()
  }

  requiredAccess: []

  accessMap = {
    A: ["admin"],
    L: ["logged"],
    LA: ["logged","admin"],
    LS: ["logged","standard"],
    LR: ["logged","standard","regular"],
    LD: ["logged","standard","deudor"]
  }

  setAccessRequired(){ 
    this.requiredAccess = this.accessMap[this.activatedRoute.snapshot.params.access]
  }

}
