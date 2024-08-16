const selectionSort=(arr,n)=>{
//1.loop from i= 0 to n-2
for(let i=0; i<=n-2; i++){
  //1.1 initialize minIndex = i  
    let minIndex = i;
 //1.2 inner loop from j=i to n-1 to find minIndex
    for(let j=i; j<=n-1; j++){
    //1.2.1 find minIndex in inner loop
        if(arr[j]<arr[minIndex]){
            minIndex=j;
        }
    }
// 1.3 swap i-th element with minIndex element
      let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i]=temp  
}

return arr;
   
}

let arr = [9,13,52,25,76,2,83]
console.log(selectionSort(arr, arr.length))
