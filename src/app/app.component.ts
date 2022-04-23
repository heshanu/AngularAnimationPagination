import { state, style, trigger } from '@angular/animations';
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
          height: '100px',
          width: '100px',
        })
      ),
    ]),
  ],
})
export class AppComponent {
  title = 'angularAnimation';

  clickInfo: string = 'default';
  onClickSimple() {
    this.clickInfo = 'clicked';
    setTimeout(()=>{
      this.clickInfo='default';
    },3000)
  }
}
