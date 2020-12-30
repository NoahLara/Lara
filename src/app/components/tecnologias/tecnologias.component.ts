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
      name:"Desarrollo Web",
      herramientas:[
        {
          name:"CSS",
          version:"3",
          logo:"../../../assets/css3.png",
          color:"primary",
          value:"85"
        },
        {
          name:"JavaScript",
          version:"ECMAScript 6",
          logo:"../../../assets/javascript.png",
          color:"warn",
          value:"60"
        },
        {
          name:"HTML",
          version:"5",
          logo:"../../../assets/html5.png",
          color:"primary",
          value:"90"
        },
        
        {
          name:"AngularJs",
          version:"9+",
          logo:"../../../assets/angularjs.png",
          color:"warn",
          value:"70"
        }
      ]
    },
    {
      name:"Diseño Gráfico",
      herramientas:[
        {
          name:"Photoshop",
          version:"CS6",
          logo:"../../../assets/photoshop.jpg",
          color:"primary",
          value:"40"
        },
        {
          name:"Illustrator",
          version:"CS6",
          logo:"../../../assets/illustrator.png",
          color:"warn",
          value:"50"
        }
      ]
    }
    
  ]

}
