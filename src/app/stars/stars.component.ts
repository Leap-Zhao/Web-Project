import { Component, OnInit, Input,Output,EventEmitter,OnChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {

	// 星级评价的数值(0-5),默认为0
	//input装饰器,表示数值应该由组件传递过去
	@Input()
	private rating:number = 0;

	// 星星star数组
	private stars: boolean[];

  //设置星星是否只读
  @Input()
  private readonly:boolean = true;

  //设置新评价的星数(可以和父组件相互传输)
  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();

  	constructor() { }

  	ngOnInit() {
  	}

    ngOnChanges(){
      //将stars的值根据product的rating值来确定
      this.stars = [];
      for(let i=1;i<=5;i++){
        this.stars.push(i>this.rating);
        //如果rating是2.5,则starts的值为[false,false,true,true,true],即两实心三空心
      }
    }

    //点击评论时做的事
    // index为当前点的星星数
    clickStar(index:number){
      //如果不是只读的,就可点,是只读的,就不可点
      if(!this.readonly){
        //index下标为0,所以+1
        this.rating = index + 1;
        //双向绑定rating
        this.ratingChange.emit(this.rating);
      }
    }

}
