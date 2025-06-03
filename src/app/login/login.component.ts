import { Component } from '@angular/core';
import { AuthService } from '../services/hotels.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email= '';
  password= '';
  error='';
  constructor(private authService: AuthService){}

  onLogin(){
    this.authService.login(this.email, this.password)

    .then(() => this.router.navigate(['/dashboard']))
    .catch((error) => {
      console.error('Não foi possível fazer login. Erro: ', error);
    alert('Usuário ou senha inválido')});
  }
  ngOnInit(){
    console.log("Componente login inicializado")
  }
}
