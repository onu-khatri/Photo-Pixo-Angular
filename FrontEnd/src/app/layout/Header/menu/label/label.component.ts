import { Component, input } from '@angular/core';
import { MenuItem } from '../models/menuItems';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-label',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
})
export class LabelComponent {
  menu_data = input<MenuItem>();
}
