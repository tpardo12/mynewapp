import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Serie } from './serie';


@Injectable({
  providedIn: 'root'
})
export class serieService {

  private apiUrl: string = environment.baseUrl ;

  getSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }

constructor(private http: HttpClient) { }

}