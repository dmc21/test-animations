import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

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

  private hideShowAnimator: Boolean = false;

  constructor() { }

  ngOnInit() {

  }
}
