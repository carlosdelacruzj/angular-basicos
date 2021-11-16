import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Goku', 'Carlos'];
  heroeBorrado: string = '';

  BorrarHeroe(): void {
    this.heroeBorrado = this.heroes.pop() || '';


  }
}
