import { Component } from '@angular/core';
import { menuItems } from './models/menuItems';
@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  m_items = menuItems;
   hoveredIndex:number|null = null 
  showid(id:number,label:string|object)
  {
    this.hoveredIndex = id;
    console.log("id = ",id," label = ",label);
  } 
  hideid(id2:number,label2:string|object)
  {
    this.hoveredIndex = null;
    console.log("hideid called");
    console.log("id = ",id2," label = ",label2);
  }
}
