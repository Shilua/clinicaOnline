import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantallausuario',
  templateUrl: './pantallausuario.component.html',
  styleUrls: ['./pantallausuario.component.css']
})
export class PantallausuarioComponent implements OnInit {
  especialities: Array<any> = [];
  dates: Array<any> = [];
  turnos: Array<any> = [];
  turnosUsuario: Array<any> = [{
    especialidad: 'Cardiologia',
    medico: 'Dr Cuarentena',
    dia: 'Miercoles 15',
    hora: '10 AM'
  },
  {
    especialidad: 'Cardiologia',
    medico: 'Dr Cuarentena',
    dia: 'Miercoles 15',
    hora: '10 AM'
  }];


  constructor() { }

  ngOnInit(): void {
  }

}
