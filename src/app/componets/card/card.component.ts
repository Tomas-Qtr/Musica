import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public materias: any = [];

  constructor() {
    this.materias = [
      {
        nombre:'guitarra',
        subtitulo:'Esteban Lamote',
        imagen:'',
        texto:''

      },
      {
        nombre:'Piano',
        subtitulo:'Huho Sanchez',
        imagen:'',
        texto:''

      },
      {
        nombre:'Bateria',
        subtitulo:'Andres Iniesta',
        imagen:'',
        texto:''

      },
      {
        nombre:'Bajo',
        subtitulo:'Andres Puyol',
        imagen:'',
        texto:''

      },
    ]
   }

  ngOnInit(): void {
  }

}

/**
 * editar dinos
 */