import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{UserLoginComponent} from './feature/user/user-login/user-login.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { UserEditComponent } from './feature/user-edit/user-edit.component';
import { UserDetailComponent } from './feature/user-detail/user-detail.component';

import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';

import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';

import { PurchaseRequestDetailComponent } from './feature/pr/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestCreateComponent } from './feature/pr/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestListComponent } from './feature/pr/purchase-request-list/purchase-request-list.component';
import { PurchaseRequestEditComponent } from './feature/pr/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestReviewComponent} from 'src/app/feature/pr/purchase-request-review/purchase-request-review.component';
import { PurchaseRequestApproveComponent} from 'src/app/feature/pr/purchase-request-approve/purchase-request-approve.component';

import {PrliLinesComponent} from './feature/prli/prli-lines/prli-lines.component';
import {PrliEditComponent} from 'src/app/feature/prli/prli-edit/prli-edit.component';
import { PrliCreateComponent } from "./feature/prli/prli-create/prli-create.component";


const routes: Routes = [
  { path: '', redirectTo: '/user/list', pathMatch: 'full' },
  { path: 'user/login', component: UserLoginComponent},
  { path: 'user/list', component: UserListComponent },
  { path: 'user/create', component: UserCreateComponent },
  { path: 'user/edit/:id', component: UserEditComponent},
  { path: 'user/detail/:id',component:UserDetailComponent},
  { path: 'user/remove/:id',component:UserDetailComponent},
  
  { path: 'vendor/list', component: VendorListComponent },
  { path: 'vendor/create', component: VendorCreateComponent },
  { path:  'vendor/edit/:id', component: VendorEditComponent},
  { path:  'vendor/detail/:id', component: VendorDetailComponent},
  { path:  'vendor/remove/:id', component: VendorDetailComponent},


  { path: 'product/list', component: ProductListComponent },
  { path: 'product/create', component: ProductCreateComponent },
  { path: 'product/edit/:id', component: ProductEditComponent},
  { path: 'product/detail/:id',component:ProductDetailComponent},
  { path: 'product/remove/:id',component:ProductDetailComponent},

  { path:'purchaserequest/list', component: PurchaseRequestListComponent},
  { path:'purchaserequest/create', component: PurchaseRequestCreateComponent},
  { path:'purchaserequest/edit/:id', component: PurchaseRequestEditComponent},
  { path:'purchaserequest/detail/:id', component: PurchaseRequestDetailComponent},
  { path:'purchaserequest/remove/:id', component: PurchaseRequestDetailComponent},

  { path: 'purchase-request/lines/:id', component: PrliLinesComponent },
  { path: 'purchaserequest/lineitems/:id', component: PrliLinesComponent },
  { path: 'purchaserequest/review', component: PurchaseRequestReviewComponent },
  { path: 'purchaserequest/approve/:id', component: PurchaseRequestApproveComponent },
  { path: 'prli/edit/:id', component: PrliEditComponent },
  { path: "prli/create/:id", component: PrliCreateComponent},
  
  
  { path: '**', component: UserListComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
