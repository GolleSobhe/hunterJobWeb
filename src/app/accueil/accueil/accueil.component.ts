import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { EntrepriseService } from '../../entreprise/entreprise.service';
import { Entreprise } from '../../entreprise/entreprise';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  countryCarouselItems: string[] = [];
  countryCarousel: NgxCarousel;
  images: string[];

  states;
  offresCarouselItems: Array<any> = [];
  offresCarousel: NgxCarousel;
  entreprises: Entreprise[];

  searchForm: FormGroup;
  inputData: {title: string, place: string};

  constructor(private formBuilder: FormBuilder, private entrepriseService: EntrepriseService, private router: Router) {

  }

  ngOnInit() {
    this.createSearchForm();
    this.getEntreprises();
    this.initCountries();
    this.getImages();
    this.defineEntrepriseCaroussel();
    this.carouselTile();
  }

  private getImages() {
    this.images = [
      '../../assets/images/bg.jpg',
      '../../assets/images/car.png',
      '../../assets/images/canberra.jpg',
      '../../assets/images/holi.jpg',
      '../../assets/images/airbus.png',
      '../../assets/images/google.png'
    ];
  }

  private initCountries(): void {
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

  private defineEntrepriseCaroussel() {
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

  public getEntreprises(): void {
    this.entrepriseService.getEntreprises().subscribe(data => {
      this.entreprises = data;
    });
  }

  createSearchForm() {
    this.searchForm = this.formBuilder.group({
      title: ['', [Validators.nullValidator]],
      city: ['', [Validators.nullValidator]],
    });
  }

  search() {
    this.inputData = {title: this.searchForm.value.title, place: this.searchForm.value.city};
    this.router.navigate(['../offres/page/1', this.inputData]);
  }
}
