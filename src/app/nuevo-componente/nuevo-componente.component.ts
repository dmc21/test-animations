import { Component, OnInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { HighlightDelayBarrier } from 'blocking-proxy/built/lib/highlight_delay_barrier';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css'],
  animations: [
    trigger('hideShowAnimator', [
        state('true' , style({ opacity: 1 })),
        state('false', style({ opacity: 0 })),
        transition('0 => 1', animate('.2s')),
        transition('1 => 0', animate('.2s'))
    ])
  ]
})
export class NuevoComponenteComponent implements OnInit {

  @ViewChild('div') divScroll: ElementRef;
  private hideShowAnimator: Boolean = false;
  private timer;
  private puede = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.hideShowAnimator = false;
    this.startTimer();
  }

  startTimer() {
    this.timer = setInterval(() => {

      if(this.puede){
        this.hideShowAnimator = false;
      }
      
    }, 2000);
  }


  @HostListener('scroll', ['div.scroll']) onscroll(event: Event) {
    this.puede = true;
    this.hideShowAnimator = true;
 
    /*if (this.divScroll.nativeElement.scrollTop > 20) {
      
    } else {
      this.hideShowAnimator = false;
    }*/
  }

  @HostListener('mouseover', ['miboton']) mouseover(event: Event) {
    this.hideShowAnimator = true;
    this.puede = false;
  }

  @HostListener('mouseleave', ['miboton']) mouseleave(event: Event) {
    this.puede = true;
  }
  
}
