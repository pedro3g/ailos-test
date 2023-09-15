import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should add variant 'outlined'`, () => {
    component.variant = 'outlined';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('outlined');
  });

  it(`should add variant 'filled'`, () => {
    component.variant = 'filled';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('filled');
  });

  it(`should add radius 'rounded'`, () => {
    component.radius = 'rounded';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('rounded');
  });

  it(`should add radius 'square'`, () => {
    component.radius = 'square';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('square');
  });

  it(`should add size 'small'`, () => {
    component.size = 'small';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('small');
  });

  it(`should add size 'medium'`, () => {
    component.size = 'medium';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('medium');
  });

  it(`should add size 'large'`, () => {
    component.size = 'large';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('large');
  });

  it(`should add horizontal padding 'small'`, () => {
    component.horizontalPadding = 'small';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('padding-small');
  });

  it(`should add horizontal padding 'medium'`, () => {
    component.horizontalPadding = 'medium';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('padding-medium');
  });

  it(`should add horizontal padding 'large'`, () => {
    component.horizontalPadding = 'large';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.classList).toContain('padding-large');
  });

  it(`should add value`, () => {
    component.value = 'Button';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('button');

    expect(button.textContent).toContain('Button');
  });
});
