import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tarefa } from './tarefa.model';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  tarefa: Tarefa[] =  [];

/*   new Tarefa(1, 'Depositar no Banco Doc', 'Manhã', true),
    new Tarefa(2, 'Arrumar a mesa','Tarde', false),
    new Tarefa(3, 'teste', 'Noite', false) */
 


  constructor() { }

  getAllTarefas(): Observable<Tarefa[]> {
    if(localStorage.getItem('todo')) {
     this.tarefa = JSON.parse(localStorage.getItem('todo')!) 
    }

    
    return of(JSON.parse(localStorage.getItem('todo')!)) 
  }

  addTarefa(tarefa: Tarefa) {
    JSON.parse(localStorage.getItem('todo')!) 
    this.tarefa.push(tarefa)
    localStorage.setItem('todo', JSON.stringify(this.tarefa)) 
   // window.location.reload()  
    
  }

  updateTarefa(index: number, updatedTodo: Tarefa) {
    this.tarefa[index] = updatedTodo
    localStorage.setItem('todo', JSON.stringify(this.tarefa))
  //  window.location.reload()    
  }
  
  deleteTarefa(id: number) {

    this.tarefa.splice(this.tarefa.findIndex(tarefa => tarefa.id === id), 1)
    localStorage.setItem('todo', JSON.stringify(this.tarefa))
   // window.location.reload()
    console.log(this.tarefa)
    
  }

  updateTarefaCompleted(index: number, updatedTodo: Tarefa) {
    this.tarefa[index] = updatedTodo
    localStorage.setItem('todo', JSON.stringify(this.tarefa))
    
  }
}
