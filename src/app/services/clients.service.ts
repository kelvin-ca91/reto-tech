import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { IClient } from '../interfaces/client';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: "root"
})
export class ClientsService {
  private clientsUrl = `${environment.firebase.databaseURL}/clients`;
  private prefix = '.json';

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get(`${this.clientsUrl}${this.prefix}`);
  }

  store(body:IClient) {
    return this.http.post(`${this.clientsUrl}${this.prefix}`, body);
  }

  destroy(id: string) {
    return this.http.delete(`${this.clientsUrl}/${id}${this.prefix}`);
  }

  show(id: string){
    return this.http.get(`${this.clientsUrl}/${id}${this.prefix}`);
  }

  update(body:IClient, id: string) {
    return this.http.patch(`${this.clientsUrl}/${id}${this.prefix}`, body);
  }
}
