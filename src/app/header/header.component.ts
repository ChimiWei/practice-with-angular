import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() changeMode: EventEmitter<boolean> = new EventEmitter();
  modoNoturno = false;

  emitChangeMode() {
    this.changeMode.emit(this.modoNoturno)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
