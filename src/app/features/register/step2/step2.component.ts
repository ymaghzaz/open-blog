import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.css']
})
export class Step2Component implements OnInit {

  public offers = [
    {
      name: 'start',
      price: 155,
      types: [
        '1 seance arabe ou couran'
      ]
    },
    {
      name: 'offre stander',
      price: 195,
      types: [
        '1 seance d arabes',
        '1 seance de coran'
      ]
    },
    {
      name: 'offre courant',
      price: 185,
      types: [
        '2 seance de coran'
      ]
    },
    {
      name: 'offre flixible',
      price: 235,
      types: [
        '3 seance  au choix'
      ]
    },
    {
      name: 'offre complete',
      price: 270,
      types: [
        '4 seance  au choix'
      ]
    },
    {
      name: 'offre big',
      price: 300,
      types: [
        '5 seance  au choix'
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
