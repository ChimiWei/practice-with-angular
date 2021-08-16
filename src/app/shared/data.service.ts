import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tarefa: Tarefa[] = [
    new Tarefa(1, 'Depositar no Banco Doc', 'Manhã', true),
    new Tarefa(2, 'Arrumar a mesa','Tarde', false),
    new Tarefa(3, 'teste', 'Noite', false)

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
  
  deleteTarefa(id: number) {

    this.tarefa.splice(this.tarefa.findIndex(tarefa => tarefa.id === id), 1)
    console.log(this.tarefa)
    
  }
}
