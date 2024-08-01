import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../../../../libs/shared/src/lib/button/button.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
    loginForm!: FormGroup;

    constructor(
        private router: Router
    ){}

    ngOnInit(): void {
        this.loginForm = new FormGroup({
            username: new FormControl(),
            password: new FormControl()
        })
    }

    onSubmit(): void {
        this.router.navigate(['/product']);
    }
}

