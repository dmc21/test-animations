import { Directive, Renderer2, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[showButton]'
})
export class ShowButtonDirective {

  constructor(private renderer: Renderer2) { }

  @Input('showButton') button: HTMLElement;


  @HostListener('mouseover') onOver() {
    this.renderer.addClass(this.button, 'show');
  }
}
