import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  async register(email: string, password: string) {
    try {
      return await this.angularFireAuth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  async login(email: string, password: string) {
    try {
      return await this.angularFireAuth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log("error en login: ", err);
      return null;
    }
  }

  async loginWithGoogle(email: string, password: string) {
    try {
      return await this.angularFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    } catch (err) {
      console.log("error en login con Google: ", err);
      return null;
    }
  }

  getUserInfo() {
    return this.angularFireAuth.authState;
  }

  logout() {
    this.angularFireAuth.signOut();
  }
}
