export interface Offre {
  id?: number;
  titre: string;
  description: string;
  salaire: number;
  lieu: string;
  specialisation: string;
  secteurActivite: string;
  anneesExperience: number;
  competences: string[];
  type: string;
}

export interface Competence {
  id: number;
  name: string;
}

export enum TypeContrat {
  CDD ,
  CDI ,
  Interim,
  Freelance,
  Apprentissage,
  Stage
}

