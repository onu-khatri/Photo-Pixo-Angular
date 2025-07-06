import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input, NgZone, OnDestroy, OnInit, output, signal, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [NgTemplateOutlet],
  standalone: true,
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent implements OnInit,OnDestroy {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  showcaseItems = input.required<TemplateRef<any>[]>();
  private setintervalId!: ReturnType<typeof setInterval>;

   nextPrevEvent  = output<number>();


  private index = signal(0);
  private ngZone = inject(NgZone); 

     ngOnInit(): void {
      this.ngZone.runOutsideAngular(()=>{
        this.setintervalId = setInterval(() => {
          // console.log("after 3 sec",);
          this.ngZone.run(()=>this.next())
        }, 3000);
      }) 
      }
    ngOnDestroy(): void {
      if(this.setintervalId)
      {
        clearInterval(this.setintervalId);
      }
    }

  //  showcase items current templateref are current slide items index
  currentslide = computed(() => this.showcaseItems()[this.index()] ?? null);

  //previous state button
  prev() {
    const len = this.showcaseItems().length;
    this.index.set((this.index() - 1 + len) % this.showcaseItems().length);
    this.nextPrevEvent.emit(this.index())
  }

  next() {
    this.index.set((this.index() + 1) % this.showcaseItems().length);
    this.nextPrevEvent.emit(this.index())

  }
}

// <!-- <!-- @for (item of showcaseItems(); track $index) {
//     <!-- <ng-container *ngTemplateOutlet="item"></ng-container> -->
//     <!-- ngtemplateoutlet bind without * -->
//     <ng-container [ngTemplateOutlet]="item"></ng-container>
// } -->
//     sda -->
