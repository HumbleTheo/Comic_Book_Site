import { Component, OnInit } from '@angular/core';
import { ComicsService } from 'src/app/services/comics.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  constructor(private comicService: ComicsService) {}

  ngOnInit(): void {
    this.comicService.getAllComics().subscribe((res: any) => {
      if (res.message === 'Success.') this.comics = res.data;
    });
  }

  comics: any[] = [];

  deleteComic(id: string) {
    if (window.confirm('Are you sure you want to delete this comic?')) {
      this.comicService.deleteComicById(id).subscribe(() => {
        this.ngOnInit();
      });
    }
  }
}
