class Item{
    constructor(item) {
        this.info={};
        this.info.name=item.name;
        this.info.age=item.age;
        this.info.status=item.status;
        this.info.sex=item.sex;
        ++Item.key;
        this.key = Item.key;
    }
 
}
Item.key=0;
export default class Store {
    constructor() {
        this.allStore = [];
        if(Store.rawData && Store.rawData.length!==0){
            Store.rawData.forEach(
                item=>{
                  //debugger;
                    this.allStore.push(new Item(item));
                }
            )
        }
        
        this.store=this.allStore;
    }
    removeItem(key){
        //console.log("store"+this.store)
        let newStore=this.store.filter(item=>{
          //console.log('item.key'+item.key);
          //console.log('key'+key);
          
            return item.key!==key;
        })
        this.store=newStore;
        return this;
    }
}
 
Store.rawData= [{ sex: '男', age: 18, name: '曹操', status: '主公'},
    { sex: '女', age: 19, name: '郭嘉', status: '谋士'},
    { sex: '女', age: 23, name: '张辽', status: '将军'},
    { sex: '女', age: 18, name: '张颌', status: '将军'},
    { sex: '男', age: 22, name: '荀彧', status: '谋士'},
    { sex: '男', age: 41, name: '司马懿', status: '谋士'},
    { sex: '男', age: 12, name: '典韦', status: '将军'},
    { sex: '男', age: 33, name: '夏侯惇', status: '将军'},
    { sex: '男', age: 50, name: '夏侯渊', status: '将军'},
    { sex: '男', age: 12, name: '邓艾', status: '将军'},
    { sex: '男', age: 22, name: '于禁', status: '将军'}]
