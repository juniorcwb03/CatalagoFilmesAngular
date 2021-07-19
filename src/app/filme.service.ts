import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Filme } from './filme'; 

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
  url = 'https://localhost:44354/api/filmes';  
  
  constructor(private http: HttpClient) { }  
  getAllFilmes(): Observable<Filme[]> {  
    return this.http.get<Filme[]>(this.url);  
  } 
getFilmeById(Filmeid: string): Observable<Filme> {  
  const apiurl = `${this.url}/${Filmeid}`;
  return this.http.get<Filme>(apiurl);  
} 
createFilme(Filme: Filme): Observable<Filme> {  
  return this.http.post<Filme>(this.url, Filme, httpOptions);  
}  
updateFilme(Filmeid: string, Filme: Filme): Observable<Filme> {  
  const apiurl = `${this.url}/${Filmeid}`;
  return this.http.put<Filme>(apiurl,Filme, httpOptions);  
}  
deleteFilmeById(Filmeid: string): Observable<number> {  
  const apiurl = `${this.url}/${Filmeid}`;
  return this.http.delete<number>(apiurl, httpOptions);  
}  
}
