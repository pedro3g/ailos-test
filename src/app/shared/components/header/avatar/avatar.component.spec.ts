import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvatarComponent],
    });
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a value for the "avatarUrl" input', () => {
    component.avatarUrl = 'assets/images/avatars/no-avatar.png';
    fixture.detectChanges();

    const avatar = fixture.nativeElement.querySelector(
      'img'
    ) as HTMLImageElement;

    expect(avatar.src).toContain('assets/images/avatars/no-avatar.png');
  });

  it('should have a default value for the "avatarUrl" input', () => {
    const avatar = fixture.nativeElement.querySelector(
      'img'
    ) as HTMLImageElement;

    expect(avatar.src).toContain('assets/images/avatars/no-avatar.png');
  });
});
