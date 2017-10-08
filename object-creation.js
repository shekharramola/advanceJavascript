
//factory pattern
   var peopleFactory = function(name, age, city) {
   var temp= {};
   temp.name= name;
   temp.age= age;
   temp.city= city;
 temp.printInfo= function(){

 alert(this.name+','+ this.age+','+ this.city);

}
return temp;
}
// var person1= peopleFactory('roy',12,'bangalore');
// person1.printInfo();


function factory () {
	var person1= peopleFactory('roy',12,'bangalore');
person1.printInfo(); 
}



//Constructor pattern

 var peopleConst = function(name, age, city) {
   this.name= name;
   this.age= age;
   this.city= city;
 this.printInfo= function(){

 alert(this.name+','+ this.age+','+ this.city);

}
}

function byConstructor () {
	var person2= new peopleConst('shekhar', 23, 'bangalore');
	person2.printInfo();

}

//var person1= new peopleConst('shekhar', 23, 'bangalore');
//person1.printInfo;




//prototype

var peopleProto= function(){

}
peopleProto.age= 0;
peopleProto.name="no name";
peopleProto.city="no city";
peopleProto.prototype.printInfo= function  () {
	// body... 
	alert(this.name+ "," +this.age+ "," +this.city);
}

// var person3=new peopleProto();
// person3.name='john';
// person3.age=23;
// person3.city='CA';
// person3.print();

function byPrototype() {
var person3= new peopleProto();
person3.name='john';
person3.age=23;
person3.city='CA';
person3.printInfo();
}




//dynamic prototype

var peopleDynamicProto= function (name, age, city) {
	this.name= name;
	this.city= city;
	this.age= age;
	if(typeof this.printPerson!=='function'){
		peopleDynamicProto.prototype.printPerson = function(){
			alert(this.name+ "," +this.city+ "," +this.age); 
		};
	}
}

function dynamicPrototype () {
	
	var person4= new peopleDynamicProto('fourth man', 'delhi', 25);
	person4.printPerson();
}















