import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICurso } from '../../../shared/interfaces/courseInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  /*url = 'http://examen-nh.jcramireztello.com/api/v1//course';*/

  url = 'http://examen-nh.jcramireztello.com/api/v1/course';
  url2 = 'http://examen-nh.jcramireztello.com/api/v1/course/?featured=true';
  url3 = 'http://examen-nh.jcramireztello.com/api/v1/course/';


  constructor(private http: HttpClient) { }

  getCurso(): Observable<ICurso[]> {
    return this.http.get<ICurso[]>(`${this.url}`);
  }

  getCursoDestacado(): Observable<ICurso[]> {
    return this.http.get<ICurso[]>(`${this.url2}`);
  }

  getCursoDetalle(id: number): Observable<ICurso> {
    return this.http.get<ICurso>(`${this.url3}${id}`);
  }
}
