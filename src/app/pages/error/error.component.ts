import { Component, OnInit, SimpleChanges, DoCheck } from '@angular/core';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements DoCheck {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  ngDoCheck() {
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
