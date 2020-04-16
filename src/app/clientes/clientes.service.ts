import { Injectable } from '@angular/core';
import {CLIENTES} from './clientes.json';
import {Cliente} from './cliente';
//import {Observable} from 'rxjs/Observable';
//import {of} from 'rxjs/observable/of';
import {Observable,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getClientes():Observable<Cliente[]>{
  	return of(CLIENTES);
  }
}
