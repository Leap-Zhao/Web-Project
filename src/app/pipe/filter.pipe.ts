import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string, keyword:string): any {
  	// 判断当前用户传没传filterField和keyword
  	if (!filterField || !keyword){
  		return list;
  	}
  	//如果匹配到了商品,则 indexOf(keyword)>=0成立,返回true,否则返回false
  	return list.filter(item => {
  		let fieldValue = item[filterField];
  		return fieldValue.indexOf(keyword) >= 0;
  	});
  }

}
