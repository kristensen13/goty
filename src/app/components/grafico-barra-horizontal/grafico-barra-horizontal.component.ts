import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css'],
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     name: 'Juego 1',
  //     value: 8940000,
  //   },
  //   {
  //     name: 'Juego 2',
  //     value: 5000000,
  //   },
  //   {
  //     name: 'Juego 3',
  //     value: 7200000,
  //   },
  //   {
  //     name: 'Juego 4',
  //     value: 7200000,
  //   },
  // ];
  view: [number, number] = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Juegos';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Votos';

  colorScheme = 'nightLights';

  //intervalo: any;
  constructor() {
    ////Object.assign(this.single);
    // this.intervalo = setInterval(() => {
    //   console.log('tick');
    //   const newResults = [...this.results];
    //   for (let i in newResults) {
    //     newResults[i].value = Math.round(Math.random() * 500);
    //   }
    //   this.results = [...newResults];
    // }, 1500);
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  ngOnDestroy(): void {
    //clearInterval(this.intervalo);
  }
}
