import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    let path = this.route.snapshot.routeConfig?.path;
    if (path) {
      switch (path) {
        case 'action':
          this.comics = this.comics1;
          break;
        case 'superhero':
          this.comics = this.comics2;
          break;
        case 'slice-of-life':
          this.comics = this.comics1;
          break;
        case 'humor':
          this.comics = this.comics1;
          break;
        case 'horror':
          this.comics = this.comics1;
          break;
      }
    }
  }

  comics: any[] = [];
  comics1 = [
    {
      cover: '/assets/Block_9.jpg',
      title: 'Apple Black',
      artist: 'Whyt Manga',
      genre: 'Action',
      price: '$50',
    },
    {
      cover: '/assets/Block_10.jpg',
      title: 'B.O.I',
      artist: 'Luqman and Harvey',
      genre: 'Action',
      price: '$63',
    },
    {
      cover: '/assets/Block_2.jpg',
      title: 'Hammer Hands',
      artist: 'John Wright',
      genre: 'Action',
      price: '$57',
    },
    {
      cover: '/assets/Block_7.jpg',
      title: 'Yellow Stringer',
      artist: 'Bob Brown',
      genre: 'Action',
      price: '$85',
    },
  ];

  comics2 = [
    {
      cover: '/assets/Block_9.jpg',
      title: 'Orange Man',
      artist: 'Bob Borne',
      genre: 'Superhero',
      price: '$66',
    },
    {
      cover: '/assets/Block_10.jpg',
      title: 'The Hype Squad',
      artist: 'Luke Walker',
      genre: 'Superhero',
      price: '$68',
    },
    {
      cover: '/assets/Block_2.jpg',
      title: 'The Titan',
      artist: 'John Lee',
      genre: 'Superhero',
      price: '$97',
    },
    {
      cover: '/assets/Block_7.jpg',
      title: 'Team TCG',
      artist: 'Sherry Thomas',
      genre: 'Superhero',
      price: '$86',
    },
  ];
}
