import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';


@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  @Input() periodo: string | undefined

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

 OnFormsSubmit(form: NgForm) {
   console.log('Forms Submited!')
   console.log(form)
   this.dataService.addTodo(new Todo(form.value.text, form.value.periodo, form.value.prioridadeNivel) )
   console.log(this.dataService.todos)
   this.ref.detectChanges();
   
 }
 

  constructor(private dataService: DataService, private ref: ChangeDetectorRef) {
 
   
   
  }

  ngOnInit(): void {
    this.tarefas = this.dataService.getAllTodos()
  }

}
