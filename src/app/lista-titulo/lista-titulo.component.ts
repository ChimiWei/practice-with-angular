import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-lista-titulo',
  templateUrl: './lista-titulo.component.html',
  styleUrls: ['./lista-titulo.component.scss']
})
export class ListaTituloComponent implements OnInit {

  @Input() changetxtColor = false;  //Recebe o Emit do modo Noturno
  @Output() setDay: EventEmitter<string> = new EventEmitter();
  showDay: string = "todas";
  selectedDay!: String;
  tarefaDragged!: Tarefa;
  
  constructor() { }

  ngOnInit(): void {
  }

  currentDay(day: string) {
    if(this.showDay === day) {
      this.showDay = "todas"
    } else {
    this.showDay = day;
    }
    this.setDay.emit(this.showDay)

  }


   



}
