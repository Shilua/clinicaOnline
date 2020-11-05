import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Especiality } from '../classes/especiality';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(
    private firestore: AngularFirestore,
    public fireStorage: AngularFireStorage
  ) { }

  getElements(){
    return this.firestore.collection('especialidades').ref;
  }

  createElements(especialidades: Array<Especiality>){
    especialidades.forEach(especialidad => {
       this.createElement(especialidad);
     });
  }

  createElement(especialidad: Especiality){
    this.firestore.collection('especialidades').add(especialidad);
  }

  modifyElement(especialidad : Especiality){
    this.firestore.collection('especialidades').doc(especialidad.name).update(especialidad);
  }
}
