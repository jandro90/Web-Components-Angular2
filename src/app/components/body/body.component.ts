import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent implements OnInit {
  private texto:string = 'Este texto pertenece a una propiedad la clase Body Component';
  private autor:string = 'Alejandro!';
  private mostrar:boolean = true;
  private personajes:string[] = ['Spiderman','Venom','Dr. Octopus'];


  constructor() { }

  ngOnInit() {
  }

}
