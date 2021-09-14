import { PipeTransform, Pipe } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Pipe({
    name: 'callback',
    pure: false
})
export class CallbackPipe implements PipeTransform {
    
    transform(tarefa: Tarefa[], callback: (t: Tarefa, periodo: string) => boolean, periodo: string): Tarefa[] {
        if (!tarefa || !callback || !periodo ) {
            return tarefa;
        }
        return tarefa.filter(t => callback(t, periodo));
    }
}