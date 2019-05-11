import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserService } from './service/user.service';
import { VendorService } from './service/vendor.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './core/menu/menu.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { UserEditComponent } from './feature/user-edit/user-edit.component';
import { UserDetailComponent } from './feature/user-detail/user-detail.component';

import { ProductService } from './service/product.service';

import { SortPipe } from './Pipe/sort.pipe';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { PurchaseRequestCreateComponent } from './feature/pr/purchase-request-create/purchase-request-create.component';
import { PurchaseRequestDetailComponent } from './feature/pr/purchase-request-detail/purchase-request-detail.component';
import { PurchaseRequestEditComponent } from './feature/pr/purchase-request-edit/purchase-request-edit.component';
import { PurchaseRequestListComponent } from './feature/pr/purchase-request-list/purchase-request-list.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { PrliLinesComponent } from './feature/prli/prli-lines/prli-lines.component';
import {PurchaseRequestService }from 'src/app/service/purchase-request.service';
import {SystemService} from 'src/app/service/system.service';
import { PurchaseRequestLineItemService } from 'src/app/service/purchase-request-line-item.service';
import { PurchaseRequestReviewComponent } from './feature/pr/purchase-request-review/purchase-request-review.component';
import { PurchaseRequestApproveComponent } from './feature/pr/purchase-request-approve/purchase-request-approve.component';
import { PrliEditComponent } from './feature/prli/prli-edit/prli-edit.component';
import { PrliCreateComponent } from './feature/prli/prli-create/prli-create.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    UserCreateComponent,
    VendorListComponent,
    VendorCreateComponent,
    UserEditComponent,
    UserDetailComponent,
    SortPipe,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    VendorEditComponent,
    VendorDetailComponent,
    PurchaseRequestCreateComponent,
    PurchaseRequestDetailComponent,
    PurchaseRequestEditComponent,
    PurchaseRequestListComponent,
    UserLoginComponent,
    PrliLinesComponent,
    PurchaseRequestReviewComponent,
    PurchaseRequestApproveComponent,
    PrliEditComponent,
    PrliCreateComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    VendorService,
    ProductService,
    PurchaseRequestService,
    PurchaseRequestLineItemService,
    SystemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }