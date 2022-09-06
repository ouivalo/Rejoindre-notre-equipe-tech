import { Component, OnInit, ViewChild } from '@angular/core';
import {MessageService} from 'primeng/api';
import { OverlayPanel } from 'primeng/overlaypanel';
import { actionInterface } from 'src/app/general/models/table.models';
import { TableService } from 'src/app/general/services/table-service.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  actions : actionInterface[]
  isOpen : boolean;
  dataSelected : any[];
  constructor(
    private messageService: MessageService, 
    protected TableService : TableService) { }

  ngOnInit(): void {
    this.reloadActions()
  }

  reloadActions(){
    this.actions = this.TableService.actions;
  }
  showError() {
    this.messageService.add({severity:'error', summary: 'Erreur', detail: 'Aucun élément n\'a été sélectionné.'});
  }
  doActions(action : Function){
    this.dataSelected = this.TableService.getDataSelected()
    if(!this.dataSelected || this.dataSelected.length===0){
      this.showError()
    }else{
      action(this.TableService);
    }
  }
  @ViewChild('op', {static:true})
  op: OverlayPanel
  openPanelAction(event : MouseEvent){
    this.actions=this.TableService.getActions();
    if(this.actions.length>0){
      this.op.toggle(event)
      return
    }
    this.messageService.add({severity:'warn', summary:'Actions', detail:'Pas d\'actions disponibles ici.'})
  }
}
