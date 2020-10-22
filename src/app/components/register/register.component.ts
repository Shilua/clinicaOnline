import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";
import { UserService } from "../../services/user.service";
import { User } from '../../classes/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User = new User();
  mensaje:string;
  imgOneUrl:string;
  imgTwoUrl:string;
  especiality:string;
  imgOne:File = null;
  imgTwo:File = null;

  constructor(
    private authSvc:AuthService, 
    private userSvc:UserService,
    private router: Router
    ) {

   }
    
  ngOnInit() {
  }

  async onRegister(){
    this.authSvc.onRegister(this.user).then(response => {

      this.authSvc.getCurrentUser().then((response: any) => {
      this.user.id = response.uid;
      this.userSvc.createElement(
        {
          id: this.user.id,
          email: this.user.email,
          profile: this.user.profile
        }, 
        this.imgOne, 
        this.imgTwo
      );
      this.router.navigate(['/principal']);
    });

  }).catch(error => this.mensaje = error);
  }
  handleFirstImg(files: FileList) {
    this.imgOne = files.item(0);
  }
  handleSecondImg(files: FileList) {
    this.imgTwo = files.item(0);
  }

  handleProfile(profile:any){
    this.user.profile = profile;
    console.log(this.user.profile);
  }

  saveEspeciality(){
    this.user.especiality.push(this.especiality);
    console.log(this.user.especiality);
  }

  login(){
    this.router.navigate(['/']);
  }

}
