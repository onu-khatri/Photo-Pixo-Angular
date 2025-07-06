import { Component } from '@angular/core';
import { BannerComponent } from '../../features/banner/banner.component';
import { BannerHeader } from './bannerContent/bannerHead.component';
import { BannerSubHeaing } from './bannerContent/bannerSubHeading.component';
import { SignUpBtn } from '../../shared/components/buttons/signupBtn.component';
import { ShowcaseComponent } from './showcase/showcase.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, BannerHeader, BannerSubHeaing, SignUpBtn, ShowcaseComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  imageUrls: string[] = [
    'https://500px.com/staticV2/media/explore_banner_1.982fdc43.jpg',
    'https://500px.com/staticV2/media/explore_banner_2.bd2bb58e.jpg',
    'https://500px.com/staticV2/media/explore_banner_3.0c30259f.jpg',
  ];
}
