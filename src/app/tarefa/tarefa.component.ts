import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
   @Input() t: any;
  tarefaEstilo: string;
  ngDoCheck() {
    // ...
  }
  setClass() {
    if(this.t.prioridadeNivel === 1) {
      this.tarefaEstilo = "tarefa-1"
    }
    if(this.t.prioridadeNivel === 2) {
      this.tarefaEstilo = "tarefa-2"
    }
    if(this.t.prioridadeNivel === 3) {
      this.tarefaEstilo = "tarefa-3"
    }
    
    
    return this.tarefaEstilo
  }


teste() {
  this.ref.detectChanges()
}

  constructor(private ref: ChangeDetectorRef) { 
    this.tarefaEstilo = ""
    
    
  }

  ngOnInit(): void {
  }

}
