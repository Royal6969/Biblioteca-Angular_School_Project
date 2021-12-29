import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public form!: FormGroup;

  public customerList: Cliente[] = [];
  public customerDetails?: Cliente;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private clientesService: ClientesService
  ) { }

  ngOnInit(): void {
  }

  getCustomers(): void {
    this.clientesService.getCustomers().subscribe((res) => {
      this.customerList = res.map((customer: any) => {
        return {
          ...customer.payload.doc.data(),
          id: customer.payload.doc.id
        } as Cliente;
      });
    });
  }

  openModal(content: TemplateRef<any>, customerId: any): void {
    this.customerDetails = this.customerList.find((customer: Cliente) => customer.id === customerId);

    this.formInit(this.customerDetails);
    this.modalService.open(content, {backdrop: 'static', centered: true});
  }

  formInit(data: any): void { // la data no debe ser del tipo Cliente (interface)??
    this.form = this.fb.group({
      url: [data ? data.url : '', Validators.required],
      name: [data ? data.name : '', Validators.required],
      email: [data ? data.email : '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        ])
      ]
    });
  }

  addCustomer(): void {
    this.clientesService.addCustomer(this.form?.value).then(); // form? porque el objeto puede ser undefined
  }

  updateCustomer(customerId: string): void {
    this.clientesService.updateCustomer(customerId, this.form?.value).then();
  }

  deleteCustomer(customerId: string): void {
    this.clientesService.deleteCustomer(customerId).then();
  }

}
