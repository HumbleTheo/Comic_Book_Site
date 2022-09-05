import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './comp/home/home.component';
import { LoginComponent } from './comp/login/login.component';
import { HeaderComponent } from './comp/header/header.component';
import { CategoriesComponent } from './comp/categories/categories.component';
import { DisplayComponent } from './comp/display/display.component';
import { DiscountComponent } from './comp/discount/discount.component';
import { CarouselComponent } from './comp/carousel/carousel.component';
import { FooterComponent } from './comp/footer/footer.component';
import { AccountComponent } from './comp/account/account.component';
import { BookFormComponent } from './comp/book-form/book-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    CategoriesComponent,
    DisplayComponent,
    DiscountComponent,
    CarouselComponent,
    FooterComponent,
    AccountComponent,
    BookFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
