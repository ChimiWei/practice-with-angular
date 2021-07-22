import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-tarefas',
  templateUrl: './lista-tarefas.component.html',
  styleUrls: ['./lista-tarefas.component.css']
})
export class ListaTarefasComponent implements OnInit {

  @Input() periodo: string;

  tarefas = [
    { id: 1, tarefaNumero: 1, tarefa: "Depositar no banco doc", periodo:"manha"},
    { id: 2, tarefaNumero: 2, tarefa: "Arrumar o quarto" },
    { id: 3, tarefaNumero: 3, tarefa: "Brincar com Mio" }
    
  ]

  constructor() {
    this.periodo = "";
  }

  ngOnInit(): void {
  }

}
