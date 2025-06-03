import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { catchError, map } from 'rxjs/operators';
import {Auth as FirebaseAuth} from 'Firebase/auth'


export interface ApiResponse {
  status: string;
  method: string;
}

@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  constructor(private readonly http: HttpClient) {}

  getHotels() {
    this.http.get<ApiResponse>('https://dummyjson.com/test')
      .pipe(
        catchError(error => {console.error("Erro capturado", error);
        return throwError(Error);
      }),
        map((response: ApiResponse) => response)
      )
      .subscribe(result => 
        console.log("Resultado da requisição: ", result),
        
      );
  }
}
export class AuthService{
  constructor(private auth: FirebaseAuth){}

  login(email: string, password: string): Promise<UserCredential>{
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  logout(): Promise<void>{
    return signOut(this.auth)
  }
  getCurrentUser(): User | null{
    return this.auth.currentUser;
  }
  userAuthStateChanged(){
    return this.auth.onAuthStateChanged;
  }
}

