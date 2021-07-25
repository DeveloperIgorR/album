function multiply(a,b){
    let result = 1
    for(let i = 0; i<b; i++){
        result*=a
    }
    return result
}

////////////

let arr = [1,2,3,4,5,6]
let numbArr = arr.map(i => i = {number:i})
console.log(numbArr)

////////////

let arr1 = [1,2,3,4,5,6]
let numbArr1 = arr1.map(i => i*2)
console.log(numbArr1)

/////////////

let arr2 = [1,2,3,4,5,6]
let numbArr2 = arr2.map(String)
console.log(numbArr2)

/////////////

let arr3 = [1,2,3,4,5,6]
let numbArr3 = arr3.map(i =>Math.pow(i,2))
console.log(numbArr3)

//////////////
 
let arr4 = [1,2,3,4,5,6]
let numbArr4 = arr4.filter(i =>{
    if(i>4){
        return i
    }else return false
})
console.log(numbArr4)
 
//////////////

let arr5 = [{name:'vasya'},{name:'petya'},{name:'vasya 1'},{name:'petya 1'}]
let numbArr5 = arr5.filter(i => {    
    if(i.name =='vasya'){
        return i
    }else return false
})
console.log(numbArr5)

///////////////

let arr6 = [1,2,3,4,5,6]
let numbArr6 = arr6.filter(i =>{
    if(i % 2 == 0){
        return i   
    }else return false    
})
let strArr = numbArr6.map(String)
console.log(strArr)

/////////////////

let arr7 = [1,2,3,4,5,6,7,8,9,10]
let sumArr = arr7.reduce((sum,item)=>sum+item,0)
console.log(sumArr)

/////////////////

let arrDirectly = [1,2,3,4,5,6,7]
Array.prototype.onReverse  = function (callback){
   let resArr = []
   const thisArr = this
   for(let i =thisArr.length; i>=0; i--){
      resArr.push(callback(thisArr[i],i,thisArr))
   }
   return resArr
}
arrDirectly.onReverse(el=> el)

///////////////////

function exactCentury(d){
    if(d % 100 == 0){
        return d/100 +1
    }else return Math.ceil(d/100)
}
exactCentury(1930)

///////////////////

function square (a,h){
    return (a*h)/2
}
square (5,7)

/////////////////////

Array.prototype.compare = function( compare){
    let result = []
    const thisArr = this
    
    for(let i = 0; i<thisArr.length; i++){
        if(thisArr[i] >thisArr[i+1])return 1
        result.push( compare(thisArr[i],i,thisArr))
         if(thisArr[i] == thisArr[i+1]) return 0
        result.push( compare(thisArr[i],i,thisArr))
        if(thisArr[i] < thisArr[i+1]) return -1
        result.push( compare(thisArr[i],i,thisArr))
    }
    return result
}
