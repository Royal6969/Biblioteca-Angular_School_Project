import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  //Crea un nuevo dato   
  public crear(collection: string, data: any) {
    return this.angularFirestore.collection(collection).add(data);
  }

  public obtenerPorId(coleccion: string, id: string) {
    return this.angularFirestore.collection(coleccion).doc(id).snapshotChanges();
    // El documento que tenga ese id tal cual este ahora, le saca un snapshot y me lo devuelve
  }

  public obtenerTodos(coleccion: string) {
    return this.angularFirestore.collection(coleccion).snapshotChanges();
  }

  public actualizar(coleccion: string, data: any, id: string) {
    return this.angularFirestore.collection(coleccion).doc(id).set(data);
  }

  public eliminar(collection: string, id: string) {
    return this.angularFirestore.collection(collection).doc(id).delete();
  }

  public createWithCustomId(collection: string, customId: string, data: any) {
    this.angularFirestore.collection(collection).doc(customId).set(data);
  }
  
}
