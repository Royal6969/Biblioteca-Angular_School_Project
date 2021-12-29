import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }


  getCustomers() {
    return this.angularFirestore.collection('clientes').snapshotChanges();
  }

  addCustomer(payload: Cliente) {
    return this.angularFirestore.collection('clientes').add(payload);
  }

  updateCustomer(clienteId: string, payload: Cliente) {
    return this.angularFirestore.doc('clientes/' + clienteId).update(payload);
  }

  deleteCustomer(clienteId: string) {
    return this.angularFirestore.doc('clientes/' + clienteId).delete();
  }



}
