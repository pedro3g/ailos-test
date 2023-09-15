import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcumbComponent } from './breadcumb.component';

describe('BreadcumbComponent', () => {
  let component: BreadcumbComponent;
  let fixture: ComponentFixture<BreadcumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BreadcumbComponent],
    });
    fixture = TestBed.createComponent(BreadcumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add breadcumb', () => {
    component.breadcumbs = [
      {
        label: 'Breadcumb 1',
        active: true,
      },
      {
        label: 'Breadcumb 2',
        active: false,
      },
    ];

    fixture.detectChanges();

    const breadcumbs = fixture.nativeElement.querySelectorAll(
      'li'
    ) as HTMLLIElement[];

    expect(breadcumbs.length).toBe(2);
    expect(breadcumbs[0].textContent).toContain('Breadcumb 1');
    expect(breadcumbs[1].textContent).toContain('Breadcumb 2');
  });

  it('should add active class', () => {
    component.breadcumbs = [
      {
        label: 'Breadcumb 1',
        active: true,
      },
      {
        label: 'Breadcumb 2',
        active: false,
      },
    ];

    fixture.detectChanges();

    const breadcumbs = fixture.nativeElement.querySelectorAll(
      'li'
    ) as HTMLLIElement[];

    expect(breadcumbs[0].classList.contains('active')).toBe(true);
    expect(breadcumbs[1].classList.contains('active')).toBe(false);
  });
});
