import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {MatButton} from '@angular/material';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  timer = null;

  keyFrameShow = [
    { // from
      opacity: 0
    },
    { // to
      opacity: 1
    }
  ];

  constructor(private renderer: Renderer2, private list: ElementRef) {}

  @Input('appScroll') element: MatButton;

  @HostListener('scroll') onScroll($event) {
    this.renderer.setStyle(this.element._elementRef.nativeElement, 'transition', 'opacity 1s');
    this.renderer.addClass(this.element._elementRef.nativeElement, 'hide');

    if (this.timer != null) {
      clearTimeout(this.timer);
    }

    this.timer = setTimeout(() => {
      this.renderer.removeClass(this.element._elementRef.nativeElement, 'hide');
      this.element._elementRef.nativeElement.animate(this.keyFrameShow, 500);

    }, 1000);
  }
}
