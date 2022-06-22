import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-detalle',
  templateUrl: './card-detalle.component.html',
  styleUrls: ['./card-detalle.component.css']
})
export class CardDetalleComponent implements OnInit {

  public movies = [1,2,3,4,5,6,7,8,9,10,11,12]

  constructor() { }

  ngOnInit(): void {
  }

}
