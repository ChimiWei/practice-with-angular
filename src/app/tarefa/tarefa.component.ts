import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss']
})
export class TarefaComponent implements OnInit {
  @Input() t: any;
  @Input() i: any;
  @Output() tarefaClicked: EventEmitter<void> = new EventEmitter


  tarefaEstilo: string;

  
  setClass() {
    if (this.t.prioridadeNivel === 1) {
      this.tarefaEstilo = "tarefa-1"
    }
    if (this.t.prioridadeNivel === 2) {
      this.tarefaEstilo = "tarefa-2"
    }
    if (this.t.prioridadeNivel === 3) {
      this.tarefaEstilo = "tarefa-3"
    }

  

  }

  consoleLog() {
    console.log(this.t.prioridadeNivel)
  }

  onItemClick() {
    this.tarefaClicked.emit()
    this.t.prioridadeNivel = 1
  }



  constructor() {
    this.tarefaEstilo = "tarefa-2"


  }

  ngOnInit(): void {
    this.setClass()
  }

}
