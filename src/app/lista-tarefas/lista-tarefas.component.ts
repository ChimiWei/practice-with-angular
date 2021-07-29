import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  @Input() periodo: string | undefined;

  tarefas: Todo[] | undefined
  
/* Without data service
  tarefas = [
    { id: 1, prioridadeNivel: 1, tarefa: "Depositar no banco doc", periodo:"manha"},
    { id: 2, prioridadeNivel: 2, tarefa: "Arrumar o quarto", periodo: "tarde" },
    { id: 3, prioridadeNivel: 3, tarefa: "Brincar com Mio", periodo: "noite" },
    { id: 3, prioridadeNivel: 3, tarefa: "Jogar FFXIV", periodo: "noite" },
    { id: 2, prioridadeNivel: 2, tarefa: "Arrumar o quarto", periodo: "tarde" }
    
    
  ]
 */

 
 

  constructor(private dataService: DataService) {
  
   
   
  }

  ngOnInit(): void {
    this.tarefas = this.dataService.getAllTodos()
  }

}
