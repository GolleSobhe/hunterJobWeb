import { Component, OnInit } from '@angular/core';
import { Offre, TypeContrat } from '../offre';
import { OffreService } from '../offre.service';
import { reject } from 'q';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.css']
})
export class OffreListComponent implements OnInit {

  offreList: Offre[] = [];

  currentPage: number;
  private pageSize = 5;

  totalPages: number;
  totalElements: number;
  startPage: number;
  endPage: number;

  pages: any;

  //filters
  specialisationFilter: string;
  contractFilter: string;
  specialisation: string;

  contractType = [{ id: 0, name: "Tous", selected: true }, { id: 1, name: "CDD", selected: false }, { id: 2, name: "CDI", selected: false },
  { id: 3, name: "Interim", selected: false }, { id: 4, name: "Freelance", selected: false },
  { id: 5, name: "Apprentissage", selected: false }, { id: 6, name: "Stage", selected: false }];

  constructor(private offreService: OffreService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.getByPage();

    this.getFiltersData();
  }

  getByPage() {
    
    this.activatedRoute.params.subscribe((param: { page: string }) => {
      this.currentPage = +param.page || 1;

      if ((this.currentPage <= 0) || (this.currentPage > this.totalPages)) {
        this.currentPage = 1;
      }

      this.offreService.getByPage(this.currentPage, this.pageSize, this.specialisationFilter, this.contractFilter).subscribe((result) => {
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
    });
  }

  getFiltersData() {
    this.offreService.getSpecialisations().subscribe((specialisations: string[]) => {
    //  this.specialisations = specialisations;
    }, error => {
      reject(error);
    });
  }

  clickEvent(index: number) {
    this.contractType[index].selected = !this.contractType[index].selected;
    this.contractFilter = this.contractType[index].name;
    let i = 1;
    const length = this.contractType.length;

    for (i = 1; i < length; i++) {
      if (this.contractType[i].selected) {
        break;
      }
    }

    if (i === length) {
      this.contractType[0].selected = true;
    }

    this.getByPage();
  }

  filterBySpecialisation() {

  }

  filterByContractType() {

  }
}
