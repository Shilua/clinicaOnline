import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Availability } from '../classes/availability';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadService {

  constructor(
    private firestore: AngularFirestore,
    public fireStorage: AngularFireStorage
  ) { }

  getElements(){
    return this.firestore.collection('disponibilidades').ref;
  }

  createElement(disponibilidad: Availability){
    this.firestore.collection('disponibilidades').add(disponibilidad);
  }

  modifyElement(disponibilidad : Availability){
    this.firestore.collection('disponibilidades').doc(disponibilidad.id).update(disponibilidad);
  }
}
