import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  constructor() { }

  StringtoIntPhone(number : string|number):number{
    if(typeof number ==="string"){
      const newPhoneNumber =  number.replace('\(\+33\)', "")
      number =  parseInt(newPhoneNumber.split(' ').join(''))
    }
    return number
  }

  IntToStringPhone(number : string|number):string{
    return ('(+33)')+String(number);
  }
}
