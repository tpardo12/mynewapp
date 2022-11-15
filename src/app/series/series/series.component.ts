import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { dataSerie } from '../dataSerie';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series :Array<Serie> = [];

  constructor() { }
  getseries():Array<Serie>{
    return dataSerie;
  }

  ngOnInit(): void {
  }

}
