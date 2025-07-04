/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Component,
  TemplateRef,
  AfterViewInit,
  ChangeDetectorRef,
  viewChildren,
  inject,
} from '@angular/core';
import { SliderComponent } from '../../../features/slider/slider.component';
import { SignUpBtn } from '../../../shared/components/buttons/signupBtn';

@Component({
  selector: 'app-showcase',
  imports: [SliderComponent, SignUpBtn],
  templateUrl: './showcase.component.html',
  styleUrl: './showcase.component.scss',
})
export class ShowcaseComponent implements AfterViewInit {
  //inject is a function set the dependency injection mannually this is new way old is constructor based!

  private cdr: ChangeDetectorRef = inject(ChangeDetectorRef);
  // @ViewChildren(TemplateRef) showcaseItemsRef: QueryList<TemplateRef<any>> | undefined;

  showcaseItemsRef = viewChildren(TemplateRef);
  showcaseItems: TemplateRef<any>[] = [];

  ngAfterViewInit(): void {
    // this.showcaseItems = this.showcaseItemsRef?.toArray() || [];

    this.showcaseItems = [...this.showcaseItemsRef()];
    this.cdr.detectChanges();
  }
}
