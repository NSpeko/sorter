class Sorter {
  constructor() {
    // your implementation
      this.innerArr=[];
      this.comparatorFunc=function (num1,num2){return num1-num2;};
  }

  add(element) {
    // your implementation
      this.innerArr.push(element);
  }

  at(index) {
    // your implementation
      return this.innerArr[index];
  }

  get length() {
    // your implementation
      return this.innerArr.length;
  }

  toArray() {
    // your implementation
      return this.innerArr;
  }

  sort(indices) {
    // your implementation
      let tempArr=[];
      for(let i=0;i<indices.length;i++){
          tempArr.push(this.innerArr[indices[i]]);
      }
      tempArr.sort(this.comparatorFunc);
      indices.sort((num1,num2)=>{return num1-num2;});
      for(let i=0;i<indices.length;i++){
          this.innerArr.splice(indices[i],1,tempArr[i]);
      }
  }

  setComparator(compareFunction) {
    // your implementation
      this.comparatorFunc=compareFunction;
  }
}

module.exports = Sorter;