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
import { BreadcumbComponent } from './shared/components/breadcumb/breadcumb.component';
import { InputComponent } from './shared/components/input/input.component';
import { InputMaskModule } from '@ngneat/input-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterStatusComponent } from './modules/search/components/register-status/register-status.component';
import { AccountCardComponent } from './modules/search/components/account-card/account-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HeaderComponent,
    AvatarComponent,
    ButtonComponent,
    BadgeIconComponent,
    BreadcumbComponent,
    InputComponent,
    RegisterStatusComponent,
    AccountCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputMaskModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
