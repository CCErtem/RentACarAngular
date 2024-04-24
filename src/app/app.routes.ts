import { Routes } from '@angular/router';
import { HomePageComponent } from './routers/home-page/home-page.component';
import { MainLayoutComponent } from './shared/layouts/main-layout/main-layout.component';
import { NotFoundPageComponent } from './routers/not-found-page/not-found-page.component';
import { CreateBrandPageComponent } from './routers/create-brand-page/create-brand-page.component';
import { CreateModelPageComponent } from './routers/create-model-page/create-model-page.component';
import { UpdateBrandPageComponent } from './routers/update-brand-page/update-brand-page.component';
import { UpdateModelPageComponent } from './routers/update-model-page/update-model-page.component';
import { ModelDetailsPageComponent } from './routers/model-details-page/model-details-page.component';
import { CustomerDetailPageComponent } from './routers/customer-detail-page/customer-detail-page.component';
import { RentalDetailsPageComponent } from './routers/rental-details-page/rental-details-page.component';

export const routes: Routes = [
  // Home
  {
    path: '', // /
    pathMatch: 'full',
    redirectTo: 'home',
    // children: []
  },
  {
    path: 'home', // /home
    // pathMatch: 'prefix', // Default // ^(/home)
    component: MainLayoutComponent,
    children: [
      {
        path: "models", // /home/models
        component: HomePageComponent,
      },
      {
        path: "models/:modelId", // /home/models/1
        component: ModelDetailsPageComponent
      },
      {
        path: "customers", 
        component: CustomerDetailPageComponent
      },
      {
        path: "rentals", 
        component: RentalDetailsPageComponent
      }

    ]
  },
  {
    path: 'brands',
    component: MainLayoutComponent,
    children: [
      {
        path: 'create',
        component: CreateBrandPageComponent,
      },
      {
        path:'update',
        component:UpdateBrandPageComponent,
      },
    
    ]
  },
  {
    path: 'models',
    component: MainLayoutComponent,
    children: [
      {
        path: 'create',
        component:CreateModelPageComponent,
      },
      {
        path: 'update',
        component:UpdateModelPageComponent,
    
      },
    
    ]
  },


  // 404 Not Found Page
  {
    path: '**', // Her path'de çalışır. En sona yazılmalı.
    redirectTo: 'not-found',
  },
  {
    path: 'not-found',
    component: NotFoundPageComponent,
  },

  
];
