import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params} from  '@angular/router';
import {Product,ProductService,Comment} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	//定义:接收通过id传递过来的商品
	product: Product;
  //定义:商品评论数组
  comments: Comment[];
  //定义:新评价的评级(默认5)和内容(默认空)
  newRating:number = 5;
  newComment:string = ""; 
  //定义是否显示新的评论按钮
  isCommentHidden = true;

  constructor(private routeInfo:ActivatedRoute,
  			  private productService: ProductService) { }

  ngOnInit() {
  	//通过 参数拍照 功能去获取商品id(productId)
  	let productId:number = this.routeInfo.snapshot.params['productId'];
  	//通过商品id获取商品详情
  	this.product = this.productService.getProduct(productId);
    //通过商品id来获取商品评论数组
    this.comments = this.productService.getCommentsForProductId(productId);
  }

  //添加新添加的评论功能
  addComment(){
    let comment = new Comment(0,this.product.id,new Date().toISOString(),"游客",this.newRating,this.newComment);
    this.comments.unshift(comment); 

    //处理星级的等级
    // 全部星级相加除以评价的个数
    let sum = this.comments.reduce((sum,comment) => sum + comment.rating,0);
    this.product.rating = sum / this.comments.length;

    //提交之后清空表单内容
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }
}
