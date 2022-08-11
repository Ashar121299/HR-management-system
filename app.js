// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
let body=document.getElementsByTagName('body');
var id =999;

const Employees=[];
function Employee(EmployeeID,FullName,Department,Level,Image,Salary){
    this.EmployeeID=EmployeeID;
    this.FullName=FullName;
    this.Department=Department;
    this.Level=Level;
    this.Image=Image; 
    this.Salary=Salary;
    
    this.uniqueID=function(counter){
        this.EmployeeID=counter+1;
        ++id;
    };
    this.generateSalary=function(max,min) {
        let salary=Math.floor(Math.random()*(max-min)+min);
        let netSalary=Math.floor(salary-(salary*.75));
        this.Salary=netSalary;
        
        };
    
    
    Employees.push(this);
    
    
   
}







   
const e1=new Employee(0,"Gazi Samer","Administration","Senior","./assest/Ghazi.jpg",0)

const e2=new Employee(0,"Lana Ali","Finance","Senior","./assest/Lana.jpg",0)
  
const e3=new Employee (0,"Tamara Ayoub","Marketing","Senior","./assest/Tamara.jpg",0)
    
const e4=new Employee(0,"Safi Walid","Administration","Mid-Senior","./assest/Safi.jpg",0)
    
const e5=new Employee(0,"Omar Zaid","Development","Senior","./assest/Omar.jpg",0)
   
const e6=new Employee (0,"Rana Saleh","Development","Junior","./assest/Rana.jpg",0)
   
const e7=new Employee(0,"Hadi Ahmad","Finance","Mid-Senior","./assest/Hadi.jpg",0)







 
Employee.prototype.render=function(){
    const divE1=document.getElementsByClassName('div1');
    
    
    const imgE=document.createElement('img');
    imgE.src=this.Image;
    imgE.alt=this.FullName;
    divE1[0].appendChild(imgE);
    const pE1=document.createElement('p');
    const pE2=document.createElement('p');
    const pE3=document.createElement('p');
    const pE4=document.createElement('p');
    const pE5=document.createElement('p');




    pE1.textContent="  Employee Name: "+ this.FullName  ;
    pE2.textContent="  Department: "+ this.Department;
    pE3.textContent='  Employee Level: '+this.Level ;
    pE4.textContent='  Employee salary: '+this.Salary;
    


    
    divE1[0].appendChild(pE1);
    divE1[0].appendChild(pE2);
    divE1[0].appendChild(pE3);
    divE1[0].appendChild(pE4);
    
}

function printInfo (){
for(let i=0;i<Employees.length;i++){
    Employees[i].uniqueID(id);
    if(Employees[i].Level=="Senior"){
        Employees[i].generateSalary(2000,1500);
    }
    else if(Employees[i].Level=="Mid-Senior"){
        Employees[i].generateSalary(1500,1000);
        
    }
    else {
        Employees[i].generateSalary(1000,500);

    }
    
    Employees[i].render();
    
}

}
printInfo();



