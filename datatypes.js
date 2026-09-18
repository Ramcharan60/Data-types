// -----------------------------Variablses & Data types-------------------------------

let name="Ramcharan"
console.log(typeof(name))

let age=23
console.log(typeof(age))

let a=true
console.log(typeof(a))


let b;
console.log(typeof(b))


let c= null;
console.log(c,typeof(c))

let _name = "Sai Teja"          
let _age = 23               
let isStudent = true      
let address;               
let _salary = null

console.log(_name)
console.log(_age)
console.log(isStudent)
console.log(address)
console.log(_salary)

let qualification="Btech"
console.log(typeof(qualification),",",qualification)


let salary=15000
console.log(typeof(salary))

let d="100"
let e=100
console.log(typeof(d),",",typeof(e))


let name_="ram"
let age_=23
let _qualification="Btech"
let status="employee"

console.log(name_,typeof(name_),",",age_,typeof(age_),",",_qualification,typeof(_qualification),",",status,typeof(status))


// ------------------------------Arrays----------------------


let fruits=["apple","orange","pineapple","banana","guava"]
console.log(fruits)


let arr=[1,2,3,4,5]
console.log(arr[0])


let arr1=["red","green","blue","white","orange","grey"]
console.log(arr1[2])


let brands=["redmi","oppo","vivo","realme","iqoo"]
console.log(brands[brands.length-1])


let arr2=[1,2,3,4,5,6,7]
console.log(arr2[arr2.length-2])


let items=["chilli_chicken","biryani","gulab jamun","kova","sambar_rice","curd rice","laddu"]
console.log(items[0],",",items[2],",",items[6])


let cricketers=["Shubham Gill","Siraj","KL Rahul","Virat Kohli","Hitman"]
console.log(cricketers[3])


let toys=["teddy bear","toy car","toy block","rubiks cube","baby doll"]
console.log(toys[toys.length-1])

let arr3=[1,2,3,4,5,6,7,8,9,10]
console.log(arr3[0],arr3[arr3.length-1],arr3[arr3.length-2])

let all=["pineapple","toy car","Siraj","dhoni","rubiks cube","guava"]
console.log(all)
console.log(all[2])
console.log(all[4])
console.log(all[all.length-1])


// ----------------------------------------Objects----------------------------------------

let obj={
    name:"Shiva ramakrishna",
    age:23,
    city:"Hyderabad"
}
console.log(obj)


let obj1={
    name:"Shiva ramakrishna",
    qualification:"Btech",
    company:"STACKLY"
}
console.log(obj1.company)


let obj3={
    fruits:["apple","orange","pineapple","banana","guava"]
}
console.log(obj3.fruits[1])


let obj4={
    toys:["teddy bear","toy car","toy block","rubiks cube","baby doll"]
}
console.log(obj4.toys[toys.length-1])


let obj5={
    cricketer:"Shubham Gill",
    team:"gujarat titans",
}
console.log(obj5.cricketer)

let obj6={
    fruits:"banana",
    toys:"car",
    cricketer:"virat"
}
console.log(obj6.fruits,",",obj6.toys,",",obj6.cricketer)


let obj7={
    one:["shiva ram","JavaScript"],
    two:["thanush","MERN"]
}
console.log(obj7.one[0],obj7.two[1])


let obj8={
    mobiles:["redmi","oppo","vivo","realme","iqoo"]
}
console.log(obj8.mobiles[2])

let obj9={
    employeeName:"Shiva Ramakrishna",
    skills:["HTML","CSS","JavaScript","sql","MongoDb","python"],
    experience:"2 years"
}
console.log(obj9.skills[1])


let obj10={
    name:"Shiva Ramakrishna",
    skills:["HTML","CSS","JavaScript","React.js","sql","MongoDb","python"],
    age:23,
    location:"Haliya"
}
console.log(obj10.name,obj10.age,obj10.location)



// --------------------------------------Arthematic operator-------------------

let f=10
let g=20
console.log(f+g)
console.log(f-g)
console.log(f*g)
console.log(f/g)


let i=40
let j=60
console.log(i%j)


let k=2**5
console.log(k)


let l=12
let m=9
console.log(l+m)
console.log(l-m)
console.log(l*m)
console.log(l/m)
console.log(l%m)
console.log(l**m)


let n=10
n=n+5
console.log(n)

// --------------------------------------------------Increment & Decrement--------------------------

let p=10
++p
console.log(p)


let q=10
q++
console.log(q)

let r=20
--r
console.log(r)


let s=20
s--
console.log(s)


let t=5
console.log(++t)
console.log(t)

let u=6
console.log(u++)
console.log(u)



// ----------------------------------------------Assignment Operator------------------------------------------------

let v=10
let w=20
console.log(v+=w)


let ab=50
let ba=20
console.log(ab-=ba)


let cd=10
let dc=5
console.log(cd*=dc)


let de=100
let ed=10
console.log(de/=ed)


let ef=25
let fe=4
console.log(ef%=fe)



// ----------------------------------------------Comparison ,Logical & Ternary-------------------------

let y=10
let z=20
console.log(y<z) 
console.log(y>z) 
console.log(y<=z) 
console.log(y>=z) 

let gh=10
let hg="10"
console.log(gh==hg)
console.log(gh===hg)


let ij=10
let ji=20
console.log(ij>5 && ji>15)
console.log(ij>15 || ji>15)
console.log(!ij > ji)


let Age=16
 let res= Age>18? "Eligible":"Not Eligible"
 console.log(res)


let marks=36
let result= marks>=35? "Pass":"Fail"
console.log(result)
