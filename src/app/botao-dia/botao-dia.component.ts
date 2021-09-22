import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Tarefa } from '../shared/tarefa.model';

@Component({
  selector: 'app-botao-dia',
  templateUrl: './botao-dia.component.html',
  styleUrls: ['./botao-dia.component.scss']
})
export class BotaoDiaComponent implements OnInit {
@Input() day!: string;
@Input() activeDay!: string;
@Output() setDay: EventEmitter<string> = new EventEmitter();
tarefaDragged!: Tarefa;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  emitDay(){
    this.setDay.emit(this.day)
  }

 

updateTarefaDay(tarefa: Tarefa) {
    tarefa.dia = this.day
    const id = tarefa.id
    this.dataService.updateTarefa(id, tarefa)

}

drop(event: DragEvent) {
  event.preventDefault();
 const tarefa = JSON.parse(event.dataTransfer?.getData("tarefa")!)
 this.tarefaDragged = tarefa
 this.updateTarefaDay(this.tarefaDragged)
 
}


allowDrop(event: Event) {
  event.preventDefault();


}



}
