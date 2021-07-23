import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolily';
 
  tarefas = [
    { id: 1, prioridadeNivel: 1, tarefa: "Depositar no banco doc", periodo:"manha"},
    { id: 2, prioridadeNivel: 2, tarefa: "Arrumar o quarto", periodo: "tarde" },
    { id: 3, prioridadeNivel: 3, tarefa: "Brincar com Mio", periodo: "noite" }
    
    
  ]
 
  
  
}
