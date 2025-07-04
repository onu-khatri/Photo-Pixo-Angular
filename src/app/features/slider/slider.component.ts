import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, input, signal, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [NgTemplateOutlet],
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  showcaseItems = input.required<TemplateRef<any>[]>();
  // private setintervalId!: ReturnType<typeof setInterval>;

  private index = signal(0);

  //    ngOnInit(): void {

  //    this.setintervalId = setInterval(() => {
  //       console.log("after 3 sec",);
  //       // this.next();
  //     }, 3000);
  //  }
  //   ngOnDestroy(): void {
  //     if(this.setintervalId)
  //     {
  //       clearInterval(this.setintervalId);
  //     }
  //   }

  //  showcase items current templateref are current slide items index
  currentslide = computed(() => this.showcaseItems()[this.index()] ?? null);

  //previous state button
  prev() {
    const len = this.showcaseItems().length;
    this.index.set((this.index() - 1 + len) % this.showcaseItems().length);
  }
  next() {
    this.index.set((this.index() + 1) % this.showcaseItems().length);
  }
}

// <!-- <!-- @for (item of showcaseItems(); track $index) {
//     <!-- <ng-container *ngTemplateOutlet="item"></ng-container> -->
//     <!-- ngtemplateoutlet bind without * -->
//     <ng-container [ngTemplateOutlet]="item"></ng-container>
// } -->
//     sda -->
