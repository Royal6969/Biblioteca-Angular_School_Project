import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestoreCollectionGroup } from '@angular/fire/compat/firestore';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteV2Service {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  public getCustomers() {
    return this.angularFirestore.collection('clientes').snapshotChanges();
  }

  public createCustomer(customer: Cliente) {
    return this.angularFirestore.collection('clientes').add(customer);
  }

  public updateCustomer(id: string, customer: Cliente) {
    return this.angularFirestore.collection('clientes').doc(id).set(customer);
  }

  public deleteCustomer(id: string){
    return this.angularFirestore.collection('clientes').doc(id).delete();
  }
}
