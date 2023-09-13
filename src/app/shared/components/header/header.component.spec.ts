import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { BadgeIconComponent } from '../badge-icon/badge-icon.component';
import { ButtonComponent } from '../button/button.component';
import { AvatarComponent } from './avatar/avatar.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        BadgeIconComponent,
        ButtonComponent,
        AvatarComponent,
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a title and subtitle', () => {
    component.title = 'My title';
    component.subtitle = 'My subtitle';
    fixture.detectChanges();
    const title = fixture.nativeElement.querySelector('h2') as HTMLElement;
    const subtitle = fixture.nativeElement.querySelector(
      'small'
    ) as HTMLElement;
    expect(title.textContent).toContain('My title');
    expect(subtitle.textContent).toContain('My subtitle');
  });
});
