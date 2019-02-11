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
  private pageSize = 15;

  totalPages: number;
  totalElements: number;
  startPage: number;
  endPage: number;

  pages: any;

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

  constructor(private offreService: OffreService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {

    this.createSearchForm();

    this.getByPage();

    this.getContractType();

    this.getSpecialisations();
  }

  getByPage() {
    if ((this.currentPage <= 0) || (this.currentPage > this.totalPages)) {
      this.currentPage = 1;
    }

    this.offreService.getByPage(this.currentPage, this.pageSize, this.specialisationsSelected,
      this.contractTypesSelected, this.title, this.city).subscribe((result) => {

        this.offreList = result['content'];
        this.totalElements = result['totalElements'];
        this.totalPages = result['totalPages'];

        if (this.totalPages <= 5) {
          this.startPage = 1;
          this.endPage = this.totalPages;
        } else {
          if (this.currentPage <= 3) {
            this.startPage = 1;
            this.endPage = 5;
          } else if (this.currentPage + 1 >= this.totalPages) {
            this.startPage = this.totalPages - 4;
            this.endPage = this.totalPages;
          } else {
            this.startPage = this.currentPage - 2;
            this.endPage = this.currentPage + 2;
          }
        }

        this.pages = Array.from(Array((this.endPage + 1) - this.startPage).keys()).map(i => this.startPage + i);
      }, error => {
        reject(error);
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

    this.getByPage();
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

    this.getByPage();
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

  /**
   * soumettre la recherche
   */
  onSearch() {
    this.city = this.searchForm.value.city;
    this.title = this.searchForm.value.title;
    this.currentPage = 1;

    this.inputData = { q: this.title, w: this.city };
    this.getByPage();
    this.router.navigate(['../offres'], {queryParams: this.inputData, queryParamsHandling: "merge"});
  }
}
