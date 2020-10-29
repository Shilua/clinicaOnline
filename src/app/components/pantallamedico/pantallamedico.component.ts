import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pantallamedico',
  templateUrl: './pantallamedico.component.html',
  styleUrls: ['./pantallamedico.component.css']
})
export class PantallamedicoComponent implements OnInit {
  especialities: Array<any> = [];
  dates: Array<any> = [];
  horario: Array<any> = [];
  turnosMedico: Array<any> = [{
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
