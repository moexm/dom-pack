//// 获取对应的元素
const div = dom.find('#test>.red')[0];
console.log(div);
// 设置 div.style.color
dom.style(div, 'color', 'red');
// 获取多个 div.red 元素
const divList = dom.find('.red') 
// 遍历 divList 里的所有元素
dom.each(divList, (n)=> console.log(n)) 