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


  // tarefaEstilo: string;
  tarefaUrgente!: boolean;
  
  setClass() {
    if (this.t.prioridadeNivel === 1) {
      this.tarefaUrgente = true
    }
    if (this.t.prioridadeNivel === 2) {
      this.tarefaUrgente = false
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
    

  }

  ngOnInit(): void {
    this.setClass()
  }

}
