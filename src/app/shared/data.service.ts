import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tarefa: Tarefa[] = [
    new Tarefa('Depositar no Banco Doc', 'Manhã', 1),
    new Tarefa('Arrumar a mesa','Manhã', 2),
    new Tarefa('teste', 'Manhã', 2)

  ];



  constructor() { }

  getAllTarefas(){
    return this.tarefa
  }

  addTarefa(tarefa: Tarefa) {
    this.tarefa.push(tarefa)
  }

  updateTarefa(index: number, updatedTodo: Tarefa) {
    this.tarefa[index] = updatedTodo
  }
  deleteTarefa(index: number) {
    this.tarefa.splice(index, 1)
  }
}
