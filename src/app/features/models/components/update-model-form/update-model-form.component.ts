import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ModelsApiService } from '../../services/modelsApi.service';
import { UpdateModelRequest } from '../../models/update-model-request';
@Component({
  selector: 'app-update-model-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './update-model-form.component.html',
  styleUrl: './update-model-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdateModelFormComponent { 
  form: FormGroup = this.fb.group({
    id:[
      '',
      [Validators.required],
    ],
    brandId:[
      '',
      [Validators.required],
    ],
  
    name: [
      '',
      [Validators.required],
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
  
  updateModel(){
    const request:UpdateModelRequest={
      brandId: this.form.value.brandId,
      name: this.form.value.name,
      modelYear: this.form.value.modelYear,
      imageUrl: this.form.value.imageUrl,
      dailyPrice: this.form.value.dailyPrice,
    };
    this.modelApiService.putModel(request,this.form.value.id).subscribe({
      next: (response) => {
        console.info('Response:', response)
      },
      error:(error) =>{
        console.error('Error:',error);
      },
      complete:() =>{
        console.info('Model update successfully');
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
  
    this.updateModel();
  }
  
  
}
