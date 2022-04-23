import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedState', [
      state(
        'default',
        style({
          backgroundColor: 'green',
          'font-size': '20px',
          height: '100px',
          width: '100px',
        })
      ),
      state(
        'clicked',
        style({
          backgroundColor: 'red',
          'font-size': '20px',
          height: '50px',
          width: '300px',
        })
      ),
      transition('default => clicked', animate('1s 500ms ease-in')),
    ]),
  ],
})
export class AppComponent {
  title = 'angularAnimation';

  clickInfo: string = 'default';
  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }
}
