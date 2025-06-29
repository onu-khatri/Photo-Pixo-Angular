import { Component, input } from '@angular/core';
import { MenuItem } from '../models/menuItems';
// import { MenuComponent } from "../menu.component";

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
})
export class MenuItemComponent {
  menu_list = input<MenuItem>();
  hoveredIndex: number | null = null;
  menu_index = input<number>();
}
