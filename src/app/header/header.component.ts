import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() changeMode: EventEmitter<boolean> = new EventEmitter(); //Emitter para o Modo Noturno
  modoNoturno = true;

  

  constructor(private dataService: DataService) {
    
   }

  ngOnInit(): void {
    this.setMode();
  }

  emitChangeMode() {
    this.changeMode.emit(this.modoNoturno)
    this.dataService.setNightMode(this.modoNoturno)
  }

  setMode() {
    console.log(this.modoNoturno)
    this.modoNoturno = this.dataService.getNightMode()
    this.emitChangeMode()

  }

}
