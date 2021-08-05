import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tarefas: Tarefa[] = [
    new Tarefa('Depositar no Banco Doc', 'Manhã', 1),
    new Tarefa('Arrumar a mesa','Manhã', 2),
    new Tarefa('teste', 'Manhã', 2)

  ];



  constructor() { }

  getAllTarefas(){
    return this.tarefas
  }

  addTarefa(tarefa: Tarefa) {
    this.tarefas.push(tarefa)
  }

  updateTarefa(index: number, updatedTodo: Tarefa) {
    this.tarefas[index] = updatedTodo
  }
  deleteTarefa(index: number) {
    this.tarefas.splice(index, 1)
  }
}
