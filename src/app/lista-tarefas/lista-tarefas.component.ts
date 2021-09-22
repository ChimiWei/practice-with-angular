import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTarefaDialogComponent } from '../edit-tarefa-dialog/edit-tarefa-dialog.component';
import { DataService } from '../shared/data.service';
import { Tarefa } from '../shared/tarefa.model';



@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.scss']
})
export class ListaTarefasComponent implements OnInit {
  @Input() periodo!: string;
  @Input() showDay!: string;
  @Input() icons!: string;
  @Input() painelId!: string;
  @Input() setDarkMode!: boolean;
  

  setClass = false;
  tarefa!: Tarefa[];
  tarefaFiltered!: Tarefa[];
  tarefaDragged!: Tarefa;





  






  /* Without data service
    tarefas = [
      { id: 1, prioridadeNivel: 1, tarefa: "Depositar no banco doc", periodo:"manha"},
      { id: 2, prioridadeNivel: 2, tarefa: "Arrumar o quarto", periodo: "tarde" },
      { id: 3, prioridadeNivel: 3, tarefa: "Brincar com Mio", periodo: "noite" },
      { id: 3, prioridadeNivel: 3, tarefa: "Jogar FFXIV", periodo: "noite" },
      { id: 2, prioridadeNivel: 2, tarefa: "Arrumar o quarto", periodo: "tarde" }
      
      
    ]
   */



  constructor(private dataService: DataService, private dialog: MatDialog) {
    this.dataService.getAllTarefas()

  }

  ngOnInit(): void {
    this.tarefa = this.dataService.tarefa
   // this.tarefaFiltered = this.tarefa.filter(t => t.periodo === this.periodo)
  


  }

  

  filterPeriodo(tarefa: Tarefa, periodo: string) {
    if (tarefa.periodo === periodo)  {
      return true
    } else {
      return false
    }
  }

  filterDay(tarefa: Tarefa, day: string) {
    if(day === "todas") {
      return true
    } else {
      if (tarefa.dia === day || tarefa.dia === "all" || tarefa.dia === null || tarefa.dia === undefined )  {
        return true
      } else {
        return false
      }
    }
    
  }

  sortCompleted(a: Tarefa, b: Tarefa) {
   if (a.completed === false){
    return -1
   } else { if (a.completed === true) {
    return 1
   } else {
     return 0
   }
    
   }
  
  } 

  sortUrgente(a: Tarefa, b: Tarefa) {
    if (a.urgente === false){
     return -1
    } else { if (a.urgente === true) {
     return 1
    } else {
      return 0
    }
     
    }
   
   } 

 

  // Change Todo's completed state 
  toggleCompleted(tarefa: Tarefa) {
    tarefa.completed = !tarefa.completed;
    const id = tarefa.id
    this.dataService.updateTarefa(id, tarefa)
    
  }
  // Edit Todo
  editTarefa(tarefa: Tarefa) {
    
   
    const id = tarefa.id
    // Setting up dialog
    let dialogRef = this.dialog.open(EditTarefaDialogComponent, {
      width: '700px',
      data: tarefa
    });
  
    // Get the push from the dialog
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.dataService.updateTarefa(id, result)
      }
    })
   

  }

  deleteTarefa(tarefa: Tarefa) {
    const id = tarefa.id

    this.dataService.deleteTarefa(id)

    console.log(tarefa.id)
  }

  updateTarefaPeriodo(tarefa: Tarefa) {
    console.log(tarefa)
    tarefa.periodo = this.periodo
    const id = tarefa.id
    this.dataService.updateTarefa(id, tarefa)

  }

  drop(event: DragEvent) {
      event.preventDefault();
     const tarefa = JSON.parse(event.dataTransfer?.getData("tarefa")!)
     this.tarefaDragged = tarefa
     this.updateTarefaPeriodo(this.tarefaDragged)
     
 }

  allowDrop(event: Event) {
    event.preventDefault();


}


 
/*
  getTarefas() {
    this.dataService.getAllTarefas().subscribe(
      (data: Tarefa[]) => {
        this.tarefa = data;
        console.log(data)
        console.log(this.tarefa)
        
      }, 
      error => {
        this.erro = error;
      }); 
     }

     */

  }

  
