import { ProfilCandidat } from './profilCandidat';

export interface Candidat {
  id?: number;
  nom: string;
  prenom: string;
  telephone?: string;
  email: string;
  profilCandidat?: ProfilCandidat;
}
