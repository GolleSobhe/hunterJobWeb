import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {OffreService} from '../offre.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Offre} from '../offre';
import {elementTableauTransition} from '../animations/table-animation';


@Component({
  selector: 'app-offre-list',
  templateUrl: './offre-list.component.html',
  styleUrls: ['./offre-list.component.css'],
  providers: [OffreService],
  animations: [elementTableauTransition]
})
export class OffreListComponent implements OnInit, AfterViewInit {

  donneesOffres: MatTableDataSource<Offre>;
  listeOffres: Offre[];
  displayedColumns = ['id'];
  length: number;

  @ViewChild(MatPaginator) paginateur: MatPaginator;


  constructor(private _offreService: OffreService) {
    this.donneesOffres = new MatTableDataSource<Offre>();
  }

  ngOnInit() {
    this._offreService.getOffres().subscribe((resultat: Offre[]) => {
      this.listeOffres = resultat;
      this.length = this.listeOffres.length;
      this.donneesOffres = new MatTableDataSource(this.listeOffres);
      this.donneesOffres.paginator = this.paginateur;
    });

    this._offreService.modifierTableau(this.listeOffres);
  }

  ngAfterViewInit() {
    this.donneesOffres.paginator = this.paginateur;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.donneesOffres.filter = filterValue;
  }

}
