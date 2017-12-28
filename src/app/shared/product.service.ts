import { Injectable } from '@angular/core';

// 定义商品服务 ProductService 对象
@Injectable()
export class ProductService {

	//定义商品数组
	private products: Product[] = [
		new Product(1,"第一个商品",5099,3,"这是第1个商品,是由赵飞月提供的",["电子产品","硬件设备"],"assets/img/appleX.jpg"),
		new Product(2,"第二个商品",2099,2,"这是第2个商品,是由尚洁提供的",["生活用品"],"assets/img/thinkPad.jpg"),
		new Product(3,"第三个商品",3099,4,"这是第3个商品,是由白相辰提供的",["电子产品"],"assets/img/surfaceBook.jpg"),
		new Product(4,"第四个商品",4099,1,"这是第4个商品,是由李子祺提供的",["硬件设备"],"assets/img/ipad.jpg"),
		new Product(5,"第五个商品",5099,3,"这是第5个商品,是由邬丽娜提供的",["图书"],"assets/img/huawei.jpg"),
		new Product(6,"第六个商品",699,2,"这是第6个商品,是由赵飞月提供的",["电子产品","手机电脑"],"assets/img/yinxiang.jpg")
	];

	// 商品评论数组
	private comments: Comment[] = [
		new Comment(1,1,"2017-12-20 20:08:00","尚洁",4,"东西不错"),
		new Comment(2,1,"2017-12-21 20:08:00","白相辰",3,"东西还不错"),
		new Comment(3,1,"2017-12-22 20:08:00","李子祺",4,"东西挺不错"),
		new Comment(4,2,"2017-12-23 20:08:00","赵飞月",3,"东西还可以"),
		new Comment(5,2,"2017-12-24 20:08:00","邬丽娜",2,"东西就那样"),
		new Comment(6,2,"2017-12-25 20:08:00","李子祺",3,"东西不错")
	];


  constructor() { }

  // 获取商品数组
  getProducts(): Product[]{
  	return this.products;
  }

  // 通过id去获取对应的一个商品
  getProduct(id:number): Product{
  	// 找到对应的id,匹配商品后返回
  	return this.products.find((product) => product.id == id);
  }

  //通过商品id去显示对应的评论
  getCommentsForProductId(id:number) : Comment[]{
  	//如果传进的商品id与评论的productId属性相同,则加载此评论
  	return this.comments.filter((comment: Comment) => comment.productId == id)
  }

}

// 构造Product对象
export class Product{
	// 构造函数
	constructor(
		//  商品id,商品名称,商品价格,商品评级,商品描述,商品分类
		public id:number,
		public title:string,
		public price:number,
		public rating:number,
		public desc:string,
		public categories:Array<string>,
		public imgSrc:string
	){}
}

// 构造Comment商品评论对象
export class Comment{
	// 构造函数
	constructor(
		//  评论id,评论的商品id,评论时间,评论用户,评分等级,评论内容
		public id:number,
		public productId:number,
		public timestamp:string,
		public user:string,
		public rating:number,
		public content:string
	){}
}
