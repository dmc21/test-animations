import { Directive, Input, HostListener, Renderer2, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {

  ngOnInit(){
    
  }

  constructor(private renderer: Renderer2) { }

  @Input('appScroll') element: HTMLElement;

  @HostListener('scroll') onScroll($event) {
    
    this.renderer.removeClass(this.element, 'btnAdd');

  }
}
