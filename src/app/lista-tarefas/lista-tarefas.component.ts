import { ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';


@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {
  @ViewChild('acc') accordionComponent!: NgbAccordion;
  @Input() periodo!: string;
  @Input() painelId: string;

  tarefas: Todo[] | undefined;
  
  validationErrors: boolean;
  painelToggle: boolean;

  

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
    if (form.invalid) { 
      this.validationErrors = true
      
      return
    }
    this.dataService.addTodo(new Todo(form.value.text, form.value.periodo, form.value.prioridadeNivel))
    console.log(this.dataService.todos)
    this.toggle(this.painelId)
    this.validationErrors = false
    form.reset()
    
  


  }

  toggle(id:string): void {
    //Here you have access to AccordionComponent as discribe on documentation.   
    this.accordionComponent.toggle(id);
    }
  


  constructor(private dataService: DataService, private ref: ChangeDetectorRef) {
    this.painelId = "";
    this.painelToggle = false;
    this.validationErrors = false;
   



  }

  ngOnInit(): void {
    this.tarefas = this.dataService.getAllTodos()
  }

}
