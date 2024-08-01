import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { PasswordMatchValidator } from '../../../validators/password_match_validator';
import { IUserRegister } from '../../../interfaces/IUserRegister';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss'
})
export class RegisterPageComponent implements OnInit{
  registerForm! : FormGroup;
  isSubmitted = false;
  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder, 
    private userService:UserService, 
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      confirmPassword: ['',[ Validators.required]],
    }, {
      validator: PasswordMatchValidator('password', 'confirmPassword')
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get fc () {
    return this.registerForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;

    const fv = this.registerForm.value;
    const user: IUserRegister = {
      name: fv.name,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword
    } 

    this.userService.register(user).subscribe(_ => {
      this.router.navigateByUrl(this.returnUrl);
    });
  }
}
