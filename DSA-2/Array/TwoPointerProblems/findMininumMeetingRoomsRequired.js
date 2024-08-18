/*
Problem Description
Given a list of meeting time intervals, you have to find the minimum number of rooms required to organize all the meetings.

Input format
First line contains an integer N, indicating the number of meetings.

Next N lines contain two space separated integers S and E, indicating the Starting and Ending time of a meeting, respectively.

Output format
Print the minimum number of rooms required.

Constraints
N <= 100000

0 <= S,E <= 1000000000 (10^9)

Si < Ei

Sample Input 1
3

0 20

5 10

10 15

Sample Output 1
2

Explanation 1
One room can host the 1st meeting (0-20) and the other room can host both the 2nd meeting (5-10) and 3rd meeting (10-15), one after the other.

So, only 2 rooms are required if total for the 3 meetings.

*/
function meetingRooms(meetings) {
  /*
  let n = meetings.length;
  let rooms = 1;
  let maxRooms = 1;
  let i = 1;
  let j = 0;
  let result = [];
  result.push(meetings[0]);
  while (i < n && j < n) {
    //   for (let i = 1; i < n; i++) {
    let prev = result[result.length - 1];
    let curr = meetings[i];
    if (prev[1] >= curr[0]) {
      rooms++;
      i++;
    } else if (prev[1] < curr[0]) {
      rooms--;
      j++;
    }
    // maxRooms = Math.max(maxRooms, rooms);
    if (rooms > maxRooms) {
      maxRooms = rooms;
    }
    result.push(curr);
    //   }
  }
  return maxRooms;
  */

  /*
  //Approach 2: Cumulative sum
  //Time Complexity: O(n*log(n))
  //Auxiliary Space: O(n)
  let n = meetings.length;
  //1. create vector to store startTime, endTime, +1(Meeting started), -1(meeting Ended) ==> [[startTime,+1], [endTime, -1]]
  let meetingDetails = [];
  //2. Run loop from i=0 to meetings.length-1, updating meetingDetails = [[startTime,+1], [endTime, -1]] all pairs in meetings
  for (let i = 0; i < n; i++) {
    meetingDetails.push([meetings[i][0], 1]); // startTime
    meetingDetails.push([meetings[i][1], -1]); //endTime
    // meetingDetails.push([meetings[i][1]+1, -1]); // In case if condition given in question that if startTime==endTime of next meeting, then cannot have meeting in same room.
  }
  // 3. sort meetingDetails wrt startTime i.e 0th sub-index of each index in array of array(2D array)
  meetingDetails.sort((a, b) => a[0] - b[0]); // sort acc to start time
  console.log(meetingDetails, "meetingDetails");
  //4. define meetingInProgress, minRooms to 0;
  let meetingInProgress = 0;
  let minRooms = 0;
  //5. run loop from i=0 to meetingDetails.length-1
  for (let i = 0; i < meetingDetails.length; i++) {
    //i. take cummulative sum of meetingDetails's 1-th sub-index of each index in array of array(2D array)
    // cummulative sum denotes meetingsInProgress eg. +1(started) +1(started)+ (-1)(ended) + (-1)(ended)= 0 (no meetingInProgress) but rooms required were 2(max of meetingInProgress)
    meetingInProgress += meetingDetails[i][1];
    //ii. update minRooms with maximum of meetingInProgress value.
    minRooms = Math.max(minRooms, meetingInProgress);
  }
  //   console.log(meetingDetails, "meetingDetails");
  //   console.log(meetingInProgress, "meetingInProgress");
  //   console.log(meetings, "meetings");
  //6. return minRooms
  return minRooms;

  */
  let n = meetings.length;
  let meetingDetails = []; //vector = [startime,+1],[endTime,-1]
  for (let i = 0; i < n; i++) {
    meetingDetails.push([meetings[i][0], 1]);
    meetingDetails.push([meetings[i][1], -1]);
  }
  // console.log(meetingDetails, "meetingDetails");
  meetingDetails.sort((a, b) => a[0] - b[0]); // based on start time
  let meetingInProgress = 0;
  let minRooms = 0;
  for (let i = 0; i < meetingDetails.length; i++) {
    meetingInProgress += meetingDetails[i][1];
    minRooms = Math.max(minRooms, meetingInProgress);
  }

  return minRooms;
}

// let meetings = [
//   [0, 20],
//   [5, 10],
//   [10, 15],
// ];
let meetings = [
  [0, 20],
  [5, 10],
  [10, 15],
];
console.log(meetingRooms(meetings));
