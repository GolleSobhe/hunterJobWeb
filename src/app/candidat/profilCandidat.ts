import { TypeEmploi } from './typeEmploi';

export interface ProfilCandidat {
    titreProfil: string;
    adresse: string;
    anneesExperiences: number;
    anneesEtudes: number;
    cv: string;
    typeEmploi: TypeEmploi;
    salaire: number;
    relocalisation: boolean;
}
