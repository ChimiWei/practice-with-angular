import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTarefaDialogComponent } from '../edit-tarefa-dialog/edit-tarefa-dialog.component';
import { DataService } from '../shared/data.service';
import { Tarefa } from '../shared/tarefa.model';


@Component({
  selector: 'app-lista-tarefas-noite',
  templateUrl: './lista-tarefas-noite.component.html',
  styleUrls: ['./lista-tarefas-noite.component.scss']
})
export class ListaTarefasNoiteComponent implements OnInit {
  @Input() periodo!: string;
  @Input() icons!: string;
  @Input() painelId!: string;
  @Input() setDarkMode!: boolean;

  setClass = false;
  teste = "Noite"
  tarefa!: Tarefa[]
  tarefaFiltered!: Tarefa[]
  erro: any


  
  filterPeriodo(tarefa: Tarefa, periodo: string) {
    
    if (tarefa.periodo === periodo)  {
      return true
    } else {
      return false
    }
  }






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

  // Change Todo's completed state 
  toggleCompleted(tarefa: Tarefa) {
    tarefa.completed = !tarefa.completed;
    const index = this.tarefa.indexOf(tarefa)
    
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
      }, 
      error => {
        this.erro = error;
      }); 
     }
*/
}
