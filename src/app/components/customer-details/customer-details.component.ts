import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  customer: any | undefined;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }}
  currentNavigate: any;

  constructor(
    private router: Router,
  ) { 
    //hay que hacer esto en el constructor porque si se hiciera todo en el ngOnInit(), obtendríamos el objetivo null debido a que la navegación muere al crearse
    //https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    const navigation = this.router.getCurrentNavigation();
    this.customer = navigation?.extras?.state;

    this.currentNavigate = navigation?.finalUrl?.root.children.primary.segments[0].path;
  }

  ngOnInit(): void {
    if (this.customer == undefined){
      //asi controlo que nadie se intente colar
      this.router.navigate(["clientes-v2"]);
    }

    console.log(this.customer);
  }

  isRouteOk() {
    if (this.currentNavigate == "customer-details") {
      return true;
    }
    else if (this.currentNavigate != "customer-details") {
      return false;
    }

    // por si acaso
    return null;
  }

  getCustomerEdit(customer: any){
    this.navigationExtras.state = customer;
    this.router.navigate(["edit-customer"], this.navigationExtras)
  }

  getCustomerDelete(customer: any){
    this.navigationExtras.state = customer;
    this.router.navigate(["delete-customer"], this.navigationExtras)
  }

}
