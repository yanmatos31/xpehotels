import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, signOut, User, UserCredential } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  userAuthStateChanged() {
    return this.auth.onAuthStateChanged;
  }
}

  
  //return true;
};
