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
          this.comics = this.comics3;
          break;
        case 'humor':
          this.comics = this.comics4;
          break;
        case 'horror':
          this.comics = this.comics5;
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
      cover: '/assets/Block_11.jpg',
      title: 'Orange Man',
      artist: 'Bob Borne',
      genre: 'Superhero',
      price: '$66',
    },
    {
      cover: '/assets/Block_12.jpg',
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
      title: 'Team Boom',
      artist: 'Sherry Thomas',
      genre: 'Superhero',
      price: '$86',
    },
  ];

  comics3 = [
    {
      cover: '/assets/Block_5.png',
      title: 'The Great Outdoors',
      artist: 'Lucy Williams',
      genre: 'Slice-of-Life',
      price: '$78',
    },
    {
      cover: '/assets/Block_10.jpg',
      title: 'Me and Rufus',
      artist: 'Mark Reid',
      genre: 'Slice-of-Life',
      price: '$65',
    },
    {
      cover: '/assets/Block_4.jpg',
      title: 'That Summer',
      artist: 'Hillary Sanders',
      genre: 'Slice-of-Life',
      price: '$92',
    },
    {
      cover: '/assets/Block_3.jpg',
      title: 'How The Turn Tabled',
      artist: 'Keisha Smith',
      genre: 'Slice-of-Life',
      price: '$64',
    },
  ];

  comics4 = [
    {
      cover: '/assets/Block_8.jpg',
      title: 'Rasta Adventures',
      artist: 'Aldaine Clarke',
      genre: 'Humor',
      price: '$124',
    },
    {
      cover: '/assets/Block_2.jpg',
      title: 'One Too Many',
      artist: 'Penny Laing',
      genre: 'Humor',
      price: '$40',
    },
    {
      cover: '/assets/Block_10.jpg',
      title: 'Oh No, Not Again',
      artist: 'Adam Smith',
      genre: 'Humor',
      price: '$86',
    },
    {
      cover: '/assets/Block_9.jpg',
      title: 'The Tales of Natty',
      artist: 'Romario Donald',
      genre: 'Humor',
      price: '$35',
    },
  ];

  comics5 = [
    {
      cover: '/assets/Block_1.jpg',
      title: 'The Supah',
      artist: 'Kevin Danvers',
      genre: 'Horror',
      price: '$80',
    },
    {
      cover: '/assets/Block_11.jpg',
      title: 'The Honey Man',
      artist: 'Kenni Leslie',
      genre: 'Horror',
      price: '$94',
    },
    {
      cover: '/assets/Block_3.jpg',
      title: "It See's You",
      artist: 'Shavvaun Burrell',
      genre: 'Horror',
      price: '$78',
    },
    {
      cover: '/assets/Block_5.png',
      title: 'The House on the Hill',
      artist: 'Freddy Hall',
      genre: 'Horror',
      price: '$55',
    },
  ];
}
