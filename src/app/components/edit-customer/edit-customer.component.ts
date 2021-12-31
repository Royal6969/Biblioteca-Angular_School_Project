import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  customer: any;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }}
  customerForm: any;

  constructor(
    private router: Router,
    private clientesService: ClientesService
  ) { 
    //hay que hacer esto en el constructor porque si se hiciera todo en el ngOnInit(), obtendríamos el objetivo null debido a que la navegación muere al crearse
    //https://stackoverflow.com/questions/54891110/router-getcurrentnavigation-always-returns-null
    const navigation = this.router.getCurrentNavigation();
    this.customer = navigation?.extras?.state;

    // establecemos que el customerForm tenga estos valores por defecto
    this.customerForm = new FormGroup({
      name: new FormControl(this.customer.data.name, Validators.required),
      age: new FormControl(this.customer.data.age, Validators.required),
      email: new FormControl(this.customer.data.email, Validators.required),
      postalCode: new FormControl(this.customer.data.postalCode, Validators.required),
      address: new FormControl(this.customer.data.address, Validators.required),
      job: new FormControl(this.customer.data.job, Validators.required),
      url: new FormControl(this.customer.data.url, Validators.required),
      notes: new FormControl(this.customer.data.notes)
    })
  }

  ngOnInit(): void {
    console.log(this.customer);
    console.log(this.customerForm);

    if (this.customer == null) {
      //asi controlo que nadie se intente colar
      this.router.navigate(["clientes-v2"]);
    }
  }


  updateCustomer() {
    console.log(this.customerForm.valid);

    if (this.customerForm.valid) {
      this.clientesService.updateCustomer(this.customer.id, this.customerForm.value);
      
      this.router.navigate(["clientes-v2"]);
    
    } else {
      alert("no se rellenaron todos los campos del formulario revisalo bien")
    }
  }

  isValid(field: string){
    const fieldValidate = this.customerForm.get(field);
    
    return (!fieldValidate.valid && fieldValidate.touched) 
      ? 'is-invalid'
      : fieldValidate.touched 
        ? "is-valid"
        : "";
  }

}
