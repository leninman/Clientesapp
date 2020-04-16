import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import {ClientesService} from './clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  
})
export class ClientesComponent implements OnInit {

  private clientesService:ClientesService;

  constructor(clientesService:ClientesService) { 
  			this.clientesService=clientesService;


  }


  clientes:Cliente[];

  ngOnInit(): void {

  	this.clientesService.getClientes().subscribe(
        clientes=>this.clientes=clientes
      );
  }

}
