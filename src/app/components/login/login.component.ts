import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../classes/user';
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  constructor(private authSvc:AuthService, private router: Router, private userSrv: UserService) { }

  ngOnInit() {
  }

  async onLogin(){
    this.authSvc.onLogin(this.user).then(res => {
      if (res.user.emailVerified) {
        this.userSrv.getElements()
        .where('id','==',res.user.uid)
        .get()
        .then((userData) => {
          if (userData.docs[0].data().isActive) {
            this.router.navigate(['/principal']);  
          } else {
            alert('Su usario no esta activo, contactese con el administrador');
          }
        });
      } else{
        alert('Su mail no esta verificado');
        this.router.navigate(['/principal']); //eliminar luego
      }
      
      
    }).catch(err => alert('Usuario o Contraseña incorrectas'))
  }

  cargarUsuario(){
    this.user.email = "shilua@mail.com";
    this.user.password = "falopa23";
  }

  register(){
    this.router.navigate(['/registro']);
  }
}