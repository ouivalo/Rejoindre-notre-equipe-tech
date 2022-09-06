export interface DetailsCertification{
    certificateur:string,
    nom:string,
    debut_validite: string,
    descriptif:string,
    domaine:string,
    fin_validite: string,
    identifiant_cpf:string,
    niveau:string,
    numero:number |null,
    type: number,
    validateur:string,
    organisme: number |null,
  
}

export interface CertificationComplete{
    certificateur:string,
    nom:string,
    debut_validite: string,
    descriptif:string,
    domaine:string,
    fin_validite: string,
    identifiant_cpf:string,
    niveau:string,
    numero:number |null,
    type: number,
    validateur:string,
    organisme: number |null,
    id:number;
}