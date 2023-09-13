import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { BadgeIconComponent } from 'src/app/shared/components/badge-icon/badge-icon.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { AvatarComponent } from 'src/app/shared/components/header/avatar/avatar.component';

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
      ],
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
