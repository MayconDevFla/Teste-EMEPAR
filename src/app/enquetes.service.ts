import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Enquete } from './enquetes/servicos/enquetes';

@Injectable({
  providedIn: 'root'
})
export class EnquetesService {

  constructor(
    private http: HttpClient
  ) { }

  consult() : Observable<Enquete[]>{
    return this.http.get<Enquete[]>('http://localhost:8080/votos')
  }

  consultId(id: number) : Observable<Enquete>{
    return this.http.get<any>(`http://localhost:8080/votos/${id}`)
  }

  insert(enquete : Enquete) : Observable<Enquete>{
    return this.http.post<Enquete>('http://localhost:8080/votos/id', enquete)
  }

  update(enquete: Enquete) : Observable<any>{
    return this.http.put<Enquete>(`http://localhost:8080/votos/${enquete.id}`, enquete)
  }

  delete(enquete: Enquete) : Observable<any>{
    return this.http.delete<Enquete>(`http://localhost:8080/votos/${enquete.id}`)
  }

}
