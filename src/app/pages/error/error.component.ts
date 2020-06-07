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
    L: ["logged"],
    LA: ["logged","admin"],
    LS: ["logged","standar"],
    LR: ["logged","standar","regular"],
    LD: ["logged","standar","deudor"]
  }

  setAccessRequired(){ 
    this.requiredAccess = this.accessMap[this.activatedRoute.snapshot.params.access]
  }

}
