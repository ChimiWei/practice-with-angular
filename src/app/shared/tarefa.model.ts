export class Tarefa {  //Modelo da Array das tarefas
   
    

    constructor (
       public text: string,
       public periodo: string,
       public urgente: boolean,
       public completed: boolean = false

    ) {}
}