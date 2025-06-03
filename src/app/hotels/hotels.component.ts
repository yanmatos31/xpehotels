import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-hotels',
  imports: [RouterModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {
  hoteis : string[] = ['MG', 'SP', 'RJ'];
  constructor(private readonly service: HotelsService){}
ngOnInit(){
  this.getHotels(); //carregue os hoteis
  this.requestLocation(); //solicita permissão de localização
  this.requestNotification(); //emite notificação em tela
  this.persistHotelDB(); // abre a conexão com o IndexDB e persiste um hotel
}

  getHotels(){
    return this.service.getHotels();
  }
  requestLocation(){
    navigator.geolocation.getCurrentPosition(function(position){
      console.log("As coordenadas são: ", position.coords.latitude, position.coords.longitude);
    })
  }
  requestNotification(){
    Notification.requestPermission().then(function(result){
      if (result == 'granted'){
        console.log("Permissão concedida");
      }
    })
  }
  persistHotelDB(){
    const request = indexedDB.open('hotels', 1);

    request.onupgradeneeded = function(event){
      const db = (event.target as IDBOpenDBRequest).result;

      if(!db.objectStoreNames.contains('hotels')){
        db.createObjectStore('hotels', {keyPath: 'id'});
        console.log("Tabela hotels criada com sucesso!");
      } 
    };
  
    request.onsuccess = function(event){
      const db = (event.target as IDBOpenDBRequest).result;

      const transaction = db.transaction(['hotels'], 'readwrite');
      const store = transaction.objectStore('hotels');

      const hotel = {id: 2, name: 'Hotel SP'};
      const addRequest = store.add(hotel);

      addRequest.onsuccess = function(){
        console.log("Hotel adicionado com sucesso");
      }
      addRequest.onerror = function(event){
        console.log("Erro ao adicionar hotel", (event.target as IDBRequest).error);
      }
    };
    request.onerror = function(event){
      console.log("Erro ao abrir DB", (event.target as IDBOpenDBRequest).error);
    };
  }
}
