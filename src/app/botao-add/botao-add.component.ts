import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbAccordion } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from '../shared/data.service';
import { Tarefa} from '../shared/tarefa.model';


@Component({
  selector: 'app-botao-add',
  templateUrl: './botao-add.component.html',
  styleUrls: ['./botao-add.component.scss']
})
export class BotaoAddComponent implements OnInit {
  @ViewChild('acc') accordionComponent!: NgbAccordion;  //Buscar o painel na view para acessar funções do Bootstrap
  @Input() painelId!: string;

  validationErrors: boolean = false;
  painelToggle: boolean = false;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
//Lógica de criação de uma nova tarefa
  OnFormsSubmit(form: NgForm) {
   

    console.log('Forms Submited!')
    console.log(form)
    if (form.invalid) { 
      this.validationErrors = true
      
      return
    }
    this.dataService.addTarefa(new Tarefa(form.value.text, form.value.periodo, form.value.prioridadeNivel))
    console.log(this.dataService.tarefa)
    this.toggle(this.painelId)
    this.validationErrors = false
    form.reset()
    
  


  }
  //Função de toggle do painel vinda do bootstrap 
  toggle(id:string): void {  
    this.accordionComponent.toggle(id);
    }
  
}
