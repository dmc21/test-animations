import { Directive, Renderer2, Input, HostListener } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';

@Directive({
  selector: '[showButton]'
})
export class ShowButtonDirective {

  constructor(private renderer: Renderer2) { }

  @Input('showButton') button: HTMLElement;


  @HostListener('mouseover') onOver() {
    this.renderer.setStyle(this.button, 'opacity', 1);
    this.renderer.setStyle(this.button, 'transition', 'opacity 1s');
  }

  @HostListener ('mouseleave') onLeave() {
    this.renderer.setStyle(this.button, 'opacity', 0);
    this.renderer.setStyle(this.button, 'transition', 'opacity 1s');
  }


}
