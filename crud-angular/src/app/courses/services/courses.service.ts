import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



///Decorator(notacao) "Injectable": faz parte da injeção de dependencias das classes

@Injectable({
  providedIn: 'root'// providedIn: 'root' disponibiliza o serviço de forma global. tem que importar no app module
})

export class CoursesService {

  constructor(private httpClient: HttpClient) {

  }

  list(){

    return [
      {_id: '1', name: 'Angular', category: 'front-end'}

    ];
  }
}
