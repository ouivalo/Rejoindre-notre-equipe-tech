import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Observable} from 'rxjs';
import { DialogComponent } from '../components/dialog/dialog.component';
import { actionInterface } from '../models/table.models';

interface MessageInterface{
  severity:string,
  detail:string,
  summary:string,
}

/**
 * Stocker toutes les informations essentielles pour traiter les données d'un tableau
 * - Mise en place des actions réalisables avec {@link actionInterface}
 * - Mise en place d'un dialog à ouvrir avec {@link dialog}
 * - Mise en place d'un dialog à ouvrir avec {@link dialogDeleteElement}
 */
@Injectable({
  providedIn: 'root'
})

export class TableService {
  data : any[];
  actions : actionInterface[];
  dialog : DialogComponent;

  dialogDeleteElement : DialogComponent;

  constructor(private http : HttpClient,
    private MessageService:MessageService,
    private router : Router,){
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.setActions([]);
        }
    });
    }
  /**
   * Enregistre les données sélectionnées
   * @param data Données sélectionnées dans le tableau
   */
  setDataSelected(data : any[]){
    this.data=data;
  }
  /**
   * Renvoie les données pour ensuite les traiter dans le composant que l'on souhaite
   * @returns Données sélectionnées au composant qui appelle cette fonction
   */
  getDataSelected():any[]{
    return this.data;
  }

  /**
   * Permet de choisir les actions que l'on peut faire sur le tableau
   * @param actions Tableau contenant les actions que doit faire le bouton
   * @example setActions([{name:"Modifier", action:modifyDoc}, {name:"Supprimer", action:deleteDoc}])
   */
  setActions(actions : actionInterface[]){
    this.actions = actions;
  }

  /**Retourne les actions qui ont été choisies
   * @returns tableau des actions*/
  getActions():actionInterface[]{
    return this.actions;
  }

  /**Stocker le dialog créé et utilisable via le bouton action
   * @param dialog DialogComponent*/
  setDialogToOpen(dialog : DialogComponent){
    this.dialog = dialog
  }
  /**Ouvre le dialog stocké dans Table Service*/
  OpenDialog(){
    this.dialog.openDialog();
  }

  /**Stocker le dialog Supprimer
   * @param dialog DialogComponent*/
  setDialogDeleteElement(dialog : DialogComponent){
    this.dialogDeleteElement = dialog;
  }

  /** Ouvre le dialog Supprimer*/
  openDialogDeleteElement(){
    this.dialogDeleteElement.openDialog();
  }

  /**
   * Télécharge directement le document demandé
   * @param api Lien d'API (ex : "/api/certification/document_certification/")
   * @param id ID du document
   * @param name Nom du document
   * @returns Observable avec les possibles erreurs
   */
  downloadFile(api :string, id : number, name:string){
    const urlDoc = api +id +'/?open=true'
    this.checkDocumentDisponibility(urlDoc).subscribe({
        complete:()=>{
          const a=document.createElement("a");
          a.href = urlDoc;
          a.download = name;
          a.click();
          this.MessageService.add({detail:"Téléchargement...", severity:"success"});
        },
        error:(err)=>{
          if(err.status===200){
            this.MessageService.add({detail:"Téléchargement...", severity:"success"});
            const a=document.createElement("a");
            a.href = urlDoc;
            a.download = name;
            a.click();
          }else{
            this.MessageService.add({severity:"error", summary:"Erreur", detail:"Le document "+name+" n'a pas été trouvé."})
          }
        }
      })
  }

  /**
   * Ouvre un autre onglet avec le document à consulter
   * @param api Lien d'API (ex: "/api/certification/document_certification/")
   * @param id ID du document
   * @returns Observable avec les possibles erreurs
   */
  previewFile(api:string, id:number){
    const urlDoc = api +id +'/?open=true'
    console.log(urlDoc)
    this.MessageService.add({severity:"info", summary:"Ouverture..."})

    this.checkDocumentDisponibility(urlDoc).subscribe({
      complete:()=>{
        window.open(urlDoc, '_blank')
      },
      error:(err)=>{
        if(err.status===200){
        window.open(urlDoc, '_blank')
        }else{
          this.MessageService.add({severity:"error", summary:"Erreur", detail:"Le document n'a pas été trouvé."})
        }
      }
    })
  }

  checkDocumentDisponibility(api : string):Observable<any>{
    return this.http.get(api);
  }

  SendMessageService(message : MessageInterface){
    this.MessageService.add({severity:message.severity, detail:message.detail, summary:message.summary})
  }

}
