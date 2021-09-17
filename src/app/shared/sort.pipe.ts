import { PipeTransform, Pipe } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Pipe({
    name: 'sort',
    pure: false
})
export class SortPipe implements PipeTransform {
    
    transform(tarefa: Tarefa[], callback: (a: Tarefa, b:Tarefa) => number): Tarefa[] {
        if (!tarefa || !callback) {
            return tarefa;
        }
        return tarefa.sort(callback);
    }
}