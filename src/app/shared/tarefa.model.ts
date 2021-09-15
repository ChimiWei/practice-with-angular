export class Tarefa {  //Modelo da Array das tarefas
   
    

    constructor (
       public id: number, 
       public text: string,
       public periodo: string,
       public dia: string = "all",
       public urgente: boolean,
       public completed: boolean = false

    ) {}
}