import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaTarefasComponent } from './lista-tarefas/lista-tarefas.component';
import { ListaTarefasTardeComponent } from './lista-tarefas-2(tarde)/lista-tarefas-tarde.component';
import { ListaTarefasNoiteComponent } from './lista-tarefas-3(noite)/lista-tarefas-noite.component';
import { HeaderComponent } from './header/header.component';
import { TarefaComponent } from './tarefa/tarefa.component';
import { ListaTituloComponent } from './lista-titulo/lista-titulo.component';
import { FormsModule } from '@angular/forms';
import { BotaoAddComponent } from './botao-add/botao-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTarefaDialogComponent } from './edit-tarefa-dialog/edit-tarefa-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CallbackPipe } from './shared/callback.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListaTarefasComponent,
    ListaTarefasTardeComponent,
    ListaTarefasNoiteComponent,
    HeaderComponent,
    TarefaComponent,
    ListaTituloComponent,
    BotaoAddComponent,
    EditTarefaDialogComponent,
    CallbackPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAccordionModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
