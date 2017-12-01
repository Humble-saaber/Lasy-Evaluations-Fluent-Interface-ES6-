class Enumerable {
  constructor(collection,operations){
    this.collection = collection;
    this.operations = operations || [];
  }
  select(fn){
    const newOps = this.operations.slice()
    const newCal = this.collection.slice();
    newOps.push(coll => coll.map(fn));
    return new Enumerable(newCal,newOps);
  }
  where(fn){
    const newOps = this.operations.slice()
    const newCal = this.collection.slice();
    newOps.push(coll => coll.filter(fn));
    return new Enumerable(newCal,newOps);
  }
  orderBy(fn,direction = "asc"){
    if(direction==='asc'){
    const newOps = this.operations.slice();
    const newCal = this.collection.slice();
    newOps.push(coll => {
    coll.slice().sort((a,b)=>{
      if(fn(a)>fn(b)){
        return 1;
      }else if(fn(a)<fn(b)){
        return -1;
      }else{
        return 0;
      }
    });
    });
    return new Enumerable(newCal,newOps);
    }else if(direction === "desc"){
    const newOps = this.operations.slice();
    const newCal = this.collection.slice();  
    newOps.push(coll => {
      coll.slice().sort((a,b)=>{
      if(fn(b)>fn(a)){
        return 1;
      }else if(fn(b)<fn(a)){
        return -1;
      }else{
        return 0;
      }
    });
          });
    return new Enumerable(newCal, newOps);
    }
  }
  toArray(){
    const newOps = this.operations.slice();
    const returnArr = this.collection.slice();
    return newOps.reduce(function(acc,currentElem){
      return currentElem(acc);
    },returnArr);
  }
}

export default Enumerable;
