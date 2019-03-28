import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css'],
  animations: [
    trigger('hideShowAnimator', [
        state('true' , style({ opacity: 1 })),
        state('false', style({ opacity: 0 })),
        transition('0 => 1', animate('.5s')),
        transition('1 => 0', animate('.9s'))
    ])
  ]
})
export class NuevoComponenteComponent implements OnInit {

  @ViewChild('div') divScroll: ElementRef;
  private hideShowAnimator: Boolean = false;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.hideShowAnimator = false;
  }



  @HostListener('scroll', ['div.scroll']) onscroll(event: Event) {

    if (this.divScroll.nativeElement.scrollTop > 20) {
      this.hideShowAnimator = true;
    } else {
      this.hideShowAnimator = false;
    }
  }
}
