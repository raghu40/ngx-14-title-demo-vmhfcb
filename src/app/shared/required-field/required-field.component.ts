import { Component, EventEmitter, Input, OnInit, Output, Self } from '@angular/core';
import { NgControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-required-field',
  templateUrl: './required-field.component.html',
  styleUrls: ['./required-field.component.css'],
})
export class RequiredFieldComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() parent;
  @Output() blur: EventEmitter<void> = new EventEmitter<void>();
  disabled!: boolean;
  onChange: (value: any) => void = () => {};
  onTouched: () => void = () => {};

  constructor(@Self() public controlDir: NgControl) {
    console.log(controlDir)
    controlDir.valueAccessor = this;
  }

  ngOnInit() {
    console.log(this.parent)
    const control = this.controlDir.control;
     
      let validators = control?.validator
         ? [control.validator, Validators.required]
         : Validators.required;
      control?.setValidators(validators);
  }

  writeValue(value: any): void {
    value && this.controlDir.control?.setValue(value, { emitEvent: false });
 }

  registerOnChange(onChange: (value: any) => void): void {
    
    this.onChange = onChange;
 }

 registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
 }


  
}
