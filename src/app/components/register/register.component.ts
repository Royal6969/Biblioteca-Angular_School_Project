import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users: any;

  user = {
    email: '',
    password: '',
    name: ''
  }

  constructor(
    private authService: AuthService, 
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerService.obtenerTodos("users").subscribe((usuariosRef) => {
      console.log("usuariosRef: ", usuariosRef);
      this.users = usuariosRef.map(userRef => {
        let usuario: any = userRef.payload.doc.data();
        usuario['id'] = userRef.payload.doc.id;
        return usuario;
      });
      console.log(this.users);
    })
  }

  register() {
    const { email, password } = this.user;

    this.authService.register(email, password).then(user => {
      console.log("se registro: ", user);

      let list = [...this.users];
      let existe = list.find(user => user.email == email);

      if (!existe) {
        console.log("USUARIO NUEVO CREADO");

        this.registerService.crear('users', this.user);
      };

      this.router.navigate(['/book-list']);

    }).catch(err => {
      console.log(err)
    })
  }

}
