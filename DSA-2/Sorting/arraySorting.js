

const swap =(arr,i,minIndex)=>{

let temp = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i]=temp 
}
// Selection Sorting
/*
1. Selection of minimum swap to front
2. TC: O(N^2)

*/
const selectionSort=(arr,n)=>{ // Selection of minimum swap to front(left)
//1.loop from i= 0 to n-2
for(let i=0; i<=n-2; i++){ // n-2 steps needed to sort the array as last element will be already sorted till loop completes
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
    //   let temp = arr[minIndex];
    //   arr[minIndex] = arr[i];
    //   arr[i]=temp 
    swap(arr,i,minIndex) // pushes minimum to start
}

return arr;
   
}

//Bubble sorting
/*
1. Pushes max to last by adjacent swapping
step1 0-n-1(i) ==> per iteration -> j runs from j=0 to i-1 (here i=0 to n-1 => so j=0 to n-2 (last i=n-1))
step2 0->n-2(i)
step3 0-> n-3(i)
.
.
step-nth 0->1
no. of iteration => outer loop i=n-1 to i>=1
inner loop j=0 to j<=i
TC = O(N^2) Average case
=O(N) best case optimized solution
*/

const bubbleSort=(arr,n)=>{
    //1. loop from i=n-1 to 0
    for(let i=n-1; i>=0; i--){
        let didSwap=0;
        // loop from j=i to j=i-1 to 0
        for(let j=0 ;j<=i-1; j++){ // j<=i-1 as we need last element(j+1) to compare with j
            if(arr[j]>arr[j+1]){ 
                swap(arr,j,j+1) // pushes max to end
                didSwap=1;
            }
            
        }

        if(didSwap===0){ // Opitimization to break out of swapping loop if array is laready sorted. reduces TC to O(N)
            break;
        }
        console.log("runs")
    }
   
    //1.1 loop from j=i to i-1
    return arr
}

//Insertion sorting
/*
1. takes an element and places it in its currect position
- got to left and swap till it can be swapped (and other elements shifts to right)
2. TC: O(N^2) worst and average case
TC: O(N) best case scenario (when all are sorted, inner loop doesnt run without any modifications/optimization)

*/

const InsertionSort =(arr,n)=>{
for(let i=0; i<=n-1; i++){
    let j=i;
    while(j>0 && arr[j-1]>arr[j]){ //element at left of jth is greater, then swap and move left(j--) until j=0
        swap(arr,j,j-1)
        j--;
    }
}
return arr;
}

let arr = [9,13,52,25,76,2,83]
// let arr = [1,2,3,4,5,6]

// console.log(selectionSort(arr, arr.length))
// console.log(bubbleSort(arr, arr.length))
console.log(InsertionSort(arr, arr.length))


