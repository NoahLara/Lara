import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuOptions=[
    {
      option:"Tecnologías",
      url:"#tecnologías",
    },
    {
      option:"Estudios",
      url:"#estudios",
    },
    {
      option:"Acerca de mi",
      url:"#acerca",
    },
    {
      option:"Contactame",
      url:"#contacto",
    },
  ]

}
