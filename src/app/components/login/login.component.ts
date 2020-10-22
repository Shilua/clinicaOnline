import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../../classes/user';
import { AuthService } from "../../services/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = new User();
  constructor(private authSvc:AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onLogin(){
    this.authSvc.onLogin(this.user).then(res => {
      this.router.navigate(['/principal']);
    }).catch(err => alert('Usuario o Contraseña incorrectas'))
  }

  cargarUsuario(){
    this.user.email = "admin@admin.com";
    this.user.password = "administrador";
  }

  register(){
    this.router.navigate(['/registro']);
  }
}