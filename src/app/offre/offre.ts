export interface Offre {
  titre: string;
  specialisation: string;
  competences: string[];
  typeDesContrats: string;
  anneesExperience: number;
  salaireParMois: number;
  lieu: string;
  secteur: string;
  description: string;
}

export interface Competence {
  id: number;
  name: string;
}

export interface TypeContrat {
  id: number;
  name: string;
}
