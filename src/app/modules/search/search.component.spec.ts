import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { BadgeIconComponent } from 'src/app/shared/components/badge-icon/badge-icon.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AvatarComponent } from 'src/app/shared/components/header/avatar/avatar.component';
import { BreadcumbComponent } from 'src/app/shared/components/breadcumb/breadcumb.component';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { RegisterStatusComponent } from './components/register-status/register-status.component';
import { AccountCardComponent } from './components/account-card/account-card.component';
import { InputMaskModule } from '@ngneat/input-mask';
import { ReactiveFormsModule } from '@angular/forms';
import CooperatedService from 'src/app/core/services/cooperated.service';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchComponent,
        HeaderComponent,
        BadgeIconComponent,
        ButtonComponent,
        AvatarComponent,
        BreadcumbComponent,
        InputComponent,
        RegisterStatusComponent,
        AccountCardComponent,
      ],
      imports: [ReactiveFormsModule, InputMaskModule],
      providers: [CooperatedService],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
