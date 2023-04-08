//Describing the Interface with comments

/** 
interface Composite{
function add(child);
function remove(child);
function getChild(index);
}
interface FormItem{
function save();
}
*/

let compositeForm = function(id,method,action){
  //Implementation of composite and formItem  
}
compositeForm.prototype.add= function(child){
  console.log(child)
}
compositeForm.prototype.remove= function(child){
  console.log(child)
}
compositeForm.prototype.getChild= function(index){
  console.log("GetChild")
}
compositeForm.prototype.save= ()=>{
  console.log("save");
}

//This does not emulate the functionality very well.There is not any checking whether compositeForm have implemented 
//the interfaces or not, No error thrown. 

//EMulating Interfaces with Attribute Checking

/** 
interface Composite{
function add(child);
function remove(child);
function getChild(index);
}

interface FormItem{
function save();
}
*/


var compositeForm_1=function(id,method,action){
  this.implementsInterfaces=['composite','FormItem'];
}

function addForm(formInstance){
  if(!implements(formInstance,'composite','FormItem')){
    throw new Error("Object does not have implemented the required interfaces");
  }
}

function implements(object){
  //looping through all requirement after 1st one
  for(var i=1;i<arguments.length;i++){
    var interfaceName=arguments[i];
    var interfaceFound=false;

    for(var j=0;j<object.implementsInterfaces.length;j++){
      if(object.implementsInterfaces[j]==interfaceName){
        interfaceFound=true;
        break;
      }
      
    }
    if(!interfaceFound){
      return false;
    }
  }
  return true;
}



//duck Typing:
var composite=new Interface('composite',['add','remove','getCHild']);
var formItem= new Interface('formItem',['save']);

var compositeFORM=function(id,method,actions){
  console.log('Construct');
}

function addForm(formInstance){
  ensureImplements(formInstance,composite,formItem);
  
}

//The Interface class

let Interface=function(name,methods){
  if(arguments.length!=2){
    throw new Error('Interface constructor called with  '+arguments.length+' '+'arguments, but expected 2 only');
  }
  //this are acting like a functions properties 
  let Name=name;
  let Methods=[];
  for(var i=0;i<methods.length;i++){
    if(typeof methods[i]!=='string'){
      throw new Error('Pass the Interface name as String');
    }
    Methods.push(methods[i]);
    
  };

Interface.ensureImplements=function(Obj){
  if(arguments.lenth<2){
    throw new Error('function Interface ensureImplements called with  '+arguments.length+ ' '+ 'expect atleast 2');
    
  }

  for(var j=0;j<Interface.Methods.length;j++){
    let Meth=Interface.Methods[j];
    //methods are stored inside Methods
    if(!Obj[Meth] || typeof Obj[method] !=='function'){
      throw new Error('Function does not implements '+ Interface.Name+' '+' Method->' +Meth +' '+'Not found');
    }
    
  }
}  
}
