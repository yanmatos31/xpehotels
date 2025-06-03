import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, RouterLinkActive, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hotels teste';
  description = 'descrição teste';
  exibirInformacaoSecreta = true;
  hoteis : string[] = ['MG', 'SP', 'RJ'];
  nomeHotel = model('Palace hotel');
  limparHoteis(){
    this.hoteis = [];
  }
  exibirHotel (){
    console.log('Nome do hotel: ', this.nomeHotel());
  }
  atualizarHotel(event: Event){
    const input = event.target as HTMLInputElement;
    this.nomeHotel.set(input.value);
  }
  limparNgModel(){
    this.nomeHotel.set('');
  }
  /*ngOnInit(){
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/ngsw-config.json')
      .then(() => console.log('Service worker registrado'))
      .catch(error => console.log('Erro ao registrar SW!', error))
    }
  }*/
}
