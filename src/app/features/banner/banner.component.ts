import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  // default_url = 'assets/images/deafult-banner.jpg';
  img_url = input.required<string>();
  img_width = input<string>();
  img_height = input<string>();
  ngOnInit() {
    console.log('image url= ' + this.img_url());
    console.log('width= ' + this.img_width() + ' height= ' + this.img_height());
  }
}
