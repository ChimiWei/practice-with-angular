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
    
  }

  

  onClickedEdit(){
    this.editClicked.emit()
  }

  onItemClick() {
    this.tarefaClicked.emit()
   
  }



}
