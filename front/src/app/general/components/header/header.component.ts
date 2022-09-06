import {Component, OnInit, ViewChild} from '@angular/core';
import {ProfilsService} from "../../../profils/services/profils.service";
import {MessageService} from "primeng/api";
import {HttpClient} from "@angular/common/http";
// @ts-ignore
import io from 'socket.io-client';
import {NotificationListComponent} from "../notification-list/notification-list.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _notificationsCount: number = 0;
  public notificationsVisible = false;

  @ViewChild('notification_list') notification_list: NotificationListComponent;

  constructor(
    private profilsService: ProfilsService,
    private messageService: MessageService,
  ) {
    const socket = io();
    socket.connect();

    const profil = this.profilsService.getProfil();

    console.log('Init socket')

    socket.on('connect', () => {
      // socket.emit('my_event', {data: 'I\'m connected!'});
      socket.emit('connect_profile', {
        type_profil: this.profilsService.getProfilTypeId,
        id_profil: this.profilsService.getProfilTypeId ===  1 ? profil.certification.id : profil.location?.id
      });
    });

    socket.on('new_alert', (msg: any) => {
      this.messageService.add({severity: 'info', summary: msg.titre, detail: msg.description});
      this.refreshNotificationList();
    });

    socket.on('count_alerts', (msg: any) => {
      this._notificationsCount = msg.data;
    });
  }

  ngOnInit(): void { }

  public get notificationsCount() {
    return this._notificationsCount;
  }

  toggleNotifications() {
    this.notificationsVisible = !this.notificationsVisible;
  }

  refreshNotificationList() {
    this.notification_list.refresh();
  }
}
