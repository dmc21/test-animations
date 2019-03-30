import { Directive, Input, HostListener, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {

  constructor(private renderer: Renderer2) {

  }

  // tslint:disable-next-line:no-input-rename
  @Input('appScroll') element: HTMLElement;

    ngOnInit() {

    }

  @HostListener('scroll') onScroll($event) {

    this.renderer.setStyle(this.element, 'opacity', 1);
    this.renderer.setStyle(this.element, 'transition', 'opacity 1s');

      const timer = setInterval(() => {
        this.renderer.setStyle(this.element, 'opacity', 0);
        this.renderer.setStyle(this.element, 'transition', 'opacity 1s');

        if (timer) {
          clearInterval(timer);
       }

      }, 3000);
  }
}
