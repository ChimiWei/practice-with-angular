import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() changeMode: EventEmitter<boolean> = new EventEmitter(); //Emitter para o Modo Noturno
  modoNoturno = false;

  emitChangeMode() {
    this.changeMode.emit(this.modoNoturno)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
