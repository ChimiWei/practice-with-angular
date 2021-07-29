export class Todo {
   
    

    constructor (
       public text: string,
       public periodo: string,
       public prioridadeNivel: number,
       public completed: boolean = false

    ) {}
}