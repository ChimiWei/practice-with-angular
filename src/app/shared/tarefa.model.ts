export class Tarefa {  //Modelo da Array das tarefas
   
    

    constructor (
       public text: string,
       public periodo: string,
       public prioridadeNivel: number,
       public completed: boolean = false

    ) {}
}