import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ModelsApiService } from '../../services/modelsApi.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PostModelRequest } from '../../models/post-model-request';
import { ValidationErrorsPipe } from '../../../../core/pipes/validation-errors.pipe';

@Component({
  selector: 'app-create-model-form',
  standalone: true,
  imports:[
    CommonModule,
    ReactiveFormsModule,
    ValidationErrorsPipe
  ],
  templateUrl: './create-model-form.component.html',
  styleUrl: './create-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateModelFormComponent { 
form: FormGroup = this.fb.group({

  brandId:[
    '',
    [Validators.required],
  ],

  name: [
    '',
    [Validators.required, Validators.minLength(3)],
  ],
  modelYear: [
    '',
    [Validators.required]
  ],
  imageUrl: [
    '',
    [Validators.required]
  ],
  dailyPrice: [
    '',
    [Validators.required]
  ],
})

constructor(
  private fb: FormBuilder,
  private modelApiService: ModelsApiService
){}

createModel(){
  const request:PostModelRequest={
    brandId: this.form.value.brandId,
    name: this.form.value.name,
    modelYear: this.form.value.modelYear,
    imageUrl: this.form.value.imageUrl,
    dailyPrice: this.form.value.dailyPrice,
  };
  this.modelApiService.postModel(request).subscribe({
    next: (response) => {
      console.info('Response:', response)
    },
    error:(error) =>{
      console.error('Error:',error);
    },
    complete:() =>{
      console.info('Model created successfully');
      this.form.reset();
    }

    
  })
}

onFormSubmit() {
  console.log(this.form);

 if (this.form.invalid) {
  
    console.error('Form is invalid');
    return;
  }

  this.createModel();
}
// this.form.markAllAsTouch


}
