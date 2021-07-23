import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  @Input() periodo: string;
  @Input() list: any;

 
 

  constructor() {
    this.periodo = "";
   
   
  }

  ngOnInit(): void {
  }

}
