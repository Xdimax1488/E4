const str1 = 'str';
const obj1 = {
    a:1,
    b:2,
}

function checkValue(string,obj){
    let result = string in obj
    return result
}

console.log(checkValue(str1,obj1))