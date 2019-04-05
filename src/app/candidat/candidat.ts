export interface Utilisateur {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  motDePasse?: string;
}

export interface Candidat {
  profilCandidat?: any;
  id?: number
}