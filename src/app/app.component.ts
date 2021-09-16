import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolily';
  darkmodeState = true;
  day: string = "todas"
  
  setModeState(state: boolean) {
    this.darkmodeState = state;
  }
  setDayView(day: string) {
    if(this.day === day) {
      this.day = "todas"
    } else {
      this.day = day; 
    }
    

  }

  
}
