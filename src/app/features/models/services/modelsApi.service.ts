import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelListItemDto } from '../models/model-list-item-dto';
import { PostModelRequest } from '../models/post-model-request';
import { PostModelResponse } from '../models/post-model-response';
import { UpdateModelRequest } from '../models/update-model-request';
import { UpdateModelResponse } from '../models/update-model-response';
import { ModelDetailsDto } from '../models/model-details-dto';

@Injectable({
  providedIn: 'root',
})
export class ModelsApiService {
  constructor(private http: HttpClient) {}

  getList(
    brandId: number | null = null,
    searchBrandName: string | null = null,
    page:number | null = null,
    limit:number | null = null,
  ): Observable<HttpResponse<ModelListItemDto[]>> {
    const requestQueryParams: any = {};
    if (brandId !== null) requestQueryParams.brandId = brandId;
    if (searchBrandName) requestQueryParams.name_like = searchBrandName;
    if(page) requestQueryParams._page=page;
    if(limit)requestQueryParams._limit=limit;
  
    return this.http.get<ModelListItemDto[]>('http://localhost:3000/models', {
      params: requestQueryParams,
      observe: 'response'
    });
  }

  postModel(model: PostModelRequest): Observable<PostModelResponse>{
    return this.http.post<PostModelResponse>(
      'http://localhost:3000/models',
      model
    )
  }
  putModel(model: UpdateModelRequest,id:number| null=null,): Observable<UpdateModelResponse>{

    return this.http.put<UpdateModelResponse>(
      `http://localhost:3000/models/${id}`,
     model,
    );
  }

  getById(id: number): Observable<ModelDetailsDto> {
    return this.http.get<ModelDetailsDto>(`http://localhost:3000/models/${id}`);
  }



  
}
