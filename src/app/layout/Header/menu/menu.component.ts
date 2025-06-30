// import { Component, input, OnInit } from '@angular/core';
import { Component, input } from '@angular/core';
import { MenuItem } from './models/menuItems';
import { LabelComponent } from './label/label.component';

// import { MenuItemComponent } from './menu-item/menu-item.component';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [LabelComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

// export class MenuComponent implements OnInit {
export class MenuComponent {
  menuList = input<MenuItem[]>([]);

  hoveredIndex: number | null = null;

  showid(id: number): void {
    this.hoveredIndex = id;
    // console.log('id = ', id, ' label = ', label);
  }

  hideid(): void {
    this.hoveredIndex = null;
    // console.log('hideid called');
    // console.log('id = ', id2, ' label = ', label2);
  }
}
