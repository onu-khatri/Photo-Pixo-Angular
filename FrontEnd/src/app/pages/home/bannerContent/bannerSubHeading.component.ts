import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-subheading',
  standalone: true,
  template: `
    <h2 class="banner-text">
      Join a global community of photographers sharing over 200
      <br />
      million incredible images and showcasing their best work.
    </h2>
  `,
  styleUrls: [`bannerSubHeading.Component.scss`],
})
export class BannerSubHeaing {}
