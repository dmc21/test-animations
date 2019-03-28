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

  @ViewChild('div.scroll') divScroll: ElementRef;



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
      
    }, 5000);
  }

 onScroll($event){
  this.puede = true;
  this.hideShowAnimator = true;
 }

 onOver($event){
   this.puede = false;
   this.hideShowAnimator = true;
 }

 onLeave($event){
   this.puede = true;
 }
  
}
