import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-header',
  template: `
    <p class="banner-head">
      The World’s Best
      <br />
      Photography Is Here
    </p>
  `,
  standalone: true,
  styleUrls: ['bannerHead.scss'],
})
export class BannerHeader {}
