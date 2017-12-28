import { Component, OnInit } from '@angular/core';
import {Product,ProductService} from '../shared/product.service';
import {FormControl}  from '@angular/forms';
import 'rxjs/Rx';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	//定义商品数组
	private products: Product[];

  //定义用户输入搜索框的关键字
  private keyword:string;

  //用FormControl类定义过滤的商品名称
  private titleFilter:FormControl = new FormControl();

  	constructor(private productService: ProductService) {
      // 过滤商品列表,返回匹配数据
      // debounceTime的作用是当用户不再输入之后500ms,再触发过滤
      // debounceTime 需要导入 'rxjs/Rx'
      this.titleFilter.valueChanges.debounceTime(500)
       .subscribe(value => this.keyword = value);
    }

  	//生命周期钩子:组件在实例化时会被调用一次,用于初始化实例
  	ngOnInit() {
      //通过ProductService获取所有商品的信息
      this.products = this.productService.getProducts();
  	}

}

