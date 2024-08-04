import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonComponent } from '@angular-monorepo/shared';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  selector: 'app-loginApp-entry',
  templateUrl: './entry.component.html',
  styleUrl:'./entry.component.scss'
})
export class RemoteEntryComponent {
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
