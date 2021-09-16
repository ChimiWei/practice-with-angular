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
  teste = "filterDay";
  tarefa!: Tarefa[]
  tarefaFiltered!: Tarefa[]
  erro: any;




  






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
    console.log(this.periodo)


  }

  getPeriodo() {
    return this.teste 
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

 

  // Change Todo's completed state 
  toggleCompleted(tarefa: Tarefa) {
    tarefa.completed = !tarefa.completed;
    const index = this.tarefa.indexOf(tarefa)
    this.dataService.updateTarefaCompleted(index, tarefa)
    console.log(this.showDay)
  }
  // Edit Todo
  editTarefa(tarefa: Tarefa) {
    console.log(this.tarefaFiltered)
    console.log(this.tarefa)
   
    const index = this.tarefa.indexOf(tarefa)
    // Setting up dialog
    let dialogRef = this.dialog.open(EditTarefaDialogComponent, {
      width: '700px',
      data: tarefa
    });
  
    // Get the push from the dialog
    dialogRef.afterClosed().subscribe((result) => {
      if(result) {
        this.dataService.updateTarefa(index, result)
      }
    })
   

  }

  deleteTarefa(tarefa: Tarefa) {
    const id = tarefa.id

    this.dataService.deleteTarefa(id)

    console.log(tarefa.id)
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

  
