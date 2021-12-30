import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteV2Service } from 'src/app/services/cliente-v2.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  // Properties for Firestore
  customer: Cliente | undefined;

  public customerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    age: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    postalCode: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    job: new FormControl('', Validators.required),
    url: new FormControl('', Validators.required),
    notes: new FormControl(''),
  });

  constructor(
    private clientesV2Service: ClienteV2Service,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  createCustomer() {
    console.log(this.customerForm.valid);

    if (this.customerForm.valid) {
      this.clientesV2Service.createCustomer(this.customerForm.value);

      this.router.navigate(['clientes-v2']);
    
    } else {
      alert("recuerda que hay que rellenar los campos, si dejas alguno vacio no valdrá");
    }
  }

}
