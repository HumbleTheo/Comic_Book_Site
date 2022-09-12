import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css'],
})
export class BookFormComponent implements OnInit {
  constructor(
    private comicService: ComicsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      this.comicService.getComicById(this.id).subscribe((res) => {
        if (res.message == 'Success.') {
          this.comic = res.data;
          this.action = 'edit';
        }
      });
    }
  }

  id?: string;
  comic = {
    title: '',
    artist: '',
    price: '',
    category: '',
  };
  action: string = 'add';

  onSubmit() {
    if (this.action == 'add') {
      this.comicService.createComic(this.comic).subscribe(() => {
        this.router.navigateByUrl('/account');
      });
    }

    if (this.action == 'edit') {
      this.comicService.updateComicById(this.id!, this.comic).subscribe(() => {
        this.router.navigateByUrl('/account');
      });
    }
  }
}
