import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputmaskOptions } from '@ngneat/input-mask';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label?: string;
  @Input() placeholder?: string = '';
  @Input() type?: HTMLInputType = 'text';
  @Input() value?: string;
  @Input() disabled?: boolean;
  @Input() required?: boolean;
  @Input() id?: string = '';
  @Input() mask?: InputmaskOptions<unknown>;
  @Input() inputControl: FormControl<any> = new FormControl();
}

type HTMLInputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';
