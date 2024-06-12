import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient,private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      role: ['user', Validators.required]
    });
  }

  onRegisterSubmit() {
    
    if (this.registerForm.valid) {
      this.http.post('http://localhost:8000/api/register/', this.registerForm.value).subscribe(
        response => {
          console.log('User registered successfully', response);
        },
        error => {
          console.error('There was an error during the request', error);
        }
      );
    }
  }

  navigateToSidebar() {
    this.router.navigate(['/welcome']);
  }
 

 
}
