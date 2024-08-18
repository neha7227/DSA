/*
Problem Description
Given an unsorted array, sort it in wave form. That is, reorder it such that nums[0] <= nums[1] >= nums[2] <= nums[3]....

Input format
There are 2 lines of input.

First line contains an integer N ,the number of input integers in the array.

Second line contains N space separated integers.

Output format
N space separated elements which satisfy the given condition.

Sample Input 1
6

1 5 1 1 6 4

Sample Output 1
1 4 1 5 1 6

Explanation 1
nums[0] <= nums[1] >= nums[2] <= nums[3] >= nums[4] <= nums[5].

Constraints
1 <= N <= 100000

-10^9 <= A[i] <= 10^9

*/

function wiggleSort(arr, n) {
    //odds at maxima, even at minima
    //1. run loop from i=1 to n-1 ; i=i+2 -- odd position loop
    for( let i=1; i<n; i=i+2){
        //1.1 compare odds with prevElem, swap if smaller
        if(i>0 && arr[i]<arr[i-1]){
            [arr[i], arr[i-1]]=[arr[i-1], arr[i]]
        }
        //1.2 compare odds with nextElem, swap if smaller
        if(i<n-1 && arr[i]<arr[i+1]){
            [arr[i], arr[i+1]]=[arr[i+1], arr[i]]
        }
    }
    return arr
    
}

let arr=[1, 5, 1, 1 ,6 ,4]
console.log(wiggleSort(arr,arr.length))