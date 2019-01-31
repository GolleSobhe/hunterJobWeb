import { Component, Input, OnInit } from '@angular/core';
import { Offre, Specialisation } from '../offre';
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

  currentPage: number;
  private pageSize = 15;

  totalPages: number;
  totalElements: number;
  startPage: number;
  endPage: number;

  pages: any;

  //filters
  specialisationFilter: string[] = [];
  contractFilter: string[] = [];
  specialisations: Specialisation[] = [];
  contractType = [];

  //Input search
  city: string;
  title: string;
  searchForm: FormGroup;
  inputData: { title: string, place: string };

  constructor(private offreService: OffreService,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.initContractType();
    this.createSearchForm();

    this.getByPage();

    this.specialisations.push({ id: 0, name: 'Tous', selected: true });

    this.constructSpecialisationData();

  }

  getByPage() {
    this.activatedRoute.params.subscribe(param => {
      this.currentPage = +param.page || 1;

      if ((this.currentPage <= 0) || (this.currentPage > this.totalPages)) {
        this.currentPage = 1;
      }

      this.offreService.getByPage(this.currentPage, this.pageSize, this.specialisationFilter,
        this.contractFilter, this.inputData.title, this.inputData.place).subscribe((result) => {
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

  initContractType() {
    this.contractType = [{ id: 0, name: "Tous", selected: true }, { id: 1, name: "CDD", selected: false }, { id: 2, name: "CDI", selected: false },
    { id: 3, name: "Interim", selected: false }, { id: 4, name: "Freelance", selected: false },
    { id: 5, name: "Apprentissage", selected: false }, { id: 6, name: "Stage", selected: false }]
  }

  initSpecialisations() {
    this.specialisations[0].selected = true;
    for (let i = 1; i < this.specialisations.length; i++) {
      this.specialisations[i].selected = false;
    }
  }

  constructSpecialisationData() {
    this.offreService.getSpecialisations().subscribe((specialisations: string[]) => {
      let i = 1;
      specialisations.forEach((spec: string) => {
        this.specialisations.push({ id: i++, name: spec, selected: false })
      })
    }, error => {
      reject(error);
    });
  }

  clickEvent(index: number) {
    this.contractType[index].selected = !this.contractType[index].selected;
    let i = 1;

    const length = this.contractType.length;

    for (i = 1; i < length; i++) {
      if (this.contractType[i].selected) {
        break;
      }
    }

    if (i === length || index === 0) {
      this.initContractType();
      this.contractFilter = null;
    }

    for (let j = 1; j < this.contractType.length; j++) {
      if (this.contractType[j].selected) {
        this.contractFilter.push(this.contractType[j].name);
        this.contractType[0].selected = false;
      }
    }

    this.getByPage();
    this.contractFilter = [];
  }

  clickSpecialisationEvent(index: number) {
    this.specialisations[index].selected = !this.specialisations[index].selected;

    let i = 1;
    const length = this.specialisations.length;

    for (i = 1; i < length; i++) {
      if (this.specialisations[i].selected) {
        break;
      }
    }

    if (i === length || index === 0) {
      this.initSpecialisations();
      this.specialisationFilter = null;
    }

    for (let j = 1; j < this.specialisations.length; j++) {
      if (this.specialisations[j].selected) {
        this.specialisationFilter.push(this.specialisations[j].name);
        this.specialisations[0].selected = false;
      }
    }

    this.getByPage();
    this.specialisationFilter = [];
  }

  //Search Form
  createSearchForm() {
    this.activatedRoute.params.subscribe(param => {   
      this.inputData = { title: param.title, place: param.place };

      this.searchForm = this.formBuilder.group({
        title: [this.inputData.title, [Validators.nullValidator]],
        city: [this.inputData.place, [Validators.nullValidator]],
      });
    });
  }

  onSearch() {
    this.inputData = { title: this.searchForm.value.title, place: this.searchForm.value.city };
    this.getByPage();
  }
}
