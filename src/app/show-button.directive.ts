import { Directive, Renderer2, Input, HostListener } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';

@Directive({
  selector: '[showButton]'
})
export class ShowButtonDirective {

  constructor(private renderer: Renderer2) { }

  @Input('showButton') button: HTMLElement;


  @HostListener('mouseover') onOver() {
    this.renderer.addClass(this.button, 'show');
    this.renderer.removeClass(this.button, 'hide');
  }

  @HostListener ('mouseleave') onLeave() {
    this.renderer.removeClass(this.button, 'show');
    this.renderer.addClass(this.button, 'hide');
  }
}
