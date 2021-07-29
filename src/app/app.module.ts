import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbAccordion, NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { HeaderComponent } from './header/header.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { ListaTituloComponent } from './lista-titulo/lista-titulo.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    HeaderComponent,
    TarefaComponent,
    ListaTituloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAccordionModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
