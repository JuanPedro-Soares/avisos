import { isValidInput } from '#shared/utils/validate-input';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ICustomer } from 'src/app/core/interfaces/customer.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  showPassword = false;
  isLoading = false;
  registerForm!: FormGroup;
  @Input() data?: Omit<ICustomer, 'id'>;
  @Output() formData = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      nome: [this.data ? this.data.nome : '', [Validators.required]],
      email: [
        this.data ? this.data.email : '',
        [Validators.required, Validators.email],
      ],
      senha: [
        this.data ? this.data.senha : '',
        [Validators.required, Validators.minLength(8)],
      ],
    });
  }

  onSubmit() {
    this.isLoading = true;
    const isValidForm = this.registerForm.valid;

    if (isValidForm) {
      this.formData.emit(this.registerForm.value);
    } else {
      this.registerForm.markAllAsTouched();
      this.isLoading = false;
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  isValid(inputName: string, validatorName: string) {
    const formControl: AbstractControl | null =
      this.registerForm.get(inputName);
    return isValidInput(validatorName, formControl);
  }
}
