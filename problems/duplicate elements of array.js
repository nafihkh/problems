// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
let a = [1,2,4,5,6,6];

for(let i = 0;i<a.length;i++)
{
    let count = 0;
    for(let j =0;j<i;j++)
    {
        if(a[i]==a[j])
        {
            count++;
            break;
        }
    }
    if(count==1)
    {
        continue;
    }
    console.log(a[i])
}
//
