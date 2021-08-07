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
  @Output() editClicked: EventEmitter<void> = new EventEmitter


  // tarefaEstilo: string;
  tarefaUrgente!: boolean;
  
 

  constructor() {
    

  }

  ngOnInit(): void {
    this.setClass()
  }

  setClass() {
    if (this.t.prioridadeNivel === 1) {
      this.tarefaUrgente = true
    }
    if (this.t.prioridadeNivel === 2) {
      this.tarefaUrgente = false
    }

  }

  onClickedEdit(){
    this.editClicked.emit()
  }

  onItemClick() {
    this.tarefaClicked.emit()
    this.t.prioridadeNivel = 1
  }



}
