import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertesService {

  constructor(
    private http : HttpClient
  ) { }
    /**
     * @param alerteAutoID ID de l'alerte à envoyer : 
     * 
     * 1 : Certificateur a ajouté un doc
     * 
     * 5 : Certificateur demande un doc partenaire
     * 
     * 6 : Certificateur refuse un doc partenaire
     * 
     * 7 : Certificateur signale erreur profil partenaire (Bloc CPF)
     * 
     * 8 : Certificateur demande Règlement
     * 
     * 9 : Certificateur refuser règlement
     * 
     * 10 : Certificateur demande justificatif d'examen
     * 
     * 11 : Certificateur signale une erreur sur le compte (RIB)
     */
  sendAlerteToLocation(organismeID : number, description : string, alerteAutoID : number){
    return this.http.post('/api/alerte/alerte_locataire/', {
      "alerte": {
        "date_vue": null,
        "description": description,
        "alerte_auto": alerteAutoID
      },
      "location": organismeID
    })
  }
  /**
   * @param alerteAutoID ID de l'alerte à envoyer : 
   * 
   * 2 : Partenaire a ajouté un doc partenaire
   * 
   * 3 : Partenaire a mis à jour un doc partenaire
   * 
   * 4 : Partenaire a mis à jour un justificatif examen
   */
  sendAlerteToCertificateur(certificationID : number, description : string, alerteAutoID:number){
    return this.http.post('/api/alerte/alerte_certification/',{
      "alerte": {
        "date_vue": null,
        "description": description,
        "alerte_auto": alerteAutoID
      },
      "certification": certificationID
    })
  }
}
