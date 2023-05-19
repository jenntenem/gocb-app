import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    this.message = '';

    if (!this.continue()) return;
    // * Lógica de login
    this.loginService.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        if (!res.error) {
          this.loginService.User.emit(res.datos);
          this.getRol(res.datos.id_rol);
          this.router.navigateByUrl(`/sistema`);
        }
      },
      error: (error?: any) => {},
      complete: () => {
        this.loginForm.reset();
      },
    });
  }

  onBlur($event?: any) {
    this.continue();
  }

  continue() {
    if (this.loginForm.valid) return true;

    const username = this.loginForm.get('username')?.errors;
    const password = this.loginForm.get('password')?.errors;

    this.message =
      username?.['required'] || password?.['required']
        ? 'Por favor, llene todos los campos'
        : password?.['minlength']
        ? 'La contraseña debe tener al menos 5 caracteres'
        : '';

    return false;
  }

  getRol(id_rol: string) {
    this.loginService.getRol(id_rol).subscribe({
      next: (res: any) => {
        if (!res.error) {
          this.loginService.menu.emit(res.datos.menu);
        }
      },
      error: (error?: any) => {},
      complete: () => {},
    });
  }
}
