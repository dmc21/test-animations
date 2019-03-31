import { Directive, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(private renderer: Renderer2) {

  }

  // tslint:disable-next-line:no-input-rename
  @Input('appScroll') element: HTMLElement;

  @HostListener('scroll') onScroll($event) {
    this.renderer.addClass(this.element, 'show');
    this.renderer.removeClass(this.element, 'hide');

      setTimeout(() => {
        this.renderer.removeClass(this.element, 'show');
        this.renderer.addClass(this.element, 'hide');

      }, 6000);
  }
}
