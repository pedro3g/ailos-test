import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SearchComponent } from './modules/search/search.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { AvatarComponent } from './shared/components/header/avatar/avatar.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { BadgeIconComponent } from './shared/components/badge-icon/badge-icon.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, SearchComponent, HeaderComponent, AvatarComponent, ButtonComponent, BadgeIconComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
