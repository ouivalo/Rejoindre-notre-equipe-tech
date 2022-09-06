import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor() { }

  dateStringToAmericanFormat(dateFound:any){
    let date = dateFound
    if(typeof(date) == 'string'){
      date = this.stringToDate(dateFound)
    }
    return new Intl.DateTimeFormat("fr-CA", {year: "numeric", month: "2-digit", day: "2-digit"}).format(date)

  }

  dateToString(dateFound:any){
    const date = new Date(dateFound);
    return date.toLocaleDateString('fr-FR', {day:'2-digit', month:'2-digit', year:'numeric'} )
  }
  stringToDate(dateFound: string){
    var dateParts = dateFound.split("/");
    var dateObject = new Date(+dateParts[2], parseInt(dateParts[1]) - 1, +dateParts[0]);
    return dateObject;
  }
  americanDateStringToFrenchDateString(dateFound:string){
    const date = new Date(dateFound)
    const dateString = date.toLocaleDateString('fr-FR', {day:'2-digit', month:'2-digit', year:'numeric'} )
    return dateString;
  }

  americanStringToDate(dateFound:string){
    const date = new Date(dateFound);
    return date;
  }
}
