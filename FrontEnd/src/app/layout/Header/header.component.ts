import { Component, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { MenuItem, menuItems } from './menu/models/menuItems';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MenuComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  //declare nullarray for menu items
  m_items: MenuItem[] = [];

  ngOnInit(): void {
    //assign the imported menuItems to m_items
    this.m_items = menuItems;
  }
}
