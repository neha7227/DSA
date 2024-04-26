/*
Problem Description
Given an array *nums*, find all unique triplets (group of 3 numbers) such that their sum is 0. There should be no duplicates i.e. no triplet should be repeated.

Input format
The first line consists of an integer, N, denoting the size of the array.

The second line consists of N space separated integers which denote the elements of the array, nums.

Output format
You must return all such unique triplets which sum to 0 from the given array.

Constraints
0 <= N <= 10^3

0 <= | nums[i] | <= 10^6, where nums[i] represents the value of each element in the array

Sample Input 1
6

-1 0 1 2 -1 -4

Sample Output 1
-1 0 1

-1 -1 2

Explanation 1
These 2 triplets sum to 0 and there are no other such unique combinations. Note that the combination [-1 , 0, 1] can be created twice but is not repeated since we are only displaying unique combinations.

Sample Input 2
7

-3 0 1 2 -1 1 -2

Sample Output 2
-3 1 2

-2 0 2

-2 1 1

-1 0 1

Explanation 2
These are the 4 triplets that sum to 0 and there are no other such unique combinations.

*/
function threeSum(arr) {
  let n = arr.length;
  /*
    let st = new Set();
    let ans = [];
    for(let i=0; i<n-2; i++){
        for(let j=i+1; j<n-1; j++){
            for(let k=j+1;k<n; k++ ){
                if(nums[i]+nums[j]+nums[k]===0){
                    let temp = [nums[i],nums[j],nums[k]]
                    temp.sort((a,b)=>b-a);
                    st.add(temp);
                // }
                // ans.push([nums[i],nums[j],nums[k]])
                // console.log(nums[i],nums[j],nums[k])
                }
            }
        }
    }
    return st;
    */

  /* Approach 2: using set and third pair
    let st = new Set();
    let ans = [];
    for (let i = 0; i < n; i++) {
        let hashset = new Set();
        for (let j = i + 1; j < n; j++) {
            //Calculate the 3rd element:
            let third = -(arr[i] + arr[j]);

            //Find the element in the set:
            if (hashset.has(third)) {
                let temp = [arr[i], arr[j], third];
                temp.sort((a, b) => a - b);
                ans.push(temp);
                //  console.log(ans, "ans")
            }
            hashset.add(arr[j]);
            //  console.log(ans, "ans")
        }
    }
//    console.log(ans, "ans")

    //store the set in the answer:
    st  = new Set(ans.map(JSON.stringify));
    // console.log(st, "st")
    ans = Array.from(st).map(JSON.parse);
    // console.log(ans, "ans")
    return ans;
    */

  // Approach 3: Two pointer:

  let ans = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < n; i++) {
    // remove duplicates:
    if (i !== 0 && arr[i] === arr[i - 1]) continue;

    // moving 2 pointers:
    let j = i + 1;
    let k = n - 1;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let temp = [arr[i], arr[j], arr[k]];
        ans.push(temp);
        j++;
        k--;
        // skip the duplicates:
        while (j < k && arr[j] === arr[j - 1]) j++;
        while (j < k && arr[k] === arr[k + 1]) k--;
      }
    }
  }
  return ans;
  /*
Time Complexity: O(NlogN)+O(N2), where N = size of the array.
Reason: The pointer i, is running for approximately N times. And both the pointers j and k combined can run for approximately N times including the operation of skipping duplicates. So the total time complexity will be O(N2). 
*/
}

let arr = [-3, 0, 1, 2, -1, 1, -2];
console.log(threeSum(arr));
