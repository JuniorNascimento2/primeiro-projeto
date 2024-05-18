import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {

  classeBotaoVerde = 'botao verde';
  classeBotaoVermelho = 'botao vermelho';

  aplicarEstiloVerde = false;
  estilosParagrafo = { 'font-size': '14px', 'font-style': 'italic' }
  
  name = '';

  camposVisiveis = true;

clientes = [
  {nome: 'Júnior'},
  {nome: 'Erick'},
  {nome: 'Fernando'},
  {nome: 'Tiago'}
];

  aplicarEstilos() {
    this.aplicarEstiloVerde = !this.aplicarEstiloVerde;
  }

  alterarParaMaisculo($event: string) {

    this.name = $event.toUpperCase();

  }

  esconderCampos() {
    this.camposVisiveis = !this.camposVisiveis;
    }

}
