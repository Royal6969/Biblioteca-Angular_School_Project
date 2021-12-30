import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteV2Service } from 'src/app/services/cliente-v2.service';

@Component({
  selector: 'app-clientes-v2',
  templateUrl: './clientes-v2.component.html',
  styleUrls: ['./clientes-v2.component.css']
})
export class ClientesV2Component implements OnInit {

  allCustomersFirestore: any;

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }}

  constructor(
    private clientesV2Service: ClienteV2Service,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(): void {
    this.clientesV2Service.getCustomers()
      .subscribe((res) => {
        this.allCustomersFirestore = res.map((customer: any) => {
          return {
            data: customer.payload.doc.data(),
            id: customer.payload.doc.id
          } as Cliente;
        });
      });
      //console.log(this.allCustomersFirestore);
  }

  getCustomerDetails(customer: any){
    this.navigationExtras.state = customer;
    console.log(customer);
    this.router.navigate(["customer-details"], this.navigationExtras)
  }

  getCustomerEdit(customer: any){
    this.navigationExtras.state = customer;
    console.log(customer);
    this.router.navigate(["edit-customer"], this.navigationExtras)
  }

  getCustomerDelete(customer: any){
    this.navigationExtras.state = customer;
    this.router.navigate(["delete-customer"], this.navigationExtras)
  }

}
