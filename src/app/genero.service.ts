import { HttpClient } from '@angular/common/http';  
import { HttpHeaders } from '@angular/common/http';  
import { Observable } from 'rxjs';  
import { Genero } from './genero'; 

var httpOptions = {headers: new HttpHeaders({"Content-Type": "application/json"})};

@Injectable({
  providedIn: 'root'
})
export class GeneroService {
  url = 'https://localhost:44354/api/generos';  
  
  constructor(private http: HttpClient) { } 

  getAllGeneros(): Observable<Genero[]> {  
    return this.http.get<Genero[]>(this.url);  
  } 
   
  getGeneroById(Generoid: string): Observable<Genero> {  

    const apiurl = `${this.url}/${Generoid}`;
    return this.http.get<Genero>(apiurl);  
  } 
  createGenero(Genero: Genero): Observable<Genero> {  
    return this.http.post<Genero>(this.url, Genero, httpOptions);  
  }  
  updateGenero(Generoid: string, Genero: Genero): Observable<Genero> {  
    const apiurl = `${this.url}/${Generoid}`;
    return this.http.put<Genero>(apiurl,Genero, httpOptions);  
  }  
  deleteGeneroById(Generoid: string): Observable<number> {  
    const apiurl = `${this.url}/${Generoid}`;
    return this.http.delete<number>(apiurl, httpOptions);  
  }
}
