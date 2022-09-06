import {Injectable, OnInit} from '@angular/core';
// @ts-ignore
import io from 'socket.io-client';
import {HttpClient} from "@angular/common/http";
import {Observable, observable, share} from "rxjs";
import {ProfilsService} from "../../profils/services/profils.service";
import {MessageService} from "primeng/api";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notificationsCount: number = 0;

  constructor(
    private http: HttpClient,
    private profilsService: ProfilsService,
    private messageService: MessageService
  ) { }
}
