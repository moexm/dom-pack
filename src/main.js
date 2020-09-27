//create node
const newNode1=dom.create("<div>newDiv1</div>");
const newNode2=dom.create("<div>newDiv2</div>");
const child=dom.create("<div>child</div>");
const child2=dom.create("<div>child2</div>")


dom.after(test,newNode1);
dom.before(test,newNode2);

dom.append(test,child);
const removeNode=dom.remove(newNode1);
//console.log(removeNode);

dom.append(newNode2,child2);
//console.log(newNode2);
const emptyNode=dom.empty(newNode2);
//console.log(emptyNode);

dom.attr(child,'class',"child");
const childAttr=dom.attr(child,'class');
console.log(childAttr);

dom.text(attrTest,'here is a childNode');
console.log(dom.text(attrTest));
dom.html(attrTest,"测试-style");


dom.style(attrTest,'color','blue');
console.log(dom.style(attrTest,'color'));
dom.style(attrTest,{color:'red',border:'yellow 1px solid'})

dom.class.add(attrTest,'red');
dom.class.add(attrTest,'blue');
dom.class.remove(attrTest,'blue');
console.log(dom.class.contains(attrTest,'blue'));


const fn =()=>{
    console.log('on click');
}
dom.on(attrTest,'click',fn);
dom.off(attrTest,'click',fn);

//
const findDiv = dom.find('#test')[0];
console.log(findDiv);

const red=dom.find('.red',findDiv)[0];
console.log(red);

console.log(dom.findParent(child));
console.log(dom.findChild(test));
console.log(dom.findSiblings(child));

console.log(dom.next(test1));
console.log(dom.previous(test1));

//不加0，返回的是一个数组列表，不是node本身
const t= dom.find('#travel')[0];
console.log(t);
dom.each(dom.findChild(t),(n)=>{dom.style(n,'color','red')});
// const t2=dom.find('#t2')[0];
// console.log(t2);
console.log(dom.index(t2));
