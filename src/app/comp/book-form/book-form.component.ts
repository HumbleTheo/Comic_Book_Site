import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  constructor(private comicService: ComicsService, private router: Router) {}

  ngOnInit(): void {}

  comic = {
    title: '',
    artist: '',
    price: '',
    category: '',
  };

  onSubmit() {
    this.comicService.createComic(this.comic).subscribe(() => {
      this.router.navigateByUrl('/account');
    });
  }
}
