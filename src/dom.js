window.dom={

    //创建一个节点
    create(string){
        const container=document.createElement("template");
        container.innerHTML=string.trim();
        return container.content.firstChild;
    },
    //在testDIV上添加节点
    //后
    after(node,newNode){
        node.parentNode.insertBefore(newNode,node.nextSibling);
    },
    //前
    before(node,newNode){
       node.parentNode.insertBefore(newNode,node);
    },
    //加儿
    append(parentNode,child){
        parentNode.appendChild(child);
    },
    wrap(node,parent){
        dom.before(node,parent);
        dom.append(parent,node);
    },
   
    remove(node){
        node.parentNode.removeChild(node);
        return node;    
    },

    empty(node){
        const arr=[];
        let x=node.firstChild;
        while(x){
            arr.push(dom.remove(x));
            x=node.firstChild;
        }
        return arr;
    },

    attr(node,name,value){
        if(arguments.length===3){
            node.setAttribute(name,value)
        }else if(arguments.length===2){
            return node.getAttribute(name)
        }
    },
    text(node,string){
        console.log(arguments instanceof Array);
        if(arguments.length===2){
            if('innerText' in node){
                node.innerText =string;
            }else{
                node.textContent = string;
            }
        }else if(arguments.length===1){
            return node.textContent;
        }
    },
    html(node,string){
        if(arguments.length===2){
            node.innerHTML = string;
        }else if(arguments.length===1){
            return node.innerHTML
        }
    },
    // style(node,object){
    //     for(let key in object){
    //         node.style[key] =object[key];
    //     }
    // },
    style(node,name,value){
        if(arguments.length===3){
            //style(node,'color','red')
            node.style[name]=value;
        }else if(arguments.length===2){
            if(typeof name==='string'){
                //style(node,"color")
                return node.style[name];
            }else if(name instanceof Object){
                //style(node,{color:'red'})
                for(let key in name ){
                    node.style[key]=name[key];
                }
            }
        }
    },
    //style:function style(){} =>style(){}
    class:{
        add(node,className){
            node.classList.add(className);
        },
        remove(node,className){
            node.classList.remove(className);
        },
        contains(node,className){
            return node.classList.contains(className);
        }
    },
    //addEventListener

    on(node,eventName,fn){
        node.addEventListener(eventName,fn);
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn);
    },

    //查
    find(selector){
        return document.querySelectorAll(selector)
    },

    find(selector,scope){
        return (scope||document).querySelectorAll(selector);
    },

    findParent(node){
        return node.parentNode;
    },
    findChild(node){
        return node.children;
    },
    findSiblings(node){
        console.log(node.parentNode.children);
      return Array.from(node.parentNode.children).filter(x=>x!=node);
    },
    next(node){
        let x=node.nextSibling;
        while(x&&x.nodeType===3){
            x=x.nextSibling;
        }
        return x;
    },
    previous(node){
        let x=node.previousSibling;
        while(x&&x.nodeType===3){
            x=x.previousSibling;
        }
        return x;
    },
    
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i]);
        }
    },

    index(node){
        dom.style(node,'color','blue');
        dom.style(node.parentNode,'border','1px solid black');
        const list = dom.findChild(node.parentNode);
        //console.log(list[1]===t2);
        let i=0;
        for(i;i<list.length;i++){
            if(list[i]===node){
                return i;
            }       
        }
    }
    




}