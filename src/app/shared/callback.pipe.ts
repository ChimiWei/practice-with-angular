import { PipeTransform, Pipe } from '@angular/core';
import { Tarefa } from './tarefa.model';

@Pipe({
    name: 'callback',
    pure: false
})
export class CallbackPipe implements PipeTransform {
    transform(tarefa: Tarefa[], callback: (t: any) => boolean): any {
        if (!tarefa || !callback) {
            return tarefa;
        }
        return tarefa.filter(t => callback(t));
    }
}