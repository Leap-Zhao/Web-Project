import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import {HeroDetailComponent} from './hero-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductService} from './shared/product.service';

import {Routes,RouterModule} from "@angular/router";
import { FilterPipe } from './pipe/filter.pipe';

// 路由配置
const routeConfig: Routes = [
  // ''进入home首页的组件
  {path:'',component:HomeComponent},   
  // product/prodTitle进入产品详情组件
  {path:'product/:productId',component:ProductDetailComponent}    
]

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    FilterPipe,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig),
    //响应式编程需引入ReactiveFormsModule
    ReactiveFormsModule
  ],
  //任何服务service在使用之前要声明到providers里 
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
