import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css'],
})
export class GotyComponent implements OnInit {
  juegos: Game[] = [];
  constructor(private gameSvc: GameService) {}

  ngOnInit(): void {
    this.gameSvc.getNominados().subscribe((games) => {
      console.log(games);
      this.juegos = games;
    });
  }

  votarJuego(juego: Game) {
    this.gameSvc
      .votarJuego(juego.id)
      .subscribe((resp: { ok: boolean; mensaje: string }) => {
        //console.log(resp);
        if (resp.ok) {
          Swal.fire('Gracias', resp.mensaje, 'success');
        } else {
          Swal.fire('Oops', resp.mensaje, 'error');
        }
      });
  }
}
