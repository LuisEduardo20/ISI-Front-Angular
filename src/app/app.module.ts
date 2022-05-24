import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderPageComponent } from './components/header-page/header-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './show/show.component';
import { MenuComponent } from './menu/menu.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalProductComponent } from './components/modal-product/modal-product.component';

@NgModule({
  declarations: [AppComponent, HeaderPageComponent, BannerComponent, FooterComponent, DrawerComponent, HomeComponent, ShowComponent, MenuComponent, ModalComponent, ModalProductComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
