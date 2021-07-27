import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {
   @Input() t: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
