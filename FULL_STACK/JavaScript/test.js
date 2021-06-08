var array = [1,3,34,5,6,7,7,9,8];
function reverse(arr){
    var temp=0;
    var j=arr.length;
    var len =arr.length;
    if(arr.length>0)
    {
        if(arr.length%2==0)
            {
            for(i=0;i<=(len/2);i++)
                {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                j--;
                }
            
            }
        else
            {
            for(i=0;i<=(len/2);i++)
                {
                temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
                j--;
                }
            }        
    return arr;
    }
}
console.log("Reverse Array is:");
console.log(reverse(array));




