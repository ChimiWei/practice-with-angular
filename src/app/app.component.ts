import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolily';
  changeMode = false;


  setModeState(state: boolean) {
    this.changeMode = state;
  }

  
}
