export class Candidat {
    idCandidat: number;
    nomCandidat: string;
    prenomCandidat: string;
    telephoneCandidat: string;
    emailCandidat: string;
    adresseCandidat: string;
    anneesExperiencesCandidat: number;
    annesEtudesCandidat: number;
    cvCandidat: string;
    posteSouhaiteCandidat: string;
    titreProfil: string;
    typeEmploiSouhaiteCandidat: string[];
    relocalisation: boolean;
    salaireParMoisCandidat: number;
    constructor(idCandidat: number,
      nomCandidat: string,
      prenomCandidat: string,
      telephoneCandidat: string,
      emailCandidat: string,
      adresseCandidat: string,
      anneesExperiencesCandidat: number,
      annesEtudesCandidat: number,
      cvCandidat: string,
      posteSouhaiteCandidat: string,
      titreProfil: string,
      typeEmploiSouhaiteCandidat: string[],
      relocalisation: boolean,
      salaireParMoisCandidat: number) {
        this.idCandidat = idCandidat;
        this.nomCandidat = nomCandidat;
        this.prenomCandidat = prenomCandidat;
        this.telephoneCandidat = telephoneCandidat;
        this.emailCandidat = emailCandidat;
        this.adresseCandidat = adresseCandidat;
        this.anneesExperiencesCandidat = anneesExperiencesCandidat;
        this.annesEtudesCandidat = annesEtudesCandidat;
        this.cvCandidat = cvCandidat;
        this.posteSouhaiteCandidat = posteSouhaiteCandidat;
        this.titreProfil = titreProfil;
        this.typeEmploiSouhaiteCandidat = typeEmploiSouhaiteCandidat;
        this.relocalisation = relocalisation;
        this.salaireParMoisCandidat = salaireParMoisCandidat;
      }
  }
