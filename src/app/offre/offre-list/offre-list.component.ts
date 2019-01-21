import { Component, OnInit } from '@angular/core';
import { Offre } from '../offre';
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

  constructor(private offreService: OffreService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getByPage();
  }

  getByPage() {
    this.activatedRoute.params.subscribe((param: { page: string }) => {
      this.currentPage = +param.page || 1;

      if ((this.currentPage <= 0) || (this.currentPage > this.totalPages)) {
        this.currentPage = 1;
      }

      this.offreService.getByPage(this.currentPage, this.pageSize).subscribe((result) => {
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

  constructButtons(n: number): any[] {
    return Array(n);
  }

  private getAllOffre() {
    this.offreService.getAll().subscribe((offres: Offre[]) => {
      this.offreList = offres;
      console.log(this.offreList);
    }, error => {
      reject(error);
    });
  }
}
