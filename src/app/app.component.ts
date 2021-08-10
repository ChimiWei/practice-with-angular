import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolily';
  darkmodeState = false;


  setModeState(state: boolean) {
    this.darkmodeState = state;
  }

  
}
