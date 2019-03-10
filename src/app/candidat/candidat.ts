
export interface Candidat {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;  
  titreProfil?: string;
  adresse?: string;
  anneesExperiences?: number;
  anneesEtudes?: number;
  salaire?: number;
  relocalisation: boolean;
  cdi: boolean;
  cdd: boolean;
  freelance: boolean;
  professionnalisation: boolean;
  aprentissage: boolean;
  stage: boolean;
  interim: boolean;    
}
