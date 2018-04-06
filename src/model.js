import {EventEmitter} from './helpers';

class Model extends EventEmitter {
  constructor(items = []) {
    super();
    this.items = items;
        //{
        //  id: blablanumber,
        //  title: '',
        //  completed: false
        //}


  }
  getItem(id){
    return this.items.find(item => item.id == id);
  }
  addItem(item){
    this.items.push(item);
    return item;
  }
  updateItem(id, date){
    const item = this.getItem(id);
    Object.keys(data).forEach(prop => item[prop] = data[prop]);
    return item;
  }
  removeItem(id){
    const index = this.items.findIndex(item => item.id == id);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

}
export default Model;
