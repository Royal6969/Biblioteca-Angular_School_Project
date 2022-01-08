import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class PrestamosService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  public createPrestamo(prestamo: any) {
    return this.angularFirestore.collection('prestamos').add(prestamo);
  }

  public getPrestamos() {
    return this.angularFirestore.collection('prestamos').snapshotChanges();
  }

  public updatePrestamo(Id: string, prestamo: any) {
    return this.angularFirestore.collection('prestamos').doc(Id).set(prestamo);
  }

  public deletePrestamo(Id: string) {
    return this.angularFirestore.collection('prestamos').doc(Id).delete();
  }

  public getPrestamo(Id: string) {
    return this.angularFirestore.collection('prestamos').doc(Id).snapshotChanges();
  }
}
