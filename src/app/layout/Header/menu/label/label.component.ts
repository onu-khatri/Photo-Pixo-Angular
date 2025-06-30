import { Component, input } from '@angular/core';
import { MenuItem } from '../models/menuItems';

@Component({
  selector: 'app-label',
  imports: [],
  templateUrl: './label.component.html',
  styleUrl: './label.component.scss',
})
export class LabelComponent {
  menu_data = input<MenuItem>();
}
