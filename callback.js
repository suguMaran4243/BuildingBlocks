function add(num1,num2,done)
{
    sum=num1+num2;
   done(sum)

}
function printAdd()
{
    add(10,20,done);
    
}
function done(num)
{
    console.log(`Addition is done ${num} `)
}
printAdd()


const promise1=new Promise((resolve,reject)=>
{
    resolve('First Execution')    
    
}).then((result)=>
{console.log(result);
   return new Promise((resolve,reject)=>
{
    resolve('Second Execution')
}) }).then((res)=>console.log(res))



// let firstPromise = new Promise((resolve, reject) => { 
//     resolve("Hello, "); 
// }) 
//     .then((result) => { 
//         console.log(result); 
//         return new Promise((resolve, reject) => { 
//             resolve(result + "GeeksforGeeks!"); 
//         }) 
//             .then((result) => { 
//                 console.log(result); 
//             }); 
//     });