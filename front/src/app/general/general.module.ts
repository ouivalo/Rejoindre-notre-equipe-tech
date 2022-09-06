import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxModule} from 'primeng/checkbox';
import {Card, CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {AvatarModule} from 'primeng/avatar';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';

import {TagModule} from 'primeng/tag';
import {SlideMenuModule} from 'primeng/slidemenu';
import {MenuModule} from 'primeng/menu';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {TabMenuModule} from 'primeng/tabmenu';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';

import {TableComponent} from './components/table/table.component';
import {MenuComponent} from './components/menu/menu.component';
import {SubmenuComponent} from './components/menu/submenu/submenu.component';
import {CompteLayoutViewComponent} from './views/compte-layout-view/compte-layout-view.component';
import {HeadermenuComponent} from './components/menu/headermenu/headermenu.component';
import {FootermenuComponent} from './components/menu/footermenu/footermenu.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeadercardComponent} from './components/headercard/headercard.component';
import {FootercardComponent} from './components/card/footercard/footercard.component';
import {ContactUsTextComponent} from './components/contact-us-text/contact-us-text.component';
import {CheckboxesConfirmDataComponent} from './components/checkboxes-confirm-data/checkboxes-confirm-data.component';

import {DialogComponent} from './components/dialog/dialog.component';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ToastModule} from 'primeng/toast';
import {LandingPageCardCustomComponent} from './components/landing-page-card-custom/landing-page-card-custom.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ActionButtonComponent} from './components/caption-tab/action-button/action-button.component';
import {InputSearchComponent} from './components/caption-tab/input-search/input-search.component';
import {CaptionTabComponent} from './components/caption-tab/caption-tab.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {TabmenuComponent} from './components/tabmenu/tabmenu.component';
import {TabmenuYearsComponent} from './components/tabmenu-years/tabmenu-years.component';
import {MessageModule} from "primeng/message";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContainerComponent} from './components/container/container.component';
import {ReturnButtonComponent} from './components/return-button/return-button.component';
import {FormDataAccountComponent} from './components/form-data-account/form-data-account.component';
import {AddCertificationComponent} from './components/add-certification/add-certification.component';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {RecapCertifComponent} from './components/recap-certif/recap-certif.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import {PasswordInitialisationComponent} from './components/password-initialisation/password-initialisation.component';
import {BadgeModule} from "primeng/badge";
import {RippleModule} from "primeng/ripple";
import {NotificationListComponent} from './components/notification-list/notification-list.component';
import {VirtualScrollerModule} from "primeng/virtualscroller";
import {LandingPageHeaderComponent} from './components/landing-page-header/landing-page-header.component';
import {CardRecapComponent} from './components/recap-certif/card-recap/card-recap.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TableHeader} from "./components/table/table-header";
import {TableAction} from "./components/table/table-action";
import {TableField} from "./components/table/table-field/table-field";

@NgModule({
  declarations: [TableComponent,
    MenuComponent,
    SubmenuComponent,
    CompteLayoutViewComponent,
    HeadermenuComponent,
    FootermenuComponent,
    HeaderComponent,
    FooterComponent,
    HeadercardComponent,
    FootercardComponent,
    ContactUsTextComponent,
    CheckboxesConfirmDataComponent,
    DialogComponent,
    LandingPageCardCustomComponent,
    DashboardComponent,
    ActionButtonComponent,
    InputSearchComponent,
    CaptionTabComponent,
    BreadcrumbComponent,
    SpinnerComponent,
    TabmenuComponent,
    TabmenuYearsComponent,
    ContainerComponent,
    ReturnButtonComponent,
    FormDataAccountComponent,
    AddCertificationComponent,
    RecapCertifComponent,
    PasswordInitialisationComponent,
    NotificationListComponent,
    LandingPageHeaderComponent,
    CardRecapComponent,
    TableHeader,
    TableField,
    TableAction
  ],
  imports: [
    RadioButtonModule,
    InputTextareaModule,
    InputMaskModule,
    InputSwitchModule,
    ToastModule,
    TabMenuModule,
    MultiSelectModule,
    DialogModule,
    FormsModule,
    CheckboxModule,
    CardModule,
    ProgressSpinnerModule,
    BreadcrumbModule,
    InputTextModule,
    OverlayPanelModule,
    TagModule,
    AvatarModule,
    TooltipModule,
    TableModule,
    SlideMenuModule,
    PanelMenuModule,
    ButtonModule,
    MenuModule,
    CommonModule,
    MessageModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    BadgeModule,
    RippleModule,
    VirtualScrollerModule
  ],
  exports: [
    RadioButtonModule,
    InputTextareaModule,
    InputMaskModule,
    InputSwitchModule,
    HeadercardComponent,
    TableComponent,
    FootercardComponent,
    MenuComponent,
    ContactUsTextComponent,
    CheckboxesConfirmDataComponent,
    DialogComponent,
    DialogModule,
    LandingPageCardCustomComponent,
    CaptionTabComponent,
    TabmenuComponent,
    TabMenuModule,
    TableModule,
    ActionButtonComponent,
    SpinnerComponent,
    TabmenuYearsComponent,
    ButtonModule,
    ToastModule,
    MessageModule,
    InputTextModule,
    InputNumberModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    ContainerComponent,
    ReturnButtonComponent,
    FormDataAccountComponent,
    AddCertificationComponent,
    RecapCertifComponent,
    PasswordInitialisationComponent,
    LandingPageHeaderComponent,
    TableHeader,
    TableAction,
    TableField
  ]
})
export class GeneralModule {
}
