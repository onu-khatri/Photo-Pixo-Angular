import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-buttons',
  standalone: true,
  template: `
    <button class="btn">Sign up for free</button>
  `,
  styleUrls: [`signupBtn.scss`],
})
export class SignUpBtn {}
