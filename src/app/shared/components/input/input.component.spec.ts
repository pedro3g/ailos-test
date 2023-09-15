import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule, createMask } from '@ngneat/input-mask';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [ReactiveFormsModule, InputMaskModule],
    });
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label', () => {
    component.label = 'Test';
    fixture.detectChanges();
    const label = fixture.nativeElement.querySelector('label');

    expect(label).toBeTruthy();
  });

  it('should render input', () => {
    component.label = 'Test';
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');

    expect(input).toBeTruthy();
  });

  it('should render input with mask', () => {
    component.label = 'Test';
    component.mask = createMask('999.999.999-99');
    fixture.detectChanges();

    fixture.nativeElement.querySelector('input').value = '12345678901';
    const input = fixture.nativeElement.querySelector('input');

    expect(input.value).toBe('123.456.789-01');
  });
});
