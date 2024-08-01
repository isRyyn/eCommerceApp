

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ButtonComponent } from '@angular-monorepo/shared';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent, ButtonComponent],
  selector: 'app-product-entry',
  templateUrl: './entry.component.html',
  styleUrl: './entry.component.scss'
})
export class RemoteEntryComponent {
   
    constructor(
        
    ){}

    addToCart(): void {
      
    }
}
