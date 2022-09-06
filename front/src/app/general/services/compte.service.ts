import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { AuthService } from 'src/app/authentification/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http : HttpClient, private AuthService : AuthService) { }

  changePassword(passwords : {newpassword_1:string, newpassword_2:string}){
      return this.http.post('/api/auth/password/change/', passwords)
  }

  newAccount(data : any, organismeID : number) {
    return this.http.patch('/api/compte/organisme/'+organismeID+'/', data)
  }

  findCertificationTypes(){
    return this.http.get<{id:number;nom:string}[]>('/api/certification/type_certification/');
  }

  addCertif(data : any){
    return this.http.post('/api/certification/', data,{withCredentials:true,})
  }

  modifyCertif(data:any, certificationID : string|null){
    return this.http.put('/api/certification/'+ certificationID+'/', data,{withCredentials:true,})
  }
}
