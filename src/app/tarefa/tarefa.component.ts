import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.scss']
})
export class TarefaComponent implements OnInit {
  @Input() t!: Tarefa;
  @Input() i: any;
  @Output() tarefaClicked: EventEmitter<void> = new EventEmitter
  @Output() editClicked: EventEmitter<void> = new EventEmitter
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter
  



  // tarefaEstilo: string;
  tarefaUrgente!: boolean;
  
 

  constructor() {
    

  }

  ngOnInit(): void {
    
  }

  

  onClickedEdit(){
    if(!this.t.completed) {
      this.editClicked.emit()
    }
    
  }

  onClickedDelete() {
    this.deleteClicked.emit()
  }

  onItemClick() {
    this.tarefaClicked.emit()
   
  }

  dragTarefa(ev: DragEvent) {
   ev.dataTransfer?.setData("tarefa", JSON.stringify(this.t))
   
   
  }


}
