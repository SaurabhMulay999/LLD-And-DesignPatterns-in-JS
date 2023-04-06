//object Mutability
function person(name,age){
  this.name=name;
  this.age=age;
  
}
person.prototype={
  getName: function(){
    return this.name;
  },

  getAge: function(){
    return this.Age;
    
  }
}
//class instantiation
var Saurabh=new person('saurabh',12);

person.prototype.Greeting=function(){
  return 'Hiii'+ this.getName();
}

Saurabh.display=function(){
  alert(this.Greeting());
}

Saurabh.display();
