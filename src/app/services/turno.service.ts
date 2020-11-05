import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Appointment } from '../classes/appointment';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  constructor(
    private firestore: AngularFirestore,
    public fireStorage: AngularFireStorage
  ) { }

  getElements(){
    return this.firestore.collection('turnos').ref;
  }

  createElement(turno: Appointment){
    this.firestore.collection('turnos').add(turno);
  }

  modifyElement(turno : Appointment){
    this.firestore.collection('disponibilidades').doc(turno.id).update(turno);
  }
}
