import {Component, OnInit} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';
import {isNullOrUndefined, error} from 'util';
import { AcceuilService } from './acceuil.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  stateCtrl: FormControl;
  townCtrl: FormControl;
  filteredKeysWord: Observable<any[]>;
  filteredTowns: Observable<any[]>;
  keysWord: any;
  towns: any;
  /**
   * Caresoul */
  states;
  public countryCarouselItems: Array<any> = [];
  public countryCarousel: NgxCarousel;
  images: string[];

  constructor(private acceuilService: AcceuilService) {
    this.stateCtrl = new FormControl();
    this.filteredKeysWord = this.stateCtrl.valueChanges
      .pipe(
        map(keyWord => keyWord ? this.filterKeysWords(keyWord) : [])
      );
    this.townCtrl = new FormControl();
    this.filteredTowns = this.townCtrl.valueChanges
    .pipe(
      map(town => town ? this.filterTowns(town) : [])
    );
  }

  ngOnInit() {
    this.images = [
      '../../assets/bg.jpg',
      '../../assets/car.png',
      '../../assets/canberra.jpg',
      '../../assets/holi.jpg',
      '../../assets/airbus.png',
      '../../assets/google.png'
    ];

    this.initialiserTousLesPays();
    this.initCountryCarousel();
    this.carouselTile();
    this.getKeyWordsAndTowns();
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

  private initCountryCarousel() {
    this.countryCarousel = {
      grid: { xs: 1, sm: 2, md: 4, lg: 5, all: 0 },
      speed: 600,
      interval: 3000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            background: #6b6b6b;
            padding: 5px;
            margin: 0 3px;
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
              border: 2px solid rgba(0, 0, 0, 0.55);
              transform: scale(1.2);
              background: transparent;
            }
        `
      },
      load: 2,
      touch: true,
      easing: 'ease',
      animation: 'lazy'
    };
  }

  public carouselTile() {
    const len = this.countryCarouselItems.length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.countryCarouselItems.push(
          this.images[Math.floor(Math.random() * this.images.length)]
        );
      }
    }
  }

  filterKeysWords(keyWord: string): Array<string> {
      return  this.keysWord.filter(item =>
        item.toLowerCase().indexOf(keyWord.toLowerCase()) === 0);
  }

  filterTowns(town: string): Array<string> {
    return this.towns.filter((item: string) =>
    item.toLowerCase().indexOf(town.toLowerCase()));
  }

  private getKeyWordsAndTowns(): void {
    this.acceuilService.getKeyWordsAndTowns()
    .subscribe(
      data => {
        this.keysWord = data[0];
        this.towns = data[1];
      }
    );
  }
}
