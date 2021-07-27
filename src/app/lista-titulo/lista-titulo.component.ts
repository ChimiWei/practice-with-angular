import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-titulo',
  templateUrl: './lista-titulo.component.html',
  styleUrls: ['./lista-titulo.component.css']
})
export class ListaTituloComponent implements OnInit {

  @Input() changetxtColor = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
