import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { LoginServicesService } from '../services/login-services.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  submitting :boolean = false;

  constructor(private formBuilder: FormBuilder, 
              private loginService: LoginServicesService, 
              private router: Router) {

      this.form = formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required,],
    })

   }

  ngOnInit(): void {
  }

  onSubmit() {
    let reference = this;
    reference.submitting = true;
    let _router = this.router;
    this.loginService.getToken(this.form.get(['email'])?.value, this.form.get(['password'])?.value).subscribe({
      next(response) {
        sessionStorage.setItem("token", response.token);
        _router.navigate(['home']);
        reference.submitting = false;
        console.log(response.token);
      },
      error(err) {
        Swal.fire({
          title: "Acceso denegado.",
          icon: "error",
          buttonsStyling: false,
          customClass: {
            confirmButton: "btn btn-danger mx-2",
          }
        });
        reference.submitting = false;
      }
    });
  }
  

}
