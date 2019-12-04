import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListCallsService {

  list = [
    {
      "data": "22/11/2019",
      "alunos": [
        {
          "nome": "Augusto Dias",
          "presence": true,
          "ra": 81701002
        },
        {
          "nome": "Aline Santos",
          "presence": true,
          "ra": 81701003
        },
        {
          "nome": "Ana Santana",
          "presence": true,
          "ra": 81701004
        },
        {
          "nome": "Berenice Souza",
          "presence": true,
          "ra": 81701005
        },
        {
          "nome": "Bruna Olívia",
          "presence": true,
          "ra": 81701006
        },
        {
          "nome": "Breno Oliveira",
          "presence": true,
          "ra": 81701007
        },
        {
          "nome": "Carlos Massa",
          "presence": true,
          "ra": 81701008
        },
        {
          "nome": "Celine Dion",
          "presence": false,
          "ra": 81701009
        },
        {
          "nome": "Clara Fagundes",
          "presence": true,
          "ra": 81701010
        },
        {
          "nome": "Diego Rodrigues",
          "presence": false,
          "ra": 81701011
        },
        {
          "nome": "Diogo Santos",
          "presence": true,
          "ra": 81701012
        },
        {
          "nome": "Eunice Ferrer",
          "presence": true,
          "ra": 81701013
        },
        {
          "nome": "Eliane Rodrigues",
          "presence": true,
          "ra": 81701014
        },
        {
          "nome": "Fábio Fernandes",
          "presence": true,
          "ra": 81701015
        },
        {
          "nome": "Flávio Augusto",
          "presence": false,
          "ra": 81701016
        },
        {
          "nome": "Gabriel Molina",
          "presence": false,
          "ra": 81701017
        },
        {
          "nome": "Gabriela Souza",
          "presence": true,
          "ra": 81701018
        },
        {
          "nome": "Juan Carlos",
          "presence": true,
          "ra": 81701019
        },
        {
          "nome": "Kleber Rodrigues",
          "presence": true,
          "ra": 81701020
        },
        {
          "nome": "Leonardo Silva",
          "presence": true,
          "ra": 81701021
        },
        {
          "nome": "Leônidas Gratunoff",
          "presence": true,
          "ra": 81701022
        },
        {
          "nome": "Mariana Baptista",
          "presence": true,
          "ra": 81701023
        },
        {
          "nome": "Matheus Silva",
          "presence": false,
          "ra": 81701024
        },
        {
          "nome": "Mayara Nascimento",
          "presence": false,
          "ra": 81701025
        },
        {
          "nome": "Natanael Souza",
          "presence": true,
          "ra": 81701026
        },
        {
          "nome": "Paula Duarte",
          "presence": false,
          "ra": 81701027
        },
        {
          "nome": "Rafael Cristiano",
          "presence": true,
          "ra": 81701028
        },
        {
          "nome": "Thiago Silva",
          "presence": false,
          "ra": 81701029
        },
        {
          "nome": "Victor Silva",
          "presence": false,
          "ra": 81701030
        },
        {
          "nome": "Welington Rocha",
          "presence": true,
          "ra": 81701031
        }
      ]
    },
    {
      "data": "21/11/2019",
      "alunos": [
        {
          "nome": "Augusto Dias",
          "presence": false,
          "ra": 81701002
        },
        {
          "nome": "Aline Santos",
          "presence": true,
          "ra": 81701003
        },
        {
          "nome": "Ana Santana",
          "presence": true,
          "ra": 81701004
        },
        {
          "nome": "Berenice Souza",
          "presence": true,
          "ra": 81701005
        },
        {
          "nome": "Bruna Olívia",
          "presence": true,
          "ra": 81701006
        },
        {
          "nome": "Breno Oliveira",
          "presence": true,
          "ra": 81701007
        },
        {
          "nome": "Carlos Massa",
          "presence": true,
          "ra": 81701008
        },
        {
          "nome": "Celine Dion",
          "presence": true,
          "ra": 81701009
        },
        {
          "nome": "Clara Fagundes",
          "presence": true,
          "ra": 81701010
        },
        {
          "nome": "Diego Rodrigues",
          "presence": true,
          "ra": 81701011
        },
        {
          "nome": "Diogo Santos",
          "presence": true,
          "ra": 81701012
        },
        {
          "nome": "Eunice Ferrer",
          "presence": true,
          "ra": 81701013
        },
        {
          "nome": "Eliane Rodrigues",
          "presence": true,
          "ra": 81701014
        },
        {
          "nome": "Fábio Fernandes",
          "presence": true,
          "ra": 81701015
        },
        {
          "nome": "Flávio Augusto",
          "presence": true,
          "ra": 81701016
        },
        {
          "nome": "Gabriel Molina",
          "presence": true,
          "ra": 81701017
        },
        {
          "nome": "Gabriela Souza",
          "presence": false,
          "ra": 81701018
        },
        {
          "nome": "Juan Carlos",
          "presence": true,
          "ra": 81701019
        },
        {
          "nome": "Kleber Rodrigues",
          "presence": true,
          "ra": 81701020
        },
        {
          "nome": "Leonardo Silva",
          "presence": true,
          "ra": 81701021
        },
        {
          "nome": "Leônidas Gratunoff",
          "presence": true,
          "ra": 81701022
        },
        {
          "nome": "Mariana Baptista",
          "presence": true,
          "ra": 81701023
        },
        {
          "nome": "Matheus Silva",
          "presence": false,
          "ra": 81701024
        },
        {
          "nome": "Mayara Nascimento",
          "presence": false,
          "ra": 81701025
        },
        {
          "nome": "Natanael Souza",
          "presence": true,
          "ra": 81701026
        },
        {
          "nome": "Paula Duarte",
          "presence": true,
          "ra": 81701027
        },
        {
          "nome": "Rafael Cristiano",
          "presence": true,
          "ra": 81701028
        },
        {
          "nome": "Thiago Silva",
          "presence": true,
          "ra": 81701029
        },
        {
          "nome": "Victor Silva",
          "presence": true,
          "ra": 81701030
        },
        {
          "nome": "Welington Rocha",
          "presence": false,
          "ra": 81701031
        }
      ]
    }
  ];
  aulas = new BehaviorSubject<any>([]);
  public _aulas = this.aulas.asObservable();

  constructor() {
    this.aulas.next(this.list);
  }

  addCall($item) {
    this.list.push($item)
    this.aulas.next(this.list);
  }
}
