import { Component } from '@angular/core';
import { BannerComponent } from '../../features/banner/banner.component';
import { BannerHeader } from '../../shared/components/bannerContent/bannerHead';
import { BannerSubHeaing } from '../../shared/components/bannerContent/bannerSubHeading';
import { SignUpBtn } from '../../shared/components/buttons/signupBtn';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, BannerHeader, BannerSubHeaing, SignUpBtn],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
