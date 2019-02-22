import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-search',
  templateUrl: './global-search.component.html',
  styleUrls: ['./global-search.component.css']
})
export class GlobalSearchComponent implements OnInit {

  states: any;
  constructor() { }

  ngOnInit() {
    this.initialiserTousLesPays();
  }

  private initialiserTousLesPays(): void {
    this.states = [
      {
        name: 'Guinée',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg'
      },
      {
        name: 'France',
        flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg'
      },
      {
        name: 'Sénégal',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg'
      },
      {
        name: 'Rwanda',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg'
      },
      {
        name: 'Ghana',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg'
      }
    ];
  }

}
