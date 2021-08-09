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
  @Input() painelId!: string;

  setClass = false;
  tarefa!: Tarefa[]
  
  

  

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

  }

  ngOnInit(): void {
    this.tarefa = this.dataService.getAllTarefas()
  }

// Change Todo's completed state 
toggleCompleted(tarefa: Tarefa) {
  tarefa.completed = !tarefa.completed;
}
// Edit Todo
editTarefa(tarefa: Tarefa) {
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
  const index = this.tarefa.indexOf(tarefa)

  this.dataService.deleteTarefa(index)

  console.log('amigo estou aqui')
}

}
