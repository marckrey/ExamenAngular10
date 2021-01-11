import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IInstructor } from '../interfaces/instructosInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructorServiceService {

  url = 'http://examen-nh.jcramireztello.com/api/v1/instructor';

  constructor(private http: HttpClient) {
  }

  getInstructor(): Observable<IInstructor[]> {
    return this.http.get<IInstructor[]>(`${this.url}`);
  }

}
