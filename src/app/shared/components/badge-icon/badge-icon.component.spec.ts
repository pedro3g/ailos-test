import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeIconComponent } from './badge-icon.component';

describe('BadgeIconComponent', () => {
  let component: BadgeIconComponent;
  let fixture: ComponentFixture<BadgeIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeIconComponent],
    });
    fixture = TestBed.createComponent(BadgeIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a value for the "icon" input', () => {
    component.icon = 'search';
    fixture.detectChanges();

    const icon = fixture.nativeElement.querySelector('i') as HTMLElement;

    expect(icon.className).toContain('search');
  });

  it('should have a value for the "badgeValue" input', () => {
    component.badgeValue = 10;
    fixture.detectChanges();

    const badgeValue = fixture.nativeElement.querySelector(
      '.badge'
    ) as HTMLElement;

    expect(badgeValue.textContent).toContain('10');
  });
});
