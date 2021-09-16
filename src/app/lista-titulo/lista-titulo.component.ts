import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-titulo',
  templateUrl: './lista-titulo.component.html',
  styleUrls: ['./lista-titulo.component.scss']
})
export class ListaTituloComponent implements OnInit {

  @Input() changetxtColor = false;  //Recebe o Emit do modo Noturno
  @Output() setDay: EventEmitter<string> = new EventEmitter();
  showDay: string = "all";
  
  constructor() { }

  ngOnInit(): void {
  }

  currentDay(day: string) {
    if(this.showDay === day) {
      this.showDay = "all"
    } else {
    this.showDay = day;
    }
  }

  emitSeg(){
   this.setDay.emit("seg")
  }

  emitTer(){
    this.setDay.emit("ter")
   }

   emitQua(){
    this.setDay.emit("qua")
   }

   emitQui(){
    this.setDay.emit("qui")
   }

   emitSex(){
    this.setDay.emit("sex")
   }

   emitSab(){
    this.setDay.emit("sab")
   }

   emitDom(){
    this.setDay.emit("dom")
   }



}
