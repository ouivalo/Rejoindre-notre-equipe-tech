import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef, EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {NotificationService} from "../../services/notification.service";
import {HttpClient} from "@angular/common/http";
import {ProfilsService} from "../../../profils/services/profils.service";
import {Alerte} from "../../models/alerte.models";
import {SpinnerService} from "../../services/spinner.service";
import {Router} from "@angular/router";
import {DatesService} from "../../services/dates.service";

const URL_ALERTE = '/api/alerte/';
const URL_ALERTE_LOCATAIRE = URL_ALERTE + 'alerte_locataire/?location=';
const URL_ALERTE_CERTIFICATION = URL_ALERTE + 'alerte_certification/?certification=';

const URLS_ALERTE: string[] = []
URLS_ALERTE[1] = URL_ALERTE_CERTIFICATION;
URLS_ALERTE[2] = URL_ALERTE_LOCATAIRE;

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements AfterViewInit {
  private _notifications: Alerte[];

  leftArrowVisible = false;
  rightArrowVisible = false;
  page: number = 1;

  @Input() url: string;

  // @Output() clickOutside: EventEmitter<boolean> = new EventEmitter<boolean>();

  public get notifications() {
    return this._notifications;
  }

  constructor(
    private http: HttpClient,
    private profilsService: ProfilsService,
    private spinnerService: SpinnerService,
    private changeDetector: ChangeDetectorRef,
    private router: Router,
    private dateService: DatesService,
    private eRef: ElementRef
  ) {
  }

  // @HostListener('document:click', ['$event'])
  // clickout(event: { target: any; }) {
  //     this.clickOutside.emit(!this.eRef.nativeElement.contains(event.target));
  // }

  ngAfterViewInit() {
    this.refresh();
    this.changeDetector.detectChanges();
  }

  clickNotification(notification: Alerte) {
    this.http.put(URL_ALERTE + notification.alerte.id + '/', {
      date_vue: this.dateService.dateStringToAmericanFormat(Date.now())
    }).subscribe({
      next: () => {
        this.refresh(this.page);
      }
    });
    this.router.navigate([notification.alerte.alerte_auto.action_url]);
  }

  refresh(page?: number) {
    this.spinnerService.start('notifications');

    const typeid = this.profilsService.getProfilTypeId;
    const profilid = this.profilsService.getProfilId;
    if (page)
      this.page = page;

    const url = URLS_ALERTE[typeid] + profilid +'&page=' + this.page;

    this.http.get<any>(url).subscribe({
      next: (value) => {
        console.log(value.results);
        this._notifications = value.results;
        this.leftArrowVisible = value.previous != null;
        this.rightArrowVisible = value.next != null;

        this.spinnerService.stop('notifications');
      }
    });
  }
}
