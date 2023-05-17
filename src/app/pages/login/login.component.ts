import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  message: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.message = '';

    if (!this.loginForm.valid) {
      const username = this.loginForm.get('username')?.errors;
      const password = this.loginForm.get('password')?.errors;

      this.message =
        username?.['required'] || password?.['required']
          ? 'Por favor, llene todos los campos'
          : password?.['minlength']
          ? 'La contraseña debe tener al menos 8 caracteres'
          : '';

      return;
    }

    console.log(this.loginForm.value);
    // TODO: Implementar lógica de login
    this.router.navigateByUrl(`sistema/`);
    this.loginForm.reset();
  }
}
