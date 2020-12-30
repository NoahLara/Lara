import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.css']
})
export class TecnologiasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tecnologias = [
    {
      name:"CSS",
      vrsion:"3",
      logo:"../../../assets/css3.png"
    }
  ]

}
