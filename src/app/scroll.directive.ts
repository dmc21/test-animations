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
    this.showHidden();
  }

  private delay(ms: number) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }

  private async showHidden() {
    this.renderer.addClass(this.element, 'show');
    this.renderer.removeClass(this.element, 'hide');

    await this.delay(6000);

    this.renderer.removeClass(this.element, 'show');
    this.renderer.addClass(this.element, 'hide');

  }
}
