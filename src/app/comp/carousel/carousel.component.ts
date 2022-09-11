import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {
    // let mainSlider: any = document.querySelector('.main-slider');
    // let select = false;
    // let beginx: any;
    // let x;
    // mainSlider.addEventListener('mousedown', (e: any) => {
    //   select = true;
    //   beginx = e.offsetX - innerSlider.offsetLeft;
    //   mainSlider.style.cursor = 'grabbing';
    // });
    // mainSlider.addEventListener('mouseenter', () => {
    //   mainSlider.style.cursor = 'grab';
    // });
    // mainSlider.addEventListener('mouseup', () => {
    //   mainSlider.style.cursor = 'grab';
    // });
    // window.addEventListener('mouseup', () => {
    //   select = false;
    // });
    // mainSlider.addEventListener('mousemove', (e: any) => {
    //   if (!select) return;
    //   e.preventDefault();
    //   x = e.offsetX;
    //   innerSlider.style.transform = `translateX(${x - beginx}px)`;
    //   boundary();
    // });
    // function boundary() {
    //   let outer = mainSlider.getBoundingClientRect();
    //   let inner = innerSlider.getBoundingClientRect();
    //   if (parseInt(innerSlider.style.left) > 0) {
    //     // innerSlider.style.transform = 'translateX(0px)';
    //     innerSlider.style.left = '0px';
    //   } else if (inner.right < outer.right) {
    //     // innerSlider.style.transform = `translateX(-${
    //     //   inner.width - outer.width
    //     // }px)`;
    //     innerSlider.style.left = `-${inner.width - outer.width}px`;
    //   }
    // }
    // boundary();
  }

  sliderPercent: number = 0;
  innerSlider?: HTMLElement;
  ngAfterViewInit(): void {
    this.innerSlider = document.querySelector('.inner-slider') || undefined;
  }

  changeSlide(dir: 'next' | 'prev') {
    if (!this.innerSlider) return;

    let moveAmount = 0.45;

    if (dir === 'prev') {
      this.sliderPercent = Math.max(0, this.sliderPercent - moveAmount);
    }

    if (dir === 'next') {
      this.sliderPercent = Math.min(1, this.sliderPercent + moveAmount);
    }

    this.innerSlider.style.transform = `translateX(-${
      this.sliderPercent * 100
    }%)`;
  }
}
