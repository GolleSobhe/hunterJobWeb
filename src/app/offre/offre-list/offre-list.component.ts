import { Component, OnInit } from '@angular/core';
import { Offre, InputSearchData, Filter } from '../offre';
import { OffreService } from '../offre.service';
import { reject } from 'q';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.css']
})
export class OffreListComponent implements OnInit {

  offreList: Offre[] = [];

  currentPage = 1;
  ITEM_PER_PAGE = 20;
  totalPages: number;
  totalElements: number;

  //filters
  specialisationFiltersList: Filter[];
  contractFiltersList: Filter[];

  specialisationsSelected: string[] = [];
  contractTypesSelected: string[] = [];

  //Input search
  city: string;
  title: string;
  searchForm: FormGroup;
  inputData: InputSearchData;

  collection = [];

  constructor(private offreService: OffreService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }

    this.createSearchForm();

    this.getOfferByPage(this.currentPage);
    this.getContractType();

    this.getSpecialisations();

    this.onSearch();
  }

  /**
   * chargement des pages par bésoin (lazy loading)
   */
  getOfferByPage(page: number) {
    this.currentPage = +page;

    if ((this.currentPage <= 0) || (this.currentPage > this.totalPages)) {
      this.currentPage = 0;
    }

    this.offreService.getOfferByPage(this.currentPage-1, this.ITEM_PER_PAGE, this.specialisationsSelected,
      this.contractTypesSelected, this.title, this.city).subscribe((result) => {

        this.offreList = result['content'];
        this.totalElements = result['totalElements'];
        this.totalPages = result['totalPages'];
      }, error => {
        reject(error);
      });
  }


  /**
   * soumettre la recherche
   */
  onSearch() {
    this.city = this.searchForm.value.city;
    this.title = this.searchForm.value.title;
    this.currentPage = 1;

    this.inputData = { q: this.title, w: this.city };
    this.offreService.getOfferByCityAndTitle(0, this.ITEM_PER_PAGE, this.title, this.city).subscribe((result: any) =>{
      
      this.offreList = result['content'];
      this.totalElements = result['totalElements'];
      this.totalPages = result['totalPages'];
      this.router.navigate(['../offres'], {queryParams: this.inputData, queryParamsHandling: "merge"});
    });
  }

  /**
   * build string list to Filter list
   */
  getContractType() {
    this.offreService.getContractType().subscribe((contractTypes: string[]) => {
     this.contractFiltersList = [<Filter>{id: 1, label: 'Tous', selected: true}, ...contractTypes.map(type =>  <Filter>{label: type, selected: false})];
    }), error => {
      reject(error);
    };
  }

  /**
   * build string list to Filter list
   */
  getSpecialisations() {
    this.offreService.getSpecialisations().subscribe((specialisations: string[]) => {
      this.specialisationFiltersList = [<Filter>{id: 1, label: 'Tous', selected: true}, ...specialisations.map(specialisation => <Filter>{label: specialisation, selected: false})];
    }, error => {
      reject(error);
    });
  }

  /**
   * selection et deselection d'un filtre
   * @param filter 
   */
  selectContractTypeFilter(filter: Filter) {
    filter.selected = !filter.selected;

    if(filter.selected) {
      //si Tous est selectionné, je déselection tous les autres et inversement
      if(filter.id !== 1) {
        this.contractFiltersList[0].selected = false;
      } else {
        this.contractFiltersList.slice(1).forEach((filter: Filter) => {
          filter.selected = false;
        })
      }
    } else {
      //verification si au moins un filter différent de Tous est selectionnée. si aucun, selection de Tous
      let noneSelected = this.contractFiltersList.slice(1).every((filter: Filter) => {
        return !filter.selected;
      });

      if(noneSelected) {
        this.contractFiltersList[0].selected = true;
      }
    }

    //récuperation de l'ensemble des filtres selectionnés
    this.contractTypesSelected = this.contractFiltersList.filter((filter: Filter) => {
      return filter.selected === true;
    }).map((filter: Filter) => {
      return filter.label;
    });

    this.getOfferByPage(1);
  }

 /**
   * selection et deselection d'un filtre
   * @param filter 
   */
  selectSpecialisationFilter(filter: Filter) {
    filter.selected = !filter.selected;

    if(filter.selected) {
      //si Tous est selectionné, je déselection tous les autres et inversement
      if(filter.id !== 1) {
        this.specialisationFiltersList[0].selected = false;
      } else {
        this.specialisationFiltersList.slice(1).forEach((filter: Filter) => {
          filter.selected = false;
        })
      }
    } else {
      //verification si au moins un filter différent de Tous est selectionnée. si aucun, selection de Tous
      let noneSelected = this.specialisationFiltersList.slice(1).every((filter: Filter) => {
        return !filter.selected;
      });

      if(noneSelected) {
        this.specialisationFiltersList[0].selected = true;
      }
    }

    //récuperation de l'ensemble des filtres selectionnés
    this.specialisationsSelected = this.specialisationFiltersList.filter((filter: Filter) => {
      return filter.selected === true;
    }).map((filter: Filter) => {
      return filter.label;
    });

    this.getOfferByPage(1);
  }

  //Search Form
  createSearchForm() {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.title = param.q;
      this.city = param.w;
      this.inputData = { q: this.title, w: this.city };

      this.searchForm = this.formBuilder.group({
        title: [this.inputData.q, [Validators.nullValidator]],
        city: [this.inputData.w, [Validators.nullValidator]],
      });
    });
  }
}
