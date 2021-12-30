import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  customer: any = null;
  navigationExtras: NavigationExtras = {
    state:{
      value: null
    }}

  constructor(
    private router: Router,
    private clientesService: ClientesService
  ) { 
    //tengo que hacerlo en el constructor porque si lo hago en init me da null debido a que la navegacion muere al crearse
    //https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    const navigation = this.router.getCurrentNavigation();
    this.customer = navigation?.extras?.state;
  }

  ngOnInit(): void {
    if (this.customer == null){
      //asi controlo que nadie se intente colar
      this.router.navigate(["clientes-v2"]);
    }
  }

  deleteCustomer(customer: any){
    this.clientesService.deleteCustomer(customer.id);
    console.log(customer);
    this.router.navigate(["clientes-v2"]);
  }

}
