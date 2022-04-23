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
      state(
        'mousedown',
        style({
          backgroundColor: 'red',
          border: '1px solid black',
          width: '100px',
          height: '100px',
        })
      ),

      transition('default => clicked', animate('1s 500ms ease-in')),
      //transition('default => clicked', animate('1s 500ms ease-in')),
      transition('clicked => default', animate('300ms')),
      transition('mousedown =>clicked', animate('300ms')),
      //transition('clicked <=>mousedown', animate('300ms'))
      transition('clicked =>mousedown', animate('300ms')),
    ]),
    trigger('numberEnteredState', [
      state(
        'unselectStated',
        style({
          border: '1px solid black',
          padding: '5px ',
        })
      ),
      state(
        'selectStated',
        style({
          border: '2px solid blue',
          padding: '4px ',
          'background-color': 'lightblue',
        })
      ),
    ]),
  ],
})
export class AppComponent {
  //title = 'angularAnimation';
  paragraphClick = 'default';
  numberEntered!: number;

  clickInfo: string = 'default';
  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 5000);
  }

  onEnter(event: any) {
    this.numberEntered= event.target.value;
    console.log(this.numberEntered);
  }
}
