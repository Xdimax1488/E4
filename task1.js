const obj1 ={
    a:1,
    b:2
}

const obj2=Object.create(obj1)

obj2.c=3

function searchOwnValue(obj){
    for(let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key,obj[key])
        }
    }
    
}

searchOwnValue(obj2)