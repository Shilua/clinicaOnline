import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private firestore: AngularFirestore,
    public fireStorage: AngularFireStorage
  ) { }

  getElements(){
    return this.firestore.collection('users').ref;
  }

  createElement(user: any, profileImgOne:any, profileImgTwo:any){
    if (profileImgOne) {
      let file = profileImgOne;
      let randomId = Math.random().toString(36).substring(2);
      user.profileImgOne = randomId;
      let fileRef = this.fireStorage.storage.ref(`profileImg/${randomId}.jpg`);
      fileRef.put(file);
    }
    if (profileImgTwo) {
      let file = profileImgTwo;
      let randomId = Math.random().toString(36).substring(2);
      user.profileImgTwo = randomId;
      let fileRef = this.fireStorage.storage.ref(`profileImg/${randomId}.jpg`);
      fileRef.put(file);
    }
    if (user.profile == "Paciente") {
      user.isActive = true;
    }else{
      user.isActive = false;
    }
    
    this.firestore.collection('users').add(user);
  }
}
