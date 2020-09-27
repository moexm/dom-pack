window.dom = {
    find(selector){
       return document.querySelectorAll(selector);
    },
    style(node,name,value){
        if(arguments.length===3){
            node.style[name]=value;
        }else{arguments.length===2}{
            if('string'===typeof name){
                return node.style.name;
            }else if(name instanceof Object){
                for(let key in name){
                    node.style[key]=name[key];
                }
            }
        }
    },
    each(nodeList,fn){
        //fn:(n)=> console.log(n)
        for(let i=0;i<nodeList.length;i++){
            fn.call(null,nodeList[i]);
        }
        
    }
}

