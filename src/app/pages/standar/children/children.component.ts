import { Component } from '@angular/core';
import { PuedeDesactivar } from 'src/app/guards/children.guard';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements PuedeDesactivar {

  sended = false;
  msg: string;

  constructor() { }

  send(){
    alert('Mensaje enviado: ' + this.msg);
    this.sended = true;
  }

  permitirSalirDeRuta(){
    if(!this.msg || this.sended){
      return true
    }
    const confirm = window.confirm('Seguro que querés salir? Perderás todos los cambios');
    return confirm
  }

}
