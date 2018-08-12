import {Component, OnInit} from '@angular/core';
import {NgxCarousel} from 'ngx-carousel';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {map, startWith} from 'rxjs/operators';
import { AcceuilService } from '../acceuil.service';
import { Router } from '@angular/router';


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
  // Les mots clés
  keysWord: Array<string> = [];
// Les villes ciblées
  towns: Array<string> = [];
  // Le model du formulaire
  model: {keyword: string , town: string} = {keyword: '' , town: ''};
  /**
   * Caresoul */
  states;
  public offresCarouselItems: Array<any> = [];
  public offresCarousel: NgxCarousel;
  enterprises: Array<any> = [];

  constructor(private routerToOffres: Router, private acceuilService: AcceuilService) {
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
    this.initKeysWord();
    this.initTowns();
    this.initCountryCarousel();
    this.getEnterprises();
  }

  private initKeysWord(): void {
    this.keysWord = ['java',
      'angular',
      'jee',
      'java ee',
      'jakarta ee',
      'j2ee',
      'java j2ee',
      'reactJS',
      'react',
      'spring',
      'spring boot',
      'commercial',
      'marketing',
      'ionic',
      'react native'];
  }

  private initTowns(): void {
    this.towns = ['Beyla',
    'Boola',
    'Diassodou',
    'Gbakédou',
    'Gbessoba',
    'Karala',
    'Diaraguéréla',
    'Koumandou',
    'Moussadou',
    'Nionsomoridou',
    'Samana',
    'Sinko',
    'Sokourala',
    'Fouala',
    'Boffa',
    'Corréra',
    'Douprou',
    'Mankounta',
    'Koba-tatéma',
    'Touguifili',
    'Tamita',
    'Boké',
    'Bintimondia',
    'Dabiss',
    'Kamsar',
    'Kanfrandé',
    'Kolabundji',
    'Malapouya',
    'Sangarédi',
    'Sansalé',
    'Tanènè',
    'Dabola',
    'Arfamoussaya',
    'Banko',
    'Bissikrima',
    'Dogmen',
    'Kankama',
    'Kindoye',
    'Komédou',
    'N’Déma',
    'Dalaba',
    'Bodié',
    'Ditinn',
    'Kala',
    'Kankalabé',
    'Kébali',
    'Koba',
    'Mafara',
    'Mitti',
    'Mombéya',
    'Dinguiraye',
    'Banora',
    'Dialakoro',
    'Diatifèrè',
    'Gagnakaly',
    'Kalinko',
    'Lansanaya',
    'Sélouma',
    'Dubréka',
    'Badi',
    'Falissadé',
    'Ouassou',
    'Tanènè',
    'Tondon',
    'Corrérah',
    'Faranah',
    'Banian',
    'Bindougou',
    'Hèrmakono',
    'Kobikoro',
    'Maréla',
    'Nialia',
    'Passaya',
    'Sandénia',
    'Songoya',
    'Tiro',
    'Forécariah',
    'Benty',
    'Kaback',
    'Farmoréah',
    'Kakossa',
    'Maférinyah',
    'Moussayah',
    'Sihourou',
    'Allassuya',
    'Kalia',
    'Fria',
    'Banguiné',
    'Banguigney',
    'Tormelin',
    'Gaoual',
    'Bantala',
    'Foulamory',
    'Kakoni',
    'Koumbia',
    'Touba',
    'Malanta',
    'Wendou- Borou',
    'Guéckédou',
    'Bolodou',
    'Guindimbou',
    'Fangamadou',
    'Kassadou',
    'Nongoya',
    'Ouendékénéma',
    'Tiékolo',
    'Temessadou-dibo',
    'Kouindou',
    'Beindou',
    'Kankan',
    'Balandougou',
    'Baranama',
    'Batè-Nafadji',
    'Boula',
    'Gbendou-Baranama',
    'Karfamorya',
    'Koumban',
    'Mamouroudou',
    'Missamana',
    'Moribaya',
    'Tintioulen',
    'Tokounou',
    'Kérouane',
    'Damaro',
    'Komodou',
    'Konsankoro',
    'Linko',
    'Sibiribaro',
    'Soromaya',
    'Kindia ',
    'Bangouya',
    'Damakania',
    'Friguiagbé',
    'Kolenté',
    'Madina Oula',
    'Manbia',
    'Molota',
    'Samaya',
    'Souguéta',
    'Kissidougou centre',
    'Albadariah',
    'Banama',
    'Beindou',
    'Bardou',
    'Firawa',
    'Kouindiadou',
    'Manfran',
    'Sangardo',
    'Yendè-milimou',
    'Yombiro',
    'Koubia centre',
    'Fafaya',
    'Gadha-Oundou',
    'Matakaou',
    'Missira',
    'Pilimini',
    'Koudara centre',
    'Guingan',
    'Termessè',
    'Kammabi',
    'Sambailo',
    'Youkounkoun',
    'Saréboido',
    'Kouroussa centre',
    'Babila',
    'Balato',
    'Banfélé',
    'Baro',
    'Cisséla',
    'Douako',
    'Kiniéro',
    'Koumana',
    'Komolakoura',
    'Sanguiana',
    'Doura',
    'Labé centre',
    'Dalein',
    'Daralabé',
    'Diari',
    'Dionfo',
    'Garambé',
    'Hafia',
    'Noussy',
    'Popodara',
    'Sannou',
    'Tountouroun',
    'Kalan',
    'Kouramangui',
    'Lélouma centre',
    'Balaya',
    'Diountou',
    'Pétoye',
    'Lafou',
    'Linsan',
    'Saran',
    'Parawol',
    'Sagalé',
    'Korbé',
    'Tianguel-Bori',
    'Hériko',
    'Lola centre',
    'Bossou',
    'Foumbadou',
    'Gama',
    'Guéasso',
    'Lainé',
    'Kokota',
    'N’zoo',
    'Tounkarata',
    'Macenta centre',
    'Balizia',
    'Binikala',
    'Bofossou',
    'Daro',
    'Kouankan',
    'Orémayi',
    'Koyamah',
    'Panzia-zou',
    'Sérédou',
    'Singbédou',
    'N’Zébéla',
    'Watanka',
    'Vassé-rédou',
    'Mali centre',
    'Balaki',
    'Donguel-Sigou',
    'Fougou',
    'Gaya',
    'Hidayatou',
    'Dougountouny',
    'Lébékéré',
    'Madina',
    'Salambandé',
    'Madina-Wora',
    'Yambéring',
    'Téliré',
    'Touba',
    'Mamou',
    'Boulliwel',
    'Dounet',
    'Gongoré',
    'Ourékaba',
    'Kégnéko',
    'Konkouré',
    'Niagara',
    'Porédaka',
    'Soya',
    'Saramoussaya',
    'Timbo',
    'Tolo',
    'Téguéréya',
    'Mandiana centre',
    'Dialakoro',
    'Faralako',
    'Kantoumania',
    'Kiniéran',
    'Koudianakoro',
    'Koundian',
    'Morodougou',
    'Niantanina',
    'Saladou',
    'Sansando',
    'Balandougou',
    'N’Zérékoré centre',
    'Bounouna',
    'Gouecké',
    'Koulé',
    'Koropara',
    'Samoé',
    'Yalenzou',
    'Palé',
    'Kobéla',
    'Soulouta',
    'Pita centre',
    'Bantignel',
    'Brouwal-Tappé',
    'Dongol-Touma',
    'Gongoré',
    'Ley Miro',
    'Maci',
    'Sangaréah',
    'Sintali',
    'Timbi-Madina',
    'Timbi-Tounni',
    'Ninguélandé',
    'Siguiri centre',
    'Bankon',
    'Doko',
    'Kintiniar',
    'Maléa',
    'Niagassola',
    'Maboun',
    'Niandankoro',
    'Norassoba',
    'Siguirini',
    'Franwalia',
    'Kiniébakoura',
    'Télimélé centre',
    'Bourouwel',
    'Daramagnaki',
    'Gougoudjé',
    'Koba',
    'Kollet',
    'Consotami',
    'Missira',
    'Santou',
    'Sinta',
    'Sarékali',
    'Sogolon',
    'Tarikoye',
    'Thionthian',
    'Tougué centre',
    'Fello',
    'Koundoua',
    'Kansagui',
    'Kollet',
    'Koyin',
    'Kona',
    'Kouratongo',
    'Tangali',
    'Fatako',
    'Kollagui',
    'Yomou centre',
    'Gbanié',
    'Bhéta',
    'Gbigna-mou',
    'Booué',
    'Diécké',
    'Péla'];
  }

  filterKeysWords(keyWord: string): Array<string> {
      return  this.keysWord.filter(item =>
        item.toLowerCase().indexOf(keyWord.toLowerCase()) === 0);
  }

  filterTowns(town: string): Array<string> {
    return this.towns.filter((item: string) =>
    item.toLowerCase().indexOf(town.toLowerCase()));
  }

  validSearch(): void {
    this.routerToOffres.navigate(['offres', {keyword: this.model.keyword, town: this.model.town}]);
  }

  private initCountryCarousel() {
    this.offresCarousel = {
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

  public getEnterprises(): void {
    this.acceuilService.getEnterprises()
    .subscribe(data => {
      data.map(enterprise => {
        enterprise.img = '../../assets/logos_enterprises/' + enterprise.img;
      });
      this.enterprises = data;
    });
  }
}
