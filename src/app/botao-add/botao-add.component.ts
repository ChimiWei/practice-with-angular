import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../shared/data.service';
import { Tarefa } from '../shared/tarefa.model';


@Component({
  selector: 'app-botao-add',
  templateUrl: './botao-add.component.html',
  styleUrls: ['./botao-add.component.scss']
})
export class BotaoAddComponent implements OnInit {
  @ViewChild('acc') accordionComponent!: NgbAccordion;  //Buscar o painel na view para acessar funções do Bootstrap
  @Input() painelId!: string;
  @Input() addDarkMode!: boolean;

  validationErrors: boolean = false;
  painelToggle: boolean = false;
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  //get unique id for tasks
  getTodoId() {
    var nextId = 1
    for (var a = 0; a < this.dataService.tarefa.length; a++) {
      if (this.dataService.tarefa[a].id = nextId) {
        nextId++
      } else {
        break
      }
    }
    return nextId
  }

  //Lógica de criação de uma nova tarefa
  OnFormsSubmit(form: NgForm) {


    console.log('Forms Submited!')
    console.log(form)
    if (form.invalid) {
      this.validationErrors = true

      return
    }
    this.dataService.addTarefa(new Tarefa(this.getTodoId(), form.value.text, form.value.periodo, form.value.urgente))
    console.log(this.dataService.tarefa)
    this.toggle(this.painelId)
    this.validationErrors = false
    form.reset()




  }
  //Função de toggle do painel vinda do bootstrap 
  toggle(id: string): void {
    this.accordionComponent.toggle(id);
  }

}
