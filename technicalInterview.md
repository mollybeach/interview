```
Copilot please help me with this code. I am not sure how to solve these problems.
 1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

let twoSum = function(nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            result.push(i);
            result.push(j);
        }
        }
    }
    return result;
    };


 
2. For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise.

 

Example 1:

Flipped Trees Diagram
Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
Output: true
Explanation: We flipped at nodes with values 1, 3, and 5.

let flipEquiv = function(root1, root2) {
    if (root1 === null && root2 === null) {
        return true;
    }
    if (root1 === null || root2 === null) {
        return false;
    }
    if (root1.val !== root2.val) {
        return false;
    }
    return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) || (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));
}

Hackerrank Home

Plus Minus

Problem
Submissions
Leaderboard
Discussions
Editorial

PrepareInterview Preparation Kits1 Week Preparation KitDay 1Plus Minus
Exit Full Screen View
Problem	Submissions	Leaderboard	Discussions	Editorial
Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Constraints



Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
Explanation

There are  positive numbers,  negative numbers, and  zero in the array.
The proportions of occurrence are positive: , negative:  and zeros: .

Language
JavaScript (Node.js)

More
123456789101112131415161718
}


function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive++;
        } else if (arr[i] < 0) {
            negative++;
        } else {
            zero++;
        }
    }
    console.log(positive  arr.length);
    console.log(negative  arr.length);
    console.log(zero  arr.length);
}
explaination of the problem plusMinus:
    question is to find the ratio of positive, 
    negative and zero values in an array. and print the result to the console.
    and in order to do that we need to find the number of positive, negative and zero values in the array and then divide them by the length of the array.
    so in my solution I will use a for loop to iterate through the array and then check if the value is positive, negative or zero and then increment the appropriate counter.
    then I will print the ratio of each counter to the console.



    Opportunities for Strong Developers - Web3 | Blockchain - Fully Remote
Good afternoon Molly,

I see you are involved with blockchain development. I’m reaching out from ChainEd. We are primarily a blockchain education hub for Near Protocol (Layer 1 ecosystem). Near has a lot of projects that we need strong developers for and we are offering no cost Near Certifications to those interested. After certification, there are many projects with a variety of focus including DeFi, Gaming, Regeneration (Regen), Token Communities and Art & Culture (NFT’s). There is opportunity for top paying full time positions, part-time projects of your choice or grants for projects you would like to bring to the ecosystem. Let me know if you are interested in certification andor learning more about Near and the opportunities that exist. I'm including a recent article by Messari for more information.

Thanks,

Stuart Kortie
ChainEd
www.chainedhub.com 941.539.4823 - Cell


const unFilteredRowDataInstitutions = institutionsData.map((row: any) => {
    return {
      id: row.id,
      title: row.name,
      img: row.img,
      productions: row.productions,
      status: row.status,
    };
  });

  1-100

QUESTION


1. Two Sum
Easy
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.


Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Testcases:
50. [2,5,5,11], 10 --> [1,2]




ANSWER

var twoSum = function(nums, target) {
for (i = 0; i < nums.length; i++) {
  for (j = 1; j < nums.length; j++) {
    if(i!= j) {
   if (nums[i]+nums[j]===target) return [i,j]
   }
}
} 
};       
twoSum(  [2,5,5,11], 10);


QUESTION


7. Reverse Integer
Easy:
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
Example 1:
Input: x = 123
Output: 321

Example 2:
Input: x = -123
Output: -321

Example 3:
Input: x = 120
Output: 21
Return: 0000000001111001
Example 4:
Input: x = 0
Output: 0

Constraints: -2 31 <= x <= 2 31 - 1


ANSWER

       
var reverse = function(x) {
  let numToString = parseFloat(x.toString().split('').reverse().join(''))   Math.sign(x);
  let z = Math.pow(2, 31);
  if (numToString < z && numToString > -z){
   return numToString
 } 
 else{
   return 0
   }
};

let input16Bit = 65536;  2^16 Binary Number:10000000000000000
let input16BitNeg = -65536;
let inputFloat16 = 6.5536;
let input31Bit = 2147483648; 2^31 Binary Number:10000000000000000000000000000000
let input32Bit = 2147483647; 2^32 Binary Number:1111111111111111111111111111111
let input64Bit = 18446744073709551616; 2^64 

console.log(reverse(input64Bit))

QUESTION


9. Palindrome Number
Easy 
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

Example 1:
Input: x = 121
Output: true
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Example 4:

Input: x = -101
Output: false
 
Constraints: -231 <= x <= 231 - 1


ANSWER
 
var isPalindrome = function(x) {
    if (x === parseFloat(x.toString().split('').reverse().join(''))) {
      return true 
    }
   else{
     return false
   }   
};
console.log(isPalindrome(12.21));

QUESTION


13. Roman to Integer
Easy
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.
Example 1:

Input: s = "III"
Output: 3
Example 2:

Input: s = "IV"
Output: 4
Example 3:

Input: s = "IX"
Output: 9
Example 4:

Input: s = "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 
Constraints:

1 <= s.length <= 15
s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
It is guaranteed that s is a valid roman numeral in the range [1, 3999]. 



ANSWER
 
var romanToInt = function (s) {
  let symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      result += symbols[s[i + 1]] - symbols[s[i]];
      i++;
    } else {
      result += symbols[s[i]];
    }
  }
   return result;
};
romanToInt('IV');

QUESTION


14. Longest Common Prefix
Easy
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Constraints:
1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.


ANSWER
 
var longestCommonPrefix = function(strs) {
  let prefix = strs[0];
  console.log(strs[1][3]);
   for(i =1; i < strs.length; i++){
     for (j = 0; j < prefix.length; j++) {
       if (strs[i][j] !== prefix[j]) {
         prefix = strs[i].slice(0,j)
       }
     }
    }
   return prefix
};

let arrayOfStrings =  ["flower","flow","flight"];
longestCommonPrefix(arrayOfStrings);

QUESTION


20. Valid Parentheses
Easy
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
An input string is valid if:
Open, brackets must be closed by the same type of brackets., Open brackets must be closed in the correct order.
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([)]"
Output: false

Example 5:
Input: s = "{[]}"
Output: true

Constraints: 1 <= s.length <= 104, s consists of parentheses only '()[]{}'.}


   hasOwnProperty returns a boolean value indicating whether the object on which you are calling it has a property(keys) with the name of the argument.here we are checking for the opening brackets so the keys in the object
    

ANSWER
 

var isValid = function (s) {
  let parenthesesObj = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  const stack = [];
  for (const item of s) {
 checking for opening brackets
    if (parenthesesObj.hasOwnProperty(item)) {
      stack.push(item)
    } else {
      let openBracket = stack.pop();
      ex -> parenthesesObj[{]=}
      if (item !== parenthesesObj[openBracket]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
isValid("([)]");


QUESTION

21. Merge Two Sorted Lists
Easy

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.


Example 1:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:
Input: l1 = [], l2 = []
Output: []
Example 3:
Input: l1 = [], l2 = [0]
Output: [0]
Constraints: The number of nodes in both lists is in the range [0, 50]. -100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.



ANSWER
 

OUR ANSWER DIDNT WORK
var mergeTwoLists = function(l1, l2){
let l3 = [...l1, ...l2];
l3.sort();
return l3
};
mergeTwoLists([1,5,4], [1,3,4] );


FUCKED UP REAL ANSWER 
function ListNode(val) {
      this.val = val;
       this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    let dummyHead = new ListNode(0);
    let currentNode = dummyHead; 

    while(l1 !== null && l2 !== null){

        if(l1.val < l2.val){
            currentNode.next = l1;
            l1 = l1.next
        } else {
            currentNode.next = l2
            l2 = l2.next
        }

        currentNode = currentNode.next
    }

    if(l1 !== null) {
        currentNode.next = l1;
    } else if (l2 !== null) {
        currentNode.next = l2
    }

    return dummyHead.next
}

QUESTION



26. Remove Duplicates from Sorted Array
Easy
Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Clarification:
Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:

 nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

 any modification to nums in your function be known by the caller.
 using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the returned length.
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4]
Explanation: Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It doesn't matter what values are set beyond the returned length.
 
Constraints:

0 <= nums.length <= 3  104
-104 <= nums[i] <= 104
nums is sorted in ascending order.



ANSWER
 
THIS QUESTION IS STUPID DONT DO IT 
var removeDuplicates = function(nums) {
  var len = nums.length;
  var last = NaN;
  var count = 0;
  for (var i = 0; i < len; i++) {
    if (nums[i] !== last) {
      nums[count] = nums[i];
      last = nums[i];
      count++;
    }
  }
  return count;
};
removeDuplicates([1, 1, 2]);



QUESTION


28. Implement strStr()
Difficulty:Easy

Implement strStr().
Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

Example 1:
Input: haystack = "hello", needle = "ll" [he, o]
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1

Example 3:
Input: haystack = "", needle = ""
Output: 0
 
Constraints: 0 <= haystack.length, needle.length <= 5  104
haystack and needle consist of only lower-case English characters.




ANSWER
 

var strStr = function(haystack, needle) {
    if(needle===''){return 0}
    if(!haystack.includes(needle)) return -1
    return haystack.split(needle)[0].length;
};
strStr("hello", 'll');

QUESTION

35. Search Insert Position
Easy
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2

Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1

Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4

Example 4:
Input: nums = [1,3,5,6], target = 0
Output: 0
Example 5:

Input: nums = [1], target = 0
Output: 0
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104



ANSWER
 
var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    let bigger = nums.find((item) => item > target);
    if (bigger) {
      return nums.indexOf(bigger);
    } else {
      return nums.length;
    }
  }
};

searchInsert([1, 2, 5, 6], 3);

QUESTION

53. Maximum Subarray

Difficulty: Easy
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Example 2:
Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]

Output: 23
 
Constraints: 1 <= nums.length <= 3  104 -105 <= nums[i] <= 105


ANSWER
 
var maxSubArray = function(nums) {
    let maxSoFar = nums[0];
    let max = nums[0];
    
    for(let i = 1; i < nums.length; i++){
        let current = nums[i];
        maxSoFar = Math.max(0, current + maxSoFar);
        max = Math.max(max, maxSoFar);
    }
    return max;
};


var maxSubArray = function(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let sum = 0; 
    for(let i = 0; i <nums.length; i++){
       sum += nums[i];
       max = Math.max(max,sum);
       sum = sum < 0 ? 0 : sum;
    }
    return max;
};
maxSubArray([8,-19,5,-4,20]);


QUESTION


58. Length of Last Word
Easy
Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.


Example 1:
Input: s = "Hello World"
Output: 5
Example 2:

Input: s = " "
Output: 0
 

Constraints:
1 <= s.length <= 104
s consists of only English letters and spaces ' '.

var lengthOfLastWord = function(s) {
    return s.trim().split(" ").pop().length;
};
lengthOfLastWord("hello world  ")


QUESTION



27. Remove Element
Easy
Given an array nums and a value val, remove all instances of that value in-place and return the new length.Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Clarification:
Confused why the returned value is an integer but your answer is an array?
Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:
 nums is passed in by reference. (i.e., without making a copy)
int len = removeElement(nums, val);

 any modification to nums in your function would be known by the caller.
 using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 

Example 1:
Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length. For example if you return 2 with nums = [2,2,3,3] or nums = [2,2,0,0], your answer will be accepted.
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3]
Explanation: Your function should return length = 5, with the first five elements of nums containing 0, 1, 3, 0, and 4. Note that the order of those five elements can be arbitrary. It doesn't matter what values are set beyond the returned length.
 
Constraints: 0 <= nums.length <= 100 0 <= nums[i] <= 50 0 <= val <= 100




ANSWER
 
var removeElement = function(nums, val) {
for(i=0; i<nums.length; i++){
  if(nums[i]===val){
    nums.splice(i, 1)
    i--;
}
}
return nums.length
};
removeElement([3,2,2,3], 2);


QUESTION

66. Plus One
Easy
Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

Example 3:
Input: digits = [0]
Output: [1]
 
Constraints: 1 <= digits.length <= 100 0 <= digits[i] <= 9



ANSWER
 


var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
      switch (true) {
        case digits[i] != 9: digits[i]=digits[i] + 1; return digits;
        case i === 0:digits[i] = 1; digits.push(0);break;
        default:digits[i] = 0;
      }
    }
  return digits;
};
plusOne( [1,2,3]);

 
var plusOne = function (digits) {
  let isSafe = () => {
    digits = Array.from(String(+digits.join(“”) + 1), Number).map((x) => (x % 10 === 0 ? (“” + x).split(“”) : x)).flat().map((y) => +y);
  };
  let notSafe = () => {
    for (let i = digits.length - 1; i >= 0; i--) {
      switch (true) {
        case digits[i] != 9: digits[i]=digits[i] + 1; return;
        case i === 0:digits[i] = 1; digits.push(0);break;
        default:digits[i] = 0;
      }
    }
  };
  Number.isSafeInteger(+digits.join(“”)) ? isSafe() : notSafe();
  return digits;
};
plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]);



QUESTION

67. Add Binary
Easy
Given two binary strings a and b, return their sum as a binary string.

Example 1:
Input: a = "11", b = "1"
Output: "100"

Example 2:
Input: a = "1010", b = "1011"
Output: "10101"

Constraints: 1 <= a.length, b.length <= 104
a and b consist only of '0' or '1' characters.
Each string does not contain leading zeros except for the zero itself.



ANSWER
 
var addBinary = function(a, b) {
  const aBin = `0b${a}`;
  const bBin = `0b${b}`;
  const sum = BigInt(aBin) + BigInt(bBin)
  return sum.toString(2)
};

addBinary('11', '1')

QUESTION

 
69. Sqrt(x)
Given a non-negative integer x, compute and return the square root of x.
Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.


Example 1:
Input: x = 4
Output: 2

Example 2:
Input: x = 8
Output: 2

Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.


Constraints: 0 <= x <= 231 - 1
    
    
var mySqrt = function(x) {
  let sqrt = Math.sqrt(x);
  let whole = Math.floor(sqrt)
  return whole
};

mySqrt(4)



var mySqrt2 = function(x) {
  return Math.floor(x  0.5);
};
mySqrt2(6)

QUESTION


70. Climbing Stairs
Easy
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2
Explanation: There are two ways t

o climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
 
Constraints: 1 <= n <= 45 



ANSWER
 
var climbStairs = function(n) {
if (n === 1) return 1
if (n === 0) return 0

    let one =1;
    let two=2;
    let add;
    
    for (let i = 3; i <= n; i++) {
      add = one + two;
      one = two;
      two = add;
    }

    return two
};


climbStairs(0);

QUESTION




83. Remove Duplicates from Sorted List
Easy
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:
Input: head = [1,1,2]
Output: [1,2]

Example 2:
Input: head = [1,1,2,3,3]
Output: [1,2,3]

Constraints:
The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order. 


ANSWER
 

ANSWER THAT ONLY WORKS ON REPL??? 
var deleteDuplicates = function(head) {
for(i=0; i<head.length; i++){
  if(head[i]===head[i+1]){
    head.splice(i, 1)
    i--;
}
}
return head
};
deleteDuplicates( [1,1,2,3,3]);
ANSWER THAT ONLY WORKS ON LEETCODE?? 
var deleteDuplicates = function(head) {
  if(!head || !head.next) return head;
  head.next = deleteDuplicates(head.next);
  return head.val == head.next.val ? head.next : head;
};
deleteDuplicates( [1,1,2,3,3]);

QUESTION


88. Merge Sorted Array
Easy

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.



ANSWER
 
Example 1:
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1] 


const merge = (nums1, m, nums2, n) => {
  for (let i = nums2.length - 1; i >= 0; i--) {
    nums1.unshift(nums2[i])
    nums1.pop()
  }

  nums1.sort((a, b) => a - b)
  return nums1
}
merge([1,2,3,0,0,0], 3, [2,5,6], 3)
merge([1], 1, [], 0);

merge([0], 0, [1], 1);

QUESTION

94. Binary Tree Inorder Traversal
Easy
Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
Output: [1,3,2]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1] 

ANSWER
 
const inorderTraversal = root => {
  if (!root) {
    return []
  }

  const values = []

  const traverse = (node) => {
    if (node !== null) {
      traverse(node.left)
      values.push(node.val)
      traverse(node.right)
    }
  }

  traverse(root)

  return values
}
inorderTraversal([1,null,2,3])

QUESTION

118. Pascal's Triangle
Easy

Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
 

Constraints: 1 <= numRows <= 30 
let triangle = [[1], [1,1],[1, 2,1], [1, 3, 3,1], [1, 4, 6, 4,1], [1, 5, 10,10, 5, 1] ];

ANSWER
 

var generate = function(numRows) {
  let pascal = [];
  for (let i = 0; i < numRows; i++) {
  pascal[i] = [];
  pascal[i][0] = 1;
  pascal[i][pascal.length-1] = 1;

  for (let j = 1; j < i; j++) {
    pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
  }
}
  return pascal 
};

QUESTION

94. Binary Tree Inorder Traversal
Easy-Given the roo of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
Input: roo = [1,null,2,3]
Output: [1,3,2]

Example 2:
Input: roo = []
Output: []

Example 3:
Input: roo = [1]
Output: [1] 


ANSWER
 

  Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 

  @param {TreeNode} root
  @return {number[]}
 


function TreeNode(val, left, right) {
  let node = {};
  node.val = val === undefined ? 0 : val;
  node.left = left === undefined ? null : left;
  node.right = right === undefined ? null : right;
  return node;
}
function inOrder(treeNode, res) {
  if (!treeNode) return res;
  inOrder(treeNode.left, res);
  res.push(treeNode.val);
  inOrder(treeNode.right, res);
  return res;
}

function arrayToTree(arr) {
  if (arr[0] === null) {
    return null;
  }
  let tree = new TreeNode(arr[0]); 
  function preOrder(currentNode, index) {
    if (currentNode == null || index >= arr.length) return index;
    let leftNode = arr[index] != null ? TreeNode(arr[index]) : null;
    let rightIndex = preOrder(leftNode, index + 1);
    currentNode.left = leftNode;
    let rightNode = rightIndex >= arr.length || arr[rightIndex] == null
        ? null
        : TreeNode(arr[rightIndex]);
    currentNode.right = rightNode; 
    return preOrder(rightNode, rightIndex + 1);
  }
  preOrder(tree, 1);
  console.log(tree)
  return tree;
}

function inorderTraversal(arr) {
  let root = arrayToTree(arr);
  return inOrder(root, []);
}

inorderTraversal([1, null, 2, 3]);
100-199

QUESTION


101. Symmetric Tree
Easy
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
Constraints: The number of nodes in the tree is in the range [1, 1000]. -100 <= Node.val <= 100

ANSWER
 
function Node(val, left, right) {
  let node = {};
  node.val = val === undefined ? 0 : val;
  node.left = left === undefined ? null : left;
  node.right = right === undefined ? null : right;
  return node;
}
function arrayToTree(arr) {
  if (arr[0] === null) return null;
  function deserialize(cNode, i) {
    if (cNode == null || i >= arr.length) return i;
    let nodeL = arr[i] != null ? Node(arr[i]) : null;
    let iRight = deserialize(nodeL, i + 1);
    cNode.left = nodeL;
    let nodeR = iRight >= arr.length || arr[iRight] == null ? null : TreeNode(arr[iRight]);
    cNode.right = nodeR; 
    return deserialize(nodeR, iRight + 1);
  }
  let cNode = new Node(arr[0]); 
  deserialize(cNode, 1);
  console.log(cNode)
  return cNode;
}
function isSymmetric(root) {
  if(!root) return false;
  function isMirror(treeX, treeY) {
  if(!treeX && !treeY) return true
  if(!treeX || !treeY) return false
  return (treeX.val === treeY.val) && isMirror(treeX.left, treeY.right) && isMirror(treeX.right, treeY.left);
}
 let tree = arrayToTree(root);
 return isMirror(tree.left, tree.right); 
}

isSymmetric([1,2,2,null,3,null,3]);
isSymmetric([1,2,2,3,4,4,3]);


QUESTION

101. Symmetric Tree
Easy
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
Example 1:
Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:
Input: root = [1,2,2,null,3,null,3]
Output: false
Constraints: The number of nodes in the tree is in the range [1, 1000]. -100 <= Node.val <= 100

ANSWER

function Node(val, left, right) {
  let node = {};
  node.val = val === undefined ? 0 : val;
  node.left = left === undefined ? null : left;
  node.right = right === undefined ? null : right;
  return node;
}
function arrayToTree(arr) {
  if (arr[0] === null) return null;
  function deserialize(cNode, i) {
    if (cNode == null || i >= arr.length) return i;
    let nodeL = arr[i] != null ? Node(arr[i]) : null;
    let iRight = deserialize(nodeL, i + 1);
    cNode.left = nodeL;
    let nodeR = iRight >= arr.length || arr[iRight] == null ? null : Node(arr[iRight]);
    cNode.right = nodeR; 
    return deserialize(nodeR, iRight + 1);
  }
  let cNode = new Node(arr[0]); 
  deserialize(cNode, 1);
  return cNode;
}
function isSymmetric(root) {
  if(!root) return false;
  function isMirror(treeX, treeY) {
  if(!treeX && !treeY) return true
  if(!treeX || !treeY) return false
  return (treeX.val === treeY.val) && isMirror(treeX.left, treeY.right) && isMirror(treeX.right, treeY.left);
}
 let tree = arrayToTree(root);
 return isMirror(tree.left, tree.right); 
}

var rootNode = arrayToTree([1,2,3,null,null,4,null,null,2,4,null,null,3,null,null]);
isSymmetric(rootNode);
isSymmetric([1,2,2,null,3,null,3]);

QUESTION

104. Maximum Depth of Binary Tree
Easy
A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3
Example 2:
Input: root = [1,2,2,null,3,null,3]
Example 3:
Input: root = []
Output: 0
Example 4:
Input: root = [0]
Output: 1
Constraints: The number of nodes in the tree is in the range [0, 104]. -100 <= Node.val <= 100

ANSWER
function Node(val, left, right) {
  let node = {};
  node.val = val === undefined ? 0 : val;
  node.left = left === undefined ? null : left;
  node.right = right === undefined ? null : right;
  return node;
}
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
function arrayToTree(arr) {
   if (arr[0] === null) return null;
  function deserialize(cNode, i) {
    if (cNode == null || i >= arr.length) return null;
    let nodeL = arr[i] != null ? new Node(arr[i]) : null;
    let iRight = deserialize(nodeL, i+1);
    cNode.left = nodeL;
    let nodeR = iRight >= arr.length || arr[iRight] == null
        ? null
        : new Node(arr[iRight]);
    cNode.right = nodeR;
    return deserialize(nodeR, iRight + 1);
  }
  cNode = new Node(arr[0]);
  deserialize(cNode, 1);
  return cNode;
}
function maxDepth(root) {
  console.log(arrayToTree(root))
  return findDepth(arrayToTree(root))
}
function findDepth(root) {
  return root === null ? 0 : Math.max(findDepth(root.left), findDepth(root.right)+1)
}
maxDepth([1,2,2,3,4,4,3]);
[3,9,20,null,null,15,7] exp 3 

QUESTION


108. Convert Sorted Array to Binary Search Tree
Easy
  Given an integer array nums where the elements are sorted in ascending order
  convert it to a height-balanced binary search tree.
  A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
Example 1:
  Input: nums = [-10,-3,0,5,9]
  Output: [0,-3,9,-10,null,5]
  Explanation: [0,-10,5,null,-3,null,9] is also accepted:
Example 2:
  Input: nums = [1,3]
  Output: [3,1]
  Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
Constraints: 1 <= nums.length <= 104 && -104 <= nums[i] <= 104 && nums is sorted in a strictly increasing order.


ANSWER
 
const sortedArrayToBST = nums => {
  const createBST = (nums, start, end) => {
    if (end < start) {
      return null
    }
    const mid = Math.ceil((start + end)  2)
    const node = new TreeNode(nums[mid])
    node.left = createBST(nums, start, mid - 1)
    node.right = createBST(nums, mid + 1, end)
    return node
  }
  return createBST(nums, 0, nums.length - 1)
}
sortedArrayToBST([-10,-3,0,5,9]);

QUESTION

108. Convert Sorted Array to Binary Search Tree
Easy
  Given an integer array nums where the elements are sorted in ascending order
  convert it to a height-balanced binary search tree.
  A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
Example 1:
  Input: nums = [-10,-3,0,5,9]
  Output: [0,-3,9,-10,null,5]
  Explanation: [0,-10,5,null,-3,null,9] is also accepted:
Example 2:
  Input: nums = [1,3]
  Output: [3,1]
  Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
Constraints: 1 <= nums.length <= 104 && -104 <= nums[i] <= 104 && nums is sorted in a strictly increasing order.


ANSWER
 
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
  var sortedArrayToBST = function(nums) {
      return traverse(nums,0,nums.length-1);
  };

  function traverse(nums,start,end){
      if(start>end){                         
          return null;
      }
      let mid = Math.floor((start+end)2);       
      let root = new TreeNode(nums[mid]);         
      root.left = traverse(nums,start,mid-1);      
      root.right = traverse(nums,mid+1,end);   
      return root;                             
 }

sortedArrayToBST([0,-3,9,-10,null,5]);

QUESTION


110. Balanced Binary Tree
Easy
Given a binary tree, determine if it is height-balanced.
For this problem, a height-balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:
Input: tree = [3,9,20,null,null,15,7]
Output: true

Example 2:
Input: tree = [1,2,2,3,3,null,null,4,4]
Output: false

Example 3:
Input: tree = []
Output: true


ANSWER
 
var isBalanced = function(tree) {
	let res = true
	function depthSearch(tree){
		if(!tree) return 0
		let leftDepth = depthSearch(tree.left), rightDepth = depthSearch(tree.right)
		if(Math.abs(leftDepth-rightDepth) > 1) res = false
    return 1 + Math.max(leftDepth, rightDepth) 
	}
	depthSearch(tree)
  return res;    
};

isBalanced(tree = 
{
  val: 3,
  left: { val: 9, 
                  left: null, 
                  right: null,
         }, 
  right: { val: 20, 
                  left: { val: 15, left: null, right: null }, 
                  right: { val: 7, left: null, right: null },
         },  
  
}
)

For this problem, a Height-Balanced binary tree is defined as:
a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Depth first search(calculate heights) is like post order recursive  call all the way down to double null values until you reach a leaf and count back up 

Leaf nodes will always have height of 1 consider that null is a height of zero.
 LEAF NODE EXAMPLE :   A Leaf means left and right are both null  : 
 { val: 2, height : 1 
                  left: null,  height: 0
                  right: null,  height : 0 
         }
 
Example 1
Input: tree = [3,9,20,null,null,15,7]   ----> in tree form : 
isBalanced(tree1 =
{
  val: 3,   h: 1
  left: { val: 9, 
                  left: null, h: 0
                  right: null, h: 0
         },   h: 2
  right: { val: 20,           h : 1          h: 0           h: 0
                  left: { val: 15, left: null, right: null }, 
                  right: { val: 7, left: null, right: null },
         },                   h: 1          h: 0           h: 0
  
}
)

Tree One: every node differ in height by no more than 1
 Left Depth : 1, Right Depth : 2 
       For Tree1: AbsoluteValue(1-2)= 1   A difference in one is fine: True 
                      Output: TRUE
Example 2
Input: tree = [1,2,2,3,3,null,null,4,4] --> in tree form : 
isBalanced(tree2 = 
{
  val: 1,      h: 3
  left: { val: 2,             h: 2       
                  left: { val: 3,    h: 1         h: 0            h: 0  
                            left: { val: 4, left: null, right: null },
                            right: { val: 4, left: null, right: null }
                         },            h: 1         h: 0          h: 0  
                              h: 1         h: 0          h: 0  
                  right: { val: 3, left: null, right: null },
         },    h: 1
  right:  { val: 2, 
                  left: null,  h: 0
                  right: null,  h: 0
         }
}
)
 Tree Two: every node differ in height by no more than 1
 Left Depth : 3, Right Depth : 2 
 For Tree2: AbsoluteValue(3-1)= 2   A difference of two is not ok: False  
.                   Output: FALSE
Example 3
Input: tree = []  --> in tree form :
isBalanced(tree3 = 
{
  val: null h: 0
}
)
 Tree Three every node differ in height by no more than 1
            Left Depth : 0, Right Depth : 0 
  For Tree2: AbsoluteValue(0-0)= 0  A difference in one is okay: True  
               Output: TRUE


let print = function (input){
 console.log(input)
}

QUESTION


111. Minimum Depth of Binary Tree
Easy
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:
Input: tree = [3,9,20,null,null,15,7]
minDepth(tree = 
{
  val: 3,
  left: { val: 9, 
                  left: null, 
                  right: null,
         }, 
  right: { val: 20, 
                  left: { val: 15, left: null, right: null }, 
                  right: { val: 7, left: null, right: null },
         },  
  
}
)
Output: 2

Example 2:
Input: tree = [2,null,3,null,4,null,5,null,6]
minDepth( tree =
{
  val: 2,
  left: null, 
  right: { val: 3, 
                  left: null, 
                  right: { val: 4,
                                 left: null, 
                                     right: { val: 5,        
                                                    left: null,
                                                    right: { val: 6, left: null, right: null }
                                             },  
                         },
         },  
  
}
         )

Output: 5

shortest past to the nearest leaf  so if tree left and tree right do not exist then it 
it is not a leaf so we want to find the max depth of either tree 

ANSWER
 

var minDepth = function(tree) {
    if (!tree) return 0;
    let leftDepth = minDepth(tree.left), rightDepth = minDepth(tree.right);
    return (tree.left && tree.right ? Math.min(leftDepth, rightDepth) : Math.max(leftDepth, rightDepth)) + 1;
};
minDepth( tree =
{
  val: 2,
  left: null, 
  right: { val: 3, 
                  left: null, 
                  right: { val: 4,
                                 left: null, 
                                     right: { val: 5,        
                                                    left: null,
                                                    right: { val: 6, left: null, right: null }
                                             },  
                         },
         },  
  
}
         )

QUESTION


119. Pascal's Triangle II
Easy
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
Example 1:
Input: rowIndex = 3
Output: [1,3,3,1]
Example 2:
Input: rowIndex = 0
Output: [1]
Example 3:
Input: rowIndex = 1
Output: [1,1]

ANSWER


var getRow = function(rowIndex) {
  let row = [];
  for (let i = 0; i < rowIndex+1; i++) {
  row[i] = [];
  row[i][0] = 1;
  row[i][row.length-1] = 1;
  for (let j = 1; j < i; j++) {
    row[i][j] = row[i-1][j-1] + row[i-1][j];
  }
}
  return row[rowIndex] 
};
getRow(3)

QUESTION


121. Best Time to Buy and Sell Stock
Easy
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

Test Cases 
1.prices = [7,1,5,3,6,4] -> 5
2. prices = [7,6,4,3,1] -> 0
80. prices = [1,4,2] -> 3
105. prices = [2,1,4] -> 3
150. prices =[3,2,6,5,0,3] -> 4
151. prices = [2,4,1] -> 2
175. prices=[2,1,2,0,1] -> 1

ANSWER

var maxProfit = function(prices) {
    let buy = prices[0], profit = 0, len=prices.length, i=1, e;
    while(i<len) {
      e = prices[i];
      if(buy>e) buy=e;
      else profit = Math.max(profit, e-buy);
    i++;
     }
    return profit;
};
maxProfit(prices = [7,6,4,3,1]);

QUESTION


112. Path Sum
Easy
Given the tree of a binary tree and an integer targetSum, return true if the tree has a tree-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Example 1:
Input: tree = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22

hasPathSum( tree =
(
{
val: 5,
    left: { val: 4, 
                  left:  { val: 11,
                                 left: { val: 7,        
                                                 left: null,
                                                 right: null
                                        }, 
                                 right: null,
                         },
                  right: { val: 2,        
                                 left: null,
                                 right: null
                         }, 
         },  
  
    right: { val: 8, 
                  left: { val: 13,        
                                left: null,
                                right: null
                        }, 
                  right: { val: 4,
                                 left: null, 
                                 right: { val: 1,        
                                                    left: null,
                                                    right: null
                                        },  
                         },
        },  

}
), targetSum= 22)
Output: true

Example 2:
Input: tree = [1,2,3], targetSum = 5
hasPathSum( tree =
{
  val: 1,      
       left: { val: 2,
                    left: null, 
                    right: null 
              },                
       right: { val: 3, 
                    left: null, 
                    right: null 
             },        
}
, targetSum= 5) 
Output: false

Example 3:
Input: tree = [1,2], targetSum = 0
Output: false


ANSWER
 

var hasPathSum = function(tree, targetSum) {
    if(!tree) return false;
    if(!tree.left && !tree.right) return targetSum === tree.val; hits leaf sum check if sum 0
    return (!!tree.left && hasPathSum(tree.left, targetSum - tree.val)) ||
        (!!tree.right && hasPathSum(tree.right, targetSum - tree.val));
};

hasPathSum( tree =
{
val: 5,
    left: { val: 4, 
                  left:  { val: 11,
                                 left: { val: 7,        
                                                 left: null,
                                                 right: null
                                        }, 
                                 right: null,
                         },
                  right: { val: 2,        
                                 left: null,
                                 right: null
                         }, 
         },  
  
    right: { val: 8, 
                  left: { val: 13,        
                                left: null,
                                right: null
                        }, 
                  right: { val: 4,
                                 left: null, 
                                 right: { val: 1,        
                                                    left: null,
                                                    right: null
                                        },  
                         },
        },  

}
, targetSum= 22) 

QUESTION


125. Valid Palindrome
Easy
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
s.charCodeAt(index) --> 113
s.charAt(index)-->a
   console.log(s[i])
   console.log(s.charCodeAt(i))
   console.log(64<32 && 91)
   console.log( 64< s.charCodeAt(i) < 91)
   console.log(96 < s.charCodeAt(i) < 123)

   This function check if number n is between a and b
TestCases: 
448. ' ' -> true 
451. ' a.' -> true 
454. 0P -> false



ANSWER



var isPalindrome = function(s) {
s = s.toLowerCase();
let onlyChar= [...s].filter(e=> [a-z0-9].test(e))
console.log(onlyChar)
 return  [...onlyChar].reverse().join('') === onlyChar.join('') ? true : false 
};
isPalindrome( s = "OP");

QUESTION


136. Single Number
Easy
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1

TestCases: 
1. [2,2,1] -> 1
2.  [4,1,2,1,2] -> 4
3. [1] -> 1
9. [1,3,1,-1,3] -> 3


ANSWER



var singleNumber = function(nums) {
nums=nums.sort((a,b)=> a-b)
 for(let i=0; i<nums.length; i++){
   if( nums.includes(nums[i], i+1) ) i++;
   else return nums[i]
 } 
};
singleNumber([4,1,2,1,2]);


const singleNumber = (nums) => {
  return nums.reduce((acc, num) => acc ^ num)
};

QUESTION


144. Binary Tree Preorder Traversal
Easy
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:
Input: root = [1,null,2,3]
root = 
{
  val: 1,
  left:  null,

  right: { val: 2, 
                  left: { val: 3, left: null, right: null }, 
                  right: null,
         }  
}

Output: [1,2,3]
Example 2:
Input: root = []
Output: []

Example 3:
Input: root = [1]
root={
  val: 1 
  }
Output: [1]

Example 4:
Input: root = [1,2]
root = 
{
  val: 1,
  left: { val: 2, 
                  left: null, 
                  right: null,
         },  
  right: null  
}
)
Output: [1,2]

Example 5:
Input: root = [1,null,2]
Output: [1,2]


ANSWER
 


treenode left right 
function TreeNode(val, left, right) {
  let node = {};
  node.val = val === undefined ? 0 : val;
  node.left = left === undefined ? null : left;
  node.right = right === undefined ? null : right;
  return node;
}
algorithm for problem modify
function algorithm(treeNode, res) {
  if (!treeNode) return res;
   res.push(treeNode.val);
  algorithm(treeNode.left, res);
  algorithm(treeNode.right, res);
  return res;
}

leetcode function 
function preorderTraversal(tree) {
  return algorithm(tree, []);
}
convert array to tree and put in as parameter here 

preorderTraversal(tree = 
{
  val: 1,
  left: null,
  right: { val: 2, 
                  left: null, 
                  right: null,
         },  
  
}
)

QUESTION


169. Majority Element
Easy
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n  2⌋ times. You may assume that the majority element always exists in the array.
Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

ANSWER


var majorityElement = function(nums) {
    let obj = {};
    for(let i in nums){ 
      if(!obj[nums[i]]) obj[nums[i]]=1;
      else obj[nums[i]]=obj[nums[i]]+1
      }
    let max = Math.max(...Object.values(obj));    
      return  Object.keys(obj).find(key => obj[key] === max)
};
200-299

QUESTION


205. Isomorphic Strings
Easy
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "foo", t = "bar"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true


ANSWER

3839cases 
var isIsomorphic = function(s, t) {
let map = new Map();
let map2 = new Map();
if(1 >= s.length) return false
if(s.length >= ((104)5)) return false


    let lenS=s.length, lenT=t.length, same=0, diff=0, same2=0, diff2=0;
   
    if(lenS!=lenT) return false

    for(let i in s){
  if(!( (^[\x00-\x7F]$.test(s)) && (^[\x00-\x7F]$.test(t)))) return false
    let sCurr = s[i], tCurr= t[i], sNext = s[i-1], tNext=t[i-1], occ=s.indexOf(sCurr), tocc=t.indexOf(tCurr);

     occ!=+i ? same++ : diff++;
     tocc!=+i ? same2++ : diff2++;

    if(sCurr!==sNext && tCurr===tNext) return false
    else if (sCurr===sNext && tCurr!==tNext) return false

let x;
      if(map.get(s[i])!==undefined )  x = map.get(s[i]),  map.set(s[i],x+1);
     else  map.set(s[i], 1)
           if(map2.get(t[i])!==undefined )  y = map2.get(t[i]),  map2.set(t[i],y+1);
     else  map2.set(t[i], 1)

    let m = map.get(sCurr);
    map.set(sCurr, m)

    
    }

      if(same!==same2 && diff!==diff2) return false
   return true
};
correct ANSWER

var isIsomorphic = function(s, t) {
  let sMap = new Map;
  let tMap = new Map;
  
  for (i in s)
  { 
    console.log( !sMap.has(s[i]))
    !sMap.has(s[i]) && sMap.set(s[i], i);
    !tMap.has(t[i]) && tMap.set(t[i], i);
    if (sMap.get(s[i]) !== tMap.get(t[i]))
    {
      return false;
    }
  }
  
  return true;
};
isIsomorphic("foo", 'bar')

ANSWER

var majorityElement = function(nums) {
    let obj = {};
    for(let i in nums){ 
      if(!obj[nums[i]]) obj[nums[i]]=1;
      else obj[nums[i]]=obj[nums[i]]+1
      }
    let max = Math.max(...Object.values(obj));    
      return  Object.keys(obj).find(key => obj[key] === max)
};
majorityElement(nums = [2,2,1,1,1,2,2])

QUESTION


238. Product of Array Except Self
Medium
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 console.log(arr)
 console.log(arr[ind] + '\n')


ANSWER


const productExceptSelf = (nums) => {
  let len = nums.length, res = Array(len).fill(1), left=1, right=1;
  for (let i = 0; i < len; i++) {
    res[i] = left;
    res[len - 1 - i] = right;
    left = nums[i];
    right = nums[len - 1 - i];
  }
  return res;
};

productExceptSelf( nums =[-1,1,0,-3,3]); 

QUESTION


242. Valid Anagram
Easy
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1:
Input: s = 'anagram', t = 'nagaram'
Output: true
Example 2:
Input: s = 'rat', t = 'car'
Output: false

Test Case:
20. 'a', 'ab' --> false 
26. 'ac', bb' --> false 
31. 'aacc', 'ccac' --> false 

ANSWER


my first answer correct
var isAnagram = function(s, t) {
  if(s.length != t.length) return false
  let sap = new Map(), tap= new Map();
    for(i in s){
     if(!t.includes(s[i])) return false 
    sap.get(s[i]) ? sap.set(s[i], sap.get(s[i])+1) : sap.set(s[i], 1)
    tap.get(t[i]) ? tap.set(t[i], tap.get(t[i])+1) : tap.set(t[i], 1)
    }
 for(e of s){
   if(sap.get(e) != tap.get(e)) return false
 }
    return true 
};
 my second answer correct?
passes leetcode but is actually wrong submitted testcase for it 
var isAnagram = function(s, t) {
  if(s.length!=t.length) return false 
sCode=0; tCode=0;
   for(i in s){
if(!t.includes(s[i])) return false 
    sCode+=s.charCodeAt(i)
     tCode+=t.charCodeAt(i);
    }
if(sCode!=tCode) return false 
return true 
};
isAnagram('acacbac' ,'bbbbbac');


QUESTION


258. Add Digits
Easy

Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
Example 2:

Input: num = 0
Output: 0

ANSWER


var addDigits = function(num) {
    while(num > 9){
       let toStr =num.toString().split(''), toNum = toStr.map(e=> +e);
       num = toNum.reduce((a,b)=> a+b);
    }
return num
};
addDigits(-100);

300-399

QUESTION

345. Reverse Vowels of a String
Easy
Given a string s, reverse only all the vowels in the string and return it.
The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both cases.

Example 1:
Input: s = "hello"
Output: "holle"

Example 2:
Input: s = "leetcode"
Output: "leotcede"


ANSWER


var reverseVowels = function(s) {
  let vow = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']), ind=[], str='', next=0;
  for(e of s){ if(vow.has(e)) ind.push(e) }
  ind.reverse();
   for(e of s){
   if(vow.has(e)) str+=ind[next], next++;
   else str+=e
  }
return str
};
reverseVowels(s = "leetcode");

QUESTION


349. Intersection of Two Arrays
Easy
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

 

ANSWER


 my answer correct 
var intersection = function(nums1, nums2) {
  let arr=[];
  nums1.forEach(e=> nums2.indexOf(e)===-1 ?  '' : arr.push(e))
    return   [...new Set(arr)]
};

leetcode answer 
var intersection = function(nums1, nums2) {
    return [...new Set(nums1.filter(e => nums2.includes(e)))]
};
intersection( nums1 = [1,2,2,1], nums2 = [2,2])

QUESTION


350. Intersection of Two Arrays II
Easy
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.

 

ANSWER

my answer correct 
var intersect = function(nums1, nums2) {
  let res=[], map= new Map();
  nums1.forEach(e=> map.get(e) && nums2.includes(e) ? map.set(e, map.get(e)+1) : nums2.includes(e) ? map.set(e, 1 ) : '')
  nums2.forEach(e=> map.get(e)>0 ? map.set(e, map.get(e)-1) && res.push(e) : '');
  return res
};
intersect( nums1 = [1,2,2,1], nums2 = [2,2])

QUESTION


387. First Unique Character in a String
Easy

Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1.
Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1

ANSWER

const firstUniqChar = s => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i && s.indexOf(s[i], i + 1) === -1) {
      return i
    }
  }

  return -1
};
firstUniqChar(s = "loveleetcode");
400-499

QUESTION


415. Add Strings
Easy
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Example 1:

Input: num1 = "11", num2 = "123"
Output: "134"
Example 2:

Input: num1 = "456", num2 = "77"
Output: "533"
Example 3:

Input: num1 = "0", num2 = "0"
Output: "0"


ANSWER

var addStrings = function(num1, num2) {
    var sum = '';
    var carry = 0;
    var num1Length = num1.length; 
    var num2Length = num2.length;
    var tempNum1;
    var tempNum2;
    var tempSum = 0;
    while(num1Length > 0 || num2Length > 0 || carry == 1){
        
        tempNum1 = num1[num1Length-1] ? num1[num1Length-1] : '0';
        tempNum2 = num2[num2Length-1] ? num2[num2Length-1] : '0';
        tempSum = parseInt(tempNum1) + parseInt(tempNum2) + carry;
        
        sum = (tempSum%10).toString() + sum;
        carry = tempSum >= 10 ? 1 : 0;  
        
        num1Length--;
        num2Length--;
    }
    
    return sum.toString();
};
addStrings("9333852702227987",
"85731737104263")

QUESTION

434. Number of Segments in a String
Easy
You are given a string s, return the number of segments in the string. 

A segment is defined to be a contiguous sequence of non-space characters.

Example 1:
Input: s = "Hello, my name is John"
Output: 5
Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

Example 2:
Input: s = "Hello"
Output: 1

Example 3:
Input: s = "love live! mu'sic forever"
Output: 4

Example 4:
Input: s = ""
Output: 0


ANSWER


var countSegments = function(s) {
    return s.split(' ').filter(x => x!== '').length
};
countSegments(  s = 'ab c'); 
500-599            

QUESTION


541. Reverse String II
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.
If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example 1:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
Input: s = "abcd", k = 2
Output: "bacd"


ANSWER

var reverseStr = function (s, k) {
  let revCount = 0;
  let half = [];
  let kk = 2  k;
  let arr = s.split("");
  for (let i = 0; i < s.length; i++) {
    let j = i + 1;
    if (j % k === 0 && j % kk != 0) {
      let o = arr.splice(0, k);
      o.reverse();
      revCount = revCount + 1;
      half.push(...o);
    } else if (j % kk === 0) {
      let p = arr.splice(0, k);
      revCount = revCount - 1;
      half.push(...p);
    } else if (arr.length < k && revCount === 0) {
      arr.reverse();
      half.push(...arr);
      return half.join("").toString("");
    }
  }
  half.push(...arr);
  return half.join("").toString("");
};


reverseStr("hyzqyljrnigxvdtneasepfahmtyhlohwxmkqcdfehybknvdmfrfvtbsovjbdhevlfxpdaovjgunjqlimjkfnqcqnajmebeddqsgl",
39);
var reverseStr = function(s, k) {
    let ans = "";
    for(let i = 0; i < s.length; i+=2k){
     if (i != 0) {
        ans = ans.substring(0, i)
            + s.substring(i , i+k).split("").reverse().join("") 
            + s.substring(i+k, s.length);
     } else{
         ans = s.substring(i , i+k).split("").reverse().join("") 
                + s.substring(i+k, s.length)
     }
    }
 return ans;
};

QUESTION


543. Diameter of Binary Tree
Easy
Given the root of a binary tree, return the length of the diameter of the tree.
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the tree.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:
Input: tree = [1,2,3,4,5]
diameterOfBinaryTree( tree =
{
val: 1,
    left: { val: 2, 
                  left: { val: 4,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 5,        
                                 left: null,
                                 right: null
                         }, 
         },  
  
    right:  { val: 3,        
                    left: null,
                    right: null
            }, 

}
) 
Output: 3
Explanation: 3is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: tree = [1,2]

diameterOfBinaryTree( tree =
{
val: 1,
       left: { val: 2,        
                      left: null,
                      right: null
              }, 
  
    right: null

}
) 
Output: 1


ANSWER
 
call tree 
Time : O(n)
Space : Call stack O(n) linear 
var diameterOfBinaryTree = function (tree) {
  function search(tree) {
    if (!tree) return [0, 0]; 
    let [leftD, leftH] = search(tree.left);
    let [rightD, rightH] = search(tree.right);
    return [
      Math.max(leftD, rightD, leftH + rightH),
      Math.max(leftH, rightH) + 1,
    ];
  }
  return search(tree)[0];
};


diameterOfBinaryTree( tree =
{
val: 1,
    left: { val: 2, 
                  left: { val: 4,        
                                 left: null,
                                 right: null
                         }, 
                  right: { val: 5,        
                                 left: null,
                                 right: null
                         }, 
         },  
  
    right:  { val: 3,        
                    left: null,
                    right: null
            }, 

}
) 

QUESTION


561. Array Partition I
Easy

Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.


Example 1:
Input: nums = [1,4,3,2]
Output: 4
Explanation: All possible pairings (ignoring the ordering of elements) are:
1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4

So the maximum possible sum is 4.
Example 2:
Input: nums = [6,2,6,5,1,2]
Output: 9
Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6).
 min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.
 

ANSWER


my correct answer 
var arrayPairSum = function(nums) {
  nums = nums.sort((a, b)=> b-a), sum=0, i=0;
  while(i<nums.length){
  sum+=Math.min(nums[i], nums[i+1]), i+=2;
  }
 return sum
};
arrayPairSum(nums = [1,4,3,2])
    


600-699

QUESTION


697. Degree of an Array

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.

Example 2:
Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

ANSWER


var findShortestSubArray = function(nums) {
  let map = new Map(), arr;
   nums.forEach(e => (map.get(e)) ? map.get(e)[0]+=1 : map.set(e,[1,(nums.lastIndexOf(e)-nums.indexOf(e))+1])); 
    arr= [...map.values()].sort((a,b)=> b[0]-a[0] || a[1]-b[1]);
  return arr[0][1]
}
findShortestSubArray(nums = [1,2,2,3,1,4,2])

700-799

QUESTION


704. Binary Search
Easy
  Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.You must write an algorithm with O(log n) runtime complexity.
Example 1:
  Input: nums = [-1,0,3,5,9,12], target = 9
  Output: 4
  Explanation: 9 exists in nums and its index is 4
Example 2:
  Input: nums = [-1,0,3,5,9,12], target = 2
  Output: -1
  Explanation: 2 does not exist in nums so return -1


QUESTION


709. To Lower Case
Easy
Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

Example 1:
Input: "Hello"
Output: "hello"

Example 2:
Input: "here"
Output: "here"
Example 3:

Input: "LOVELY"
Output: "lovely"


ANSWER
 
var toLowerCase = function(str) {
   return str.toLowerCase();
};
toLowerCase("Hello");

ANSWER
 

var search = function(nums, target) {
  let ans;
 nums.find(function(element, index){
    if(nums[index] === target){
      ans=index
    }
  })
if(ans===undefined){ ans=-1}
return ans
};
search(nums = [-1,0,3,5,9,12], target = 9)

QUESTION


771. Jewels and Stones
Easy

You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0


ANSWER



 my answer correct
var numJewelsInStones = function(jewels, stones) {
 let map= new Map();
 jewels= jewels.split(''), stones=stones.split('');
    stones.forEach(e => jewels.includes(e) ? map.get(e) ? map.set(e, 1+map.get(e)) : map.set(e, 1) : '')
    let val = [...map.values()]
   if(val.length<1) return 0
 return   val.reduce((a,b )=> a + b)
};
numJewelsInStones(jewels = "aA", stones = "aAAbbbb")

leetcode 
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones.charAt(i))) count++;
    }
    return count;
};

numJewelsInStones(jewels = "aA", stones = "aAAbbbb")

QUESTION


796. Rotate String
Easy

We are given two strings, s and goal.
A shift on s consists of taking string s and moving the leftmost character to the rightmost position. For example, if s = 'abcde', then it will be 'bcdea' after one shift on s. Return true if and only if s can become goal after some number of shifts on s.

Example 1:
Input: s = 'abcde', goal = 'cdeab'
Output: true

Example 2:
Input: s = 'abcde', goal = 'abced'
Output: false

Note:
s and goal will have length at most 100.

ANSWER


var rotateString = function (s, goal) {
  if (s===goal) return true ;
  for (let char of s) {
    s = s.slice(1) + s.slice(0, 1);   rotating the string 
    if (s===goal) return true;
  }
  return false;
};


var rotateString = function (s, goal) {
  if(s===goal) return true
  let arr = s.split('');
  for (const i in s) {
    if (arr.join("") === goal) return true;
    arr.unshift(arr.pop());
  }
  return false;
};
rotateString( s = 'abcde', goal = 'cdeab');
800-899

QUESTION

819. Most Common Word
Easy
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.The words in paragraph are case-insensitive and the answer should be returned in lowercase.
Example 1:
Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"

Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.

Example 2:
Input: paragraph = "a.", banned = []
Output: "a"
 
Constraints: 1 <= paragraph.length <= 1000
paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
0 <= banned.length <= 100
1 <= banned[i].length <= 10
banned[i] consists of only lowercase English letters.

ANSWER
 

var mostCommonWord = function (paragraph, banned) {
  let obj = {};
  let mostCommon;
 let wordArr = paragraph.toLowerCase().replace((~|`|!|@|#|$|%|^|&|\|\(|\)|{|}|\[|\]|;|:|\"|'|<|,|\.|>|\?|\|\\|\||-|_|\+|=)g," ").split(" ");
  let bannedSet = new Set();
  banned.forEach((e) => bannedSet.add(e));
  let result = wordArr.filter(Boolean).filter((x) => !bannedSet.has(x));
  let counter = (key) => (obj[key] = ++obj[key] || 1);
  result.forEach(counter);
  let topWordLength = Math.max(...Object.values(obj));
  let findMatch = (key) => obj[key] === topWordLength ? (mostCommon = key) : false;
  result.forEach(findMatch);
  return mostCommon
};
mostCommonWord("Bob hit a ball, the hit BALL ball flew far after it was hit.", ['hit']);

QUESTION



896. Monotonic Array
Easy
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].  An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Return true if and only if the given array nums is monotonic.

Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
Example 4:

Input: nums = [1,2,4,5]
Output: true
Example 5:

Input: nums = [1,1,1]
Output: true

 testcase 
[1,3,2] --> 88. false 
[5,4,3,1] -> 346. true
[6,5,4,4] --> 351. true
[2,2,2,1,4,5] -> 356. false

ANSWER


my correct answer 
var isMonotonic = function(nums) {
    let inc = false; dec=false, ln=nums.length;
    for(let i = 0; i<ln; i++){
    if(nums[i]===nums[i+1] || i===ln-1) continue;
    else if(nums[i]>nums[i+1]) dec=true;
    else inc=true;
    };
   return !(inc && dec)
};
 isMonotonic( [2,2,2,1,4,5]);


QUESTION


859. Buddy Strings
Easy

Given two strings a and b, return true if you can swap two letters in a so the result is equal to b, otherwise, return false.
Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at a[i] and a[j].
For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

Example 1:
Input: a = "ab", b = "ba"
Output: true
Explanation: You can swap a[0] = 'a' and a[1] = 'b' to get "ba", which is equal to b.

Example 2:
Input: a = "ab", b = "ab"
Output: false
Explanation: The only letters you can swap are a[0] = 'a' and a[1] = 'b', which results in "ba" != b.

Example 3:
Input: a = "aa", b = "aa"
Output: true
Explanation: You can swap a[0] = 'a' and a[1] = 'a' to get "aa", which is equal to b.

Example 4:
Input: a = "aaaaaaabc", b = "aaaaaaacb"
Output: true


ANSWER

var buddyStrings = function (a, b) {
  let set = new Set(), i = 0, aNum = 0, bNum = 0, lenA = a.length, lenB = b.length, miss = 0;
  if (lenA != lenB || lenA === 0 || lenB === 0) return false;
  while (i < lenA) {
    if (a === b) {
      if (set.has(a[i])) return true;
    }
  else if(a.indexOf(b[i])===-1 || b.indexOf(a[i])===-1) return false
  else if (a[i] != b[i]) miss = miss + 1;
   aNum = aNum + a.charCodeAt(i), bNum = bNum + b.charCodeAt(i);
    set.add(a[i]);
    i++;
  }
  if (miss>2 || aNum != bNum || a===b) return false;
  else return true;
};
buddyStrings("abab","acaa");

QUESTION



896. Monotonic Array
Easy
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j].  An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Return true if and only if the given array nums is monotonic.

Example 1:

Input: nums = [1,2,2,3]
Output: true
Example 2:

Input: nums = [6,5,4,4]
Output: true
Example 3:

Input: nums = [1,3,2]
Output: false
Example 4:

Input: nums = [1,2,4,5]
Output: true
Example 5:

Input: nums = [1,1,1]
Output: true

 testcase 
[1,3,2] --> 88. false 
[5,4,3,1] -> 346. true
[6,5,4,4] --> 351. true
[2,2,2,1,4,5] -> 356. false

ANSWER


my correct answer 
var isMonotonic = function(nums) {
    let inc = false; dec=false, ln=nums.length;
    for(let i = 0; i<ln; i++){
    if(nums[i]===nums[i+1] || i===ln-1) continue;
    else if(nums[i]>nums[i+1]) dec=true;
    else inc=true;
    };
   return !(inc && dec)
};
 isMonotonic( [2,2,2,1,4,5]);


900-999

QUESTION



905. Sort Array By Parity
Easy
Given an array nums of non-negative integers, return an array consisting of all the even elements of nums, followed by all the odd elements of nums.
You may return any answer array that satisfies this condition.

Example 1:
Input: nums = [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

 

ANSWER


var sortArrayByParity = function(nums) {
    let [odds, evens] = [nums.filter(e => e%2===1), nums.filter(e => e%2 === 0)];
    evens.push.apply(evens, odds);
   return evens
};
sortArrayByParity([3,1,4,2])



QUESTION


922. Sort Array By Parity II
Easy
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.
Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.
Return any answer array that satisfies this condition.

Example 1:
Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.

Example 2:
Input: nums = [2,3]
Output: [2,3]

 

ANSWER



var sortArrayByParityII = function(nums) {
    let [odds, evens] = [nums.filter(e => e%2===1), nums.filter(e => e%2 === 0)],  res = []
    for(i in nums){
       i%2 ? res.push(odds.pop()) : res.push(evens.pop())
    }
    return res
};
sortArrayByParityII([3,1,4,2])



QUESTION


941. Valid Mountain Array
Easy
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:
Input: arr = [2,1]
Output: false

Example 2:
Input: arr = [3,5,5]
Output: false

Example 3:
Input: arr = [0,3,2,1]
Output: true

Test Cases: 
[2,0,2] -> 28. false
[3,5,5] ->50. false 
[0,1,2,4,2,1] --> 35. true
[3,7,6,4,3,0,1,0] --> 33. false
[0,1,2,3,4,5,6,7,8,9] --> 30. false
[4,4,3,2,1] --> 52. false
[9,8,7,6,5,4,3,2,1,0] —> 54. false



ANSWER

my answer works 

var validMountainArray = function(arr) {
  let ln = arr.length, peak=0;
  if(!(arr.length >=3)) return false
  for(let i=0; i<ln; i++){
    let cur=arr[i], nex=arr[i+1];
     if (cur===nex) return false
     else if(cur> nex) peak+=1;
     else if (peak>0 && ( i<1 || (!(cur>nex)&& i!=ln-1))) return false
     else if (peak<1 && (!(cur<nex) || i===ln-1)) return false
  }
return true   
};
validMountainArray([4,4,3,2,1]

 a leetcode answer 
var validMountainArray = function(arr) {
    if(arr.length <3) return false;
    var max = -Infinity;
    var flag = true;
    if(arr[0]>arr[1]) return false
    for(let i=0; i<arr.length; i++){
      let cur=arr[i], nex=arr[i+1];
        if(flag && max < cur) max = cur
        else flag = false; if(cur >= next)return false
        
      
    }
    if(flag) return false
    return true
};



QUESTION



942. DI String Match
Easy
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
i must be one less than index in front of it 
d must be one greater than the one in front of it 
 d must be one less than the index behind it 
 i must be one more than the one behind it 
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

Example 1:
Input: s = 'IDID'
Output: [0,4,1,3,2]

Example 2:
Input: s = 'III'
Output: [0,1,2,3]

Example 3:
Input: s = 'DDI'
Output: [3,2,0,1]


ANSWER


a =[...Array(5).keys()], -> [0 , 1, 2, 3, 4]
 a =[...Array(len + 1).keys()], <--makes a copy of the indexes 
 my answer correct
var diStringMatch=function (s) {
  let len=s.length, a =[], left=0, right=len,i=0;
  while (left <= right && i <= len) {
    if (left===right) a[i]=left;
    else if (i===0){
      if (s[i]==='D') a[i]=len, right--
      else a[i]=left, left++ }
    else {
      if (s[i]==='D') (a[i]=right), right--
      else a[i]=left, left++ }
   i++;
  }
  return a;
};


another answer 

var diStringMatch = function(s) {
    let max = s.length, min = 0, result = []
    for (let i of s){ 
        if (i === 'D'){
            result.push(max)
            max--
        }
        else if (i === 'I'){
            result.push(min)
            min++
        }
    }
    result.push(max) pushs that remaining it could be min or max same 
    return result
};
diStringMatch( s = 'IDID')

QUESTION


977. Squares of a Sorted Array
Easy
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

 

ANSWER


var sortedSquares = function(nums) {
    nums.forEach((e, i)=> nums[i]=(e2))
    nums.sort((a,b) => a-b)
    return nums
};
sortedSquares(nums = [-4,-1,0,3,10])

1000-1099


QUESTION

1108. Defanging an IP Address
Easy
Given a valid (IPv4) IP address, return a defanged version of that IP address.
A defanged IP address replaces every period "." with "[.]".
Example 1:

Input: address = "1.1.1.1"
Output: "1[.]1[.]1[.]1"
Example 2:

Input: address = "255.100.50.0"
Output: "255[.]100[.]50[.]0"
}
Constraints: The given address is a valid IPv4 address.


ANSWER

var defangIPaddr = function (address) {
  return address.replace(\.g, "[.]");
};
defangIPaddr("255.100.50.0");
1100-1199

QUESTION


1122. Relative Sort Array
Easy
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
Input:
[26,21,11,20,50,34,1,18]
[21,11,26,20]
Output:
[1,11,18,21,26,20,34,50]
Expected:
[21,11,26,20,1,18,34,50]
 

ANSWER


var relativeSortArray = function(arr1, arr2) {
    let containsArr = []
    arr2.forEach((a, index) => containsArr.push(...arr1.filter(num => num === a)))
    return [...containsArr, ...arr1.filter(a => !arr2.includes(a)).sort((b,c) => b-c)]
};
relativeSortArray([28,6,22,8,44,17],
[22,28,8,6])

QUESTION

1128. Number of Equivalent Domino Pairs
Easy

Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a==c and b==d), or (a==d and b==c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].

Example 1:

Input: dominoes = [[1,2],[2,1],[3,4],[5,6]]
Output: 1

ANSWER


var numEquivDominoPairs = function(dominoes) {
    let arr = Array(100).fill(0), pairCount = 0;
    for(let e of dominoes){
       let num = e[0] < e[1] ? e[0]  10 + e[1] : e[1]  10 + e[0];
        pairCount += arr[num];
        arr[num]++;
    }
    
    return pairCount;
};
numEquivDominoPairs(dominoes = [[1,2],[2,1],[3,4],[5,6]])


1200-1299

QUESTION


1200. 
Difficulty: EASY
Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows
a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:
Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.

Example 2:
Input: arr = [1,3,6,10,15]
Output: [[1,3]]

Example 3:
Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
 
Constraints:

2 <= arr.length <= 10^5
-10^6 <= arr[i] <= 10^6




QUESTION


1221. Split a String in Balanced Strings
Easy
Balanced strings are those that have an equal quantity of 'L' and 'R' characters.
Given a balanced string s, split it in the maximum amount of balanced strings.
Return the maximum amount of split balanced strings.
Example 1:
  Input: s = "RLRRLLRLRL"
  Output: 4
  Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:
  Input: s = "RLLLLRRRLR"
  Output: 3
  Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
Example 3:
  Input: s = "LLLLRRRR"
  Output: 1
  Explanation: s can be split into "LLLLRRRR".
Example 4:
  Input: s = "RLRRRLLRLL"
  Output: 2
  Explaination: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
 

ANSWER
 

var balancedStringSplit = function(s) {
    let stack = [];
    let count = 0;
    let first = s[0];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === first) {
            stack.push(s[i]);
        } else {
            stack.pop();
        }
        if (!stack.length) {
            count++;
            if (s[i+1]) first = s[i+1];
        };
    }
    
    return count;
};
balancedStringSplit("RLLLLRRRLR")

ANSWER
 

takes too long 
var minimumAbsDifference = function(arr) {
  let diff;
  let obj={};
  let pairs;
  arr.sort(function(a, b){return a-b}); 
for(let i=0; i<arr.length; i++){
  for(let j=i+1; j<arr.length; j++){
   diff=Math.abs(arr[i]-(arr[j]));
   obj[[arr[i], arr[j]]]=diff;
   if(i===0 && j===1){
     curr=diff
   }
    if(diff<curr){
      curr=diff
      }
}
}
    Object.keys(obj).forEach((key)=> obj[key]!=curr ? delete obj[key] : false);
   pairs = Array.from((Object.keys(obj)), e => e.split(','));
     let pairsNums = pairs.map((x) => x.map((y) => +y));
     return pairsNums
};

minimumAbsDifference([1,3,6,10,15])
minimumAbsDifference([3,8,-10,23,19,-4,-14,27])
minimumAbsDifference([4,2,1,3])

actual answervar minimumAbsDifference = function (arr) {
  let diff;
  let curr;
  let newArr = [];
  arr.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    diff = Math.abs(arr[i] - arr[i + 1]);
    if (i === 0) {
      curr = diff;
    }
    if (diff < curr) {
      curr = diff;
      newArr = [[arr[i], arr[i + 1]]];
    } else if (diff === curr) {
      newArr.push([arr[i], arr[i + 1]]);
    }
  }
  return newArr;
};

minimumAbsDifference([3,8,-10,23,19,-4,-14,27])

QUESTION


1281. Subtract the Product and Sum of Digits of an Integer
Easy
Given an integer number n, return the difference between the product of its digits and the sum of its digits.

Example 1:
Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2  3  4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15

Example 2:
Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4  4  2  1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21


ANSWER



var subtractProductAndSum = function(n) {
 n = n.toString().split('')
 let toNum = n.map((e, i) => +e), prod =  toNum.reduce((a,b)=> ab), sum =  toNum.reduce((a,b)=> a+b);
  return prod - sum
};
subtractProductAndSum(n=234)
1300-1399

QUESTION


1331. Rank Transform of an Array
Easy

Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:
Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.
 

Example 1:
Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

Example 2:
Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.

Example 3:
Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3]

 

ANSWER


my answer passed 

var arrayRankTransform = function(arr) {
  let copy, obj={}, res=[]; 
  copy= [...new Set(arr)]; 
  copy.sort((a, b)=> a-b)
  copy.forEach(e=> obj[e]=(copy.indexOf(e)+1))
  arr.forEach(e=> res.push(obj[e]))
    return res
};
leetcode answer apperently mapping the index is faster than finding the indexOf()
var arrayRankTransform = function(arr) {
  let ranks = new Map()
  let cloneArray = [...new Set(arr)]
  
  cloneArray.sort((a, b) => a - b)
  cloneArray.forEach((n, i) => ranks.set(n, i))
  console.log(ranks)
  
  return arr.map(n => {
     using map.get(n) faster than cloneArray.indexOf(n) 99 times
      and faster than use object 2 times
    return ranks.get(n) + 1
  })
};
arrayRankTransform (arr = [37,12,28,9,100,56,80,5,12])

QUESTION


1342. Number of Steps to Reduce a Number to Zero
Easy

Given a non-negative integer num, return the number of steps to reduce it to zero. If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

Example 1:
Input: num = 14
Output: 6
Explanation: 
Step 1) 14 is even; divide by 2 and obtain 7. 
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3. 
Step 4) 3 is odd; subtract 1 and obtain 2. 
Step 5) 2 is even; divide by 2 and obtain 1. 
Step 6) 1 is odd; subtract 1 and obtain 0.

Example 2:
Input: num = 8
Output: 4
Explanation: 
Step 1) 8 is even; divide by 2 and obtain 4. 
Step 2) 4 is even; divide by 2 and obtain 2. 
Step 3) 2 is even; divide by 2 and obtain 1. 
Step 4) 1 is odd; subtract 1 and obtain 0.


ANSWER



var numberOfSteps = function(num) {
  let inc = 0;
  while(num> 0){
    if(num%2!=0) num=num-1, inc++;
    else if(num%2===0) num=num2, inc++;
  }
  return inc
};
numberOfSteps(num=1)

QUESTION


1365. How Many Numbers Are Smaller Than the Current Number
Easy
Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

Example 1:
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation: 
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3). 
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1). 
For nums[3]=2 there exist one smaller number than it (1). 
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Example 2:
Input: nums = [6,5,4,8]
Output: [2,1,0,3]

Example 3:
Input: nums = [7,7,7,7]
Output: [0,0,0,0]



ANSWER

var smallerNumbersThanCurrent = function(nums) {
  let copy = [...nums].sort((a,b)=> a-b);
  return nums.map((a,b) => copy.indexOf(a))
};

smallerNumbersThanCurrent(nums = [8,1,2,2,3])

QUESTION

1370. Increasing Decreasing String
Easy

Given a string s. You should re-order the string using the following algorithm:

Pick the smallest character from s and append it to the result.
Pick the smallest character from s which is greater than the last appended character to the result and append it.

Repeat step 2 until you cannot pick more characters.

Pick the largest character from s and append it to the result.
Pick the largest character from s which is smaller than the last appended character to the result and append it.

Repeat step 5 until you cannot pick more characters.
Repeat the steps from 1 to 6 until you pick all characters from s.

In each step, If the smallest or the largest character appears more than once you can choose any occurrence and append it to the result.

Return the result string after sorting s with this algorithm.

Example 1:
Input: s = "aaaabbbbcccc"
Output: "abccbaabccba"
Explanation: After steps 1, 2 and 3 of the first iteration, result = "abc"
After steps 4, 5 and 6 of the first iteration, result = "abccba"
First iteration is done. Now s = "aabbcc" and we go back to step 1
After steps 1, 2 and 3 of the second iteration, result = "abccbaabc"
After steps 4, 5 and 6 of the second iteration, result = "abccbaabccba"

Example 2:
Input: s = "rat"
Output: "art"
Explanation: The word "rat" becomes "art" after re-ordering it with the mentioned algorithm.

Example 3:
Input: s = "leetcode"
Output: "cdelotee"

Example 4:
Input: s = "ggggggg"
Output: "ggggggg"

Example 5:
Input: s = "spo"
Output: "ops"


ANSWER


var sortString = function(s) {
  let res ='', map= new Map(), unique = [...new Set(s.split('').sort())];
    for(i in s){
        map.set(s[i],map.get(s[i])+1||1);
    }
     console.log(map)
        while(unique.length>0){
            for(let i=0;i<unique.length;i++){
                if(map.has(unique[i]) && map.get(unique[i])>0){
                    res+=unique[i]
                    map.set(unique[i],map.get(unique[i])-1);
                }else{
                    unique.splice(i,1);
                    i--;
                }
            }
			unique.reverse()
		}
    return res;
}
sortString(  s = "aaaabbbbcccc")

QUESTION


1389. Create Target Array in the Given Order
Easy

Given two arrays of integers nums and index. Your task is to create target array under the following rules:

Initially target array is empty.
From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
Repeat the previous step until there are no elements to read in nums and index.
Return the target array.

It is guaranteed that the insertion operations will be valid.

Example 1:
Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]
Output: [0,4,1,3,2]
Explanation:
nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]

Example 2:
Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]
Output: [0,1,2,3,4]
Explanation:
nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]

Example 3:
Input: nums = [1], index = [0]
Output: [1]



ANSWER



var createTargetArray = function(nums, index) {
   let target = [];
   for(let i=0; i<nums.length; i++){
      target.splice(index[i], 0, nums[i])
   }
   return target 
};
createTargetArray( nums = [1], index = [0])

1400-1499

QUESTION


1417. Reformat The String
Easy
Given alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.
Return the reformatted string or return an empty string if it is impossible to reformat the string.

Example 1:
Input: s = "a0b1c2"
Output: "0a1b2c"
Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.

Example 2:
Inut: s = "leetcode"
Output: ""
Explanation: "leetcode" has only characters so we cannot separate them by digits.

Example 3:
Input: s = "1229857369"
Output: ""
Explanation: "1229857369" has only digits so we cannot separate them by characters.

Example 4:
Input: s = "covid2019"
Output: "c2o0v1i9d"

Example 5:
Input: s = "ab123"
Output: "1a2b3"


ANSWER

  
   my answer 
  var reformat = function(s) {
  let len = s.length, i=0 , charStr='', numStr='', res='';
  if(len===1) return s
  else if(len<1|| len>500|| !([a-z]).test(s)|| !([0-9]).test(s)) return ''
  for(e of s){
    if(isNaN(e)) charStr=charStr+e
    else numStr=numStr+e
  }
  let nLen=numStr.length, cLen=charStr.length; 
  let tackChar =()=>{ !charStr? res='' : res+=charStr[0], charStr=charStr.substring(1)}
  let tackNum = ()=> {!numStr? res='' :res+=numStr[0], numStr=numStr.substring(1)}
  for(i in s){

   if(i<1) if(cLen>nLen) tackChar(); else tackNum(); 
   else if(!isNaN(res[i-1])) tackChar();
   else tackNum();
  }
  return res
  }
leetcode answer 
    var reformat = function(s) {
  let cArr = [...s].filter(e => isNaN(e))
	let nArr = [...s].filter(e => !isNaN(e))
  let cLen = cArr.length, nLen = nArr.length;
  if(Math.abs(nLen-cLen)>1) return ''
  let ifCArr = cLen > nLen ? cArr : nArr;
  let ifNArr = cLen > nLen ? nArr : cArr;
  	return ifCArr.reduce((a, c, i) => {
		return a + c + (ifNArr[i] || '')
	}, '')
  }

  reformat( s = "ec"); 
  
QUESTION


1431. Kids With the Greatest Number of Candies
Easy
Share
Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

Example 1:
Input: candies = [2,3,5,1,3], extraCandies = 3
Output: [true,true,true,false,true] 
Explanation: 
Kid 1 has 2 candies and if he or she receives all extra candies (3) will have 5 candies --- the greatest number of candies among the kids. 
Kid 2 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 
Kid 3 has 5 candies and this is already the greatest number of candies among the kids. 
Kid 4 has 1 candy and even if he or she receives all extra candies will only have 4 candies. 
Kid 5 has 3 candies and if he or she receives at least 2 extra candies will have the greatest number of candies among the kids. 

Example 2:
Input: candies = [4,2,1,1,2], extraCandies = 1
Output: [true,false,false,false,false] 
Explanation: There is only 1 extra candy, therefore only kid 1 will have the greatest number of candies among the kids regardless of who takes the extra candy.
Example 3:

Input: candies = [12,1,12], extraCandies = 10
Output: [true,false,true]


ANSWER

var kidsWithCandies = function(candies, extraCandies) {
 return candies.map(val => { return val + extraCandies >= Math.max(...candies); });
};
kidsWithCandies( candies = [2,3,5,1,3], extraCandies = 3)
Output : [ true, true, true, false, true ]

QUESTION


1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
Easy
Given a sentence that consists of some words separated by a single space, and a searchWord.
You have to check if searchWord is a prefix of any word in sentence.

Return the index of the word in sentence where searchWord is a prefix of this word (1-indexed).
If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

A prefix of a string S is any leading contiguous substring of S.

Example 1:
Input: sentence = "i love eating burger", searchWord = "burg"
Output: 4
Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

Example 2:
Input: sentence = "this problem is an easy problem", searchWord = "pro"
Output: 2
Explanation: "pro" is prefix of "problem" which is the 2nd and the 6th word in the sentence, but we return 2 as it's the minimal index.

Example 3:
Input: sentence = "i am tired", searchWord = "you"
Output: -1
Explanation: "you" is not a prefix of any word in the sentence.

Example 4:
Input: sentence = "i use triple pillow", searchWord = "pill"
Output: 4

Example 5:
Input: sentence = "hello from the other side", searchWord = "they"
Output: -1


ANSWER


my answer correct 


var isPrefixOfWord = function(sentence, searchWord) {
 sentence = sentence.split(' ')
  let str='', k=0, index=-1;
  for(e of sentence){
    for(j of e){
    if(j===searchWord[k]) str+=j, index=sentence.indexOf(e)+1
    k++;
  }
  if(str!=searchWord) str='', index=-1, k=0;
  else if(str===searchWord) return index
  }
return index                                                
};         

leetcode answer 
var isPrefixOfWord = function(sentence, searchWord) {
	const find = sentence.split(' ').findIndex(str => str.startsWith(searchWord))
	return ~find ? find + 1 : find
};
isPrefixOfWord( sentence = "this problem is an easy problem", searchWord = "pro")



QUESTION


1470. Shuffle the Array
Easy
  Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
  Return the array in the form [x1,y1,x2,y2,...,xn,yn].
Example 1:
  Input: nums = [2,5,1,3,4,7], n = 3
  Output: [2,3,5,4,1,7] 
  Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
Example 2:
  Input: nums = [1,2,3,4,4,3,2,1], n = 4
  Output: [1,4,2,3,3,2,4,1]
Example 3:
  Input: nums = [1,1,2,2], n = 2
  Output: [1,2,1,2]
    nums.splice(0, z)
    console.log(nums)
 
 

ANSWER
 
var shuffle = function(nums, n) {
    let shuffle = [];
    let j = 0;
    for (let i = 0; i < n; i++) {
        [shuffle[j], shuffle[j + 1]] = [nums[i], nums[n + i]];
        j += 2;
    } 
    return shuffle;
};
shuffle(nums=[2,5,1,3,4, 7], n = 3);


QUESTION
    

1480. Running Sum of 1d Array

Easy
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i])
Return the running sum of nums.

Example 1:
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

Example 2:
Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

Example 3:
Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 
Constraints:
1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6



ANSWER
 
var runningSum = function(nums) {
let sum = 0;
let runSum = [];
for(const x in nums){
sum+=parseFloat(nums[x]);
runSum.push(sum);
}
return runSum;
};
1500-1599

QUESTION


1512. Number of Good Pairs
Easy
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.

Example 1:
Input: nums = [1,2,3,1,1,3]  42 2 +1 + 1 v
Output: 4                
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

Example 2:
Input: nums = [1,1,1,1] 1+1+1+1 = 4 + 2 
Output: 6
Explanation: Each pair in the array are good.

Example 3:
Input: nums = [1,2,3]
Output: 0


ANSWER


my answer correct 

var numIdenticalPairs = function(nums) {
  let result = 0
  nums.forEach((e, i) => {
    i = nums.indexOf(e, i+1)
    while(i>0) {
      result++
      i = nums.indexOf(e, i+1)
    }
  })
  return result
};
numIdenticalPairs( nums = [1,2,3,1,1,3])

QUESTION


1662. Check If Two String Arrays are Equivalent
Easy

Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.

A string is represented by an array if the array elements concatenated in order forms the string.

Example 1:
Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
Output: true
Explanation:
word1 represents string "ab" + "c" -> "abc"
word2 represents string "a" + "bc" -> "abc"
The strings are the same, so return true.

Example 2:
Input: word1 = ["a", "cb"], word2 = ["ab", "c"]
Output: false
Example 3:

Input: word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]
Output: true



ANSWER



var arrayStringsAreEqual = function(word1, word2) {
  return word1.join('') === word2.join('') ? true : false 
};
arrayStringsAreEqual(word1 = ["a", "cb"], word2 = ["ab", "c"])


QUESTION


1486. XOR Operation in an Array
Easy
Given an integer n and an integer start.
Define an array nums where nums[i] = start + 2i (0-indexed) and n == nums.length.
Return the bitwise XOR of all elements of nums.

Example 1:
Input: n = 5, start = 0
Output: 8
Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.
Where "^" corresponds to bitwise XOR operator.

Example 2:
Input: n = 4, start = 3
Output: 8
Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.

Example 3:
Input: n = 1, start = 7
Output: 7

Example 4:
Input: n = 10, start = 5
Output: 2
 

ANSWER

var xorOperation = function(n, start) {
    let x;
    for(let i = 0; i < n; i++) {
      x = x ^ start + 2i
    }
    return x
};
xorOperation(  n = 4, start = 3)

QUESTION


1528. Shuffle String
Easy
 Given a string s and an integer array indices of the same length.
 The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
 Return the shuffled string.
Example 1:
  Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
  Output: "leetcode"
  Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
Example 2:
  Input: s = "abc", indices = [0,1,2]
  Output: "abc"
  Explanation: After shuffling, each character remains in its position.
Example 3:
  Input: s = "aiohn", indices = [3,1,4,2,0]
  Output: "nihao"
Example 4:
  Input: s = "aaiougrt", indices = [4,0,2,6,7,3,1,5]
  Output: "arigatou"
Example 5:
  Input: s = "art", indices = [1,0,2]
  Output: "rat"
   


ANSWER
 


const restoreString = (s, arr) => (
    arr.reduce((accumulator, currentValue, index) => {
        accumulator[currentValue] = s[index];
        return accumulator;
    }, []).join("")
);

var restoreString = function(s, arr) {
let x = s.split('');
let result = [];
for (let i = 0; i < s.length; i++) {
  result[arr[i]] = x[i]
}
return result.join('')
};

restoreString(s = "aiohn", arr = [3,1,4,2,0])
1600-1699
 
 
QUESTION


1672. Richest Customer Wealth
Easy
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.


Example 1:
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Example 2:
Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

Example 3:
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17



ANSWER


var maximumWealth = function(nestArr) {
  let sumsArr = nestArr.map(arr => arr.reduce((a, b) => a + b))
 return Math.max(...sumsArr);
};
maximumWealth(nestedArr = [[1,5],[7,3],[3,5]]);


QUESTION


1672. Richest Customer Wealth
Easy
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

Example 1:
Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

Example 2:
Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation: 
1st customer has wealth = 6
2nd customer has wealth = 10 
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

Example 3:
Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17



ANSWER



var maximumWealth = function(nestArr) {
  let sumsArr = nestArr.map(arr => arr.reduce((a, b) => a + b))
 return Math.max(...sumsArr);
};
maximumWealth(nestedArr = [[1,5],[7,3],[3,5]]);

1700-1799

QUESTION

1700. Number of Students Unable to Eat Lunch
Easy

The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
Otherwise, they will leave it and go to the queue's end.
This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.


Example 1:

Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
Output: 0 
Explanation:
- Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
- Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
- Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
- Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
- Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
Hence all students are able to eat.
Example 2:

Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
Output: 3



ANSWER

var countStudents = function (students, sandwiches) {
let diff =0;
let aNum =parseFloat(students.sort().join(''));
let bNum =parseFloat(sandwiches.sort().join(''));
let aArr = aNum.toString().split('');
let bArr = bNum.toString().split('');
let r1 = ((students.length)-(aArr.length));
let r2 = ((sandwiches.length)-(bArr.length));
diff+=Math.abs(r1-r2);
diff+=Math.abs(aArr.length-bArr.length)
if(diff>1){
  diff+=1}

return diff;
};



QUESTION


1790. Check if One String Swap Can Make Strings Equal
Easy
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.
Example 1:
  Input: s1 = "bank", s2 = "kanb"
  Output: true
  Explanation: For example, swap the first character with the last character of s2 to make "bank".
Example 2:
  Input: s1 = "attack", s2 = "defend"
  Output: false
  Explanation: It is impossible to make them equal with one string swap.
Example 3:
  Input: s1 = "kelb", s2 = "kelb"
  Output: true
  Explanation: The two strings are already equal, so no string swap operation is required.
Example 4:
  Input: s1 = "abcd", s2 = "dcba"
  Output: false
 

ANSWER
 

#1
var areAlmostEqual = function (s1, s2) {
  let miss =0;
 let one = s1.split('');
  let two = s2.split('');
  one.forEach((i, j)=> i!=two[j] ? miss=miss+1 : '')
  if(miss!=2 && miss!=0) return false
let obj1 = one.reduce((acc, i) => {
     if(!acc[i]) 
     acc[i]= 0; 
     acc[i]++;                   
    return acc;   
    }, {}
   );

let obj2 = two.reduce((acc, i) => {
    if(!acc[i]) 
     acc[i]= 0; 
     acc[i]++;                   
    return acc;   
    }, {}
   );
    if(Object.keys(obj1).sort().toString()!= Object.keys(obj2).sort().toString() ){return false}
    return true
}
#2

var areAlmostEqual = function(s1, s2) {
    if(s1 === s2) return true;
    let result='';
    
    for(let i=0;i<s1.length;i++)
        if(s1[i] !== s2[i]) result += s1[i]+s2[i];        
    
    return result.length === 4 && result[0]===result[3] && result[1] === result[2];
};
#3
var areAlmostEqual = function(s1, s2) {
    if(s1 === s2) return true;
    let miss = 0;
    for(var i = 0; i < s1.length; i++) {
        if(s1[i] !== s2[i]) {
            miss++;
        }
        if(!s2.includes(s1[i])) {
            return false;
        }
    }
        return (miss === 0 || miss === 2);
};
areAlmostEqual(s1 = "bank", s2 = "bank")



ANSWER
 
var countStudents = function (students, sandwiches) {
  let shift = students.length  sandwiches.length;
  for (i = 0; i < shift; i++) {
    if (students[0] != sandwiches[0]) {
      students.push(students.splice(0, 1)[0]);
    } else {
      sandwiches.splice(0, 1);
      students.splice(0, 1);
    }
  }
  return students.length;
};
countStudents([0,0,0,1,1,1,1,0,0,0], [1,0,1,0,0,1,1,0,0,0]);
1800-1899

QUESTION


1800. Maximum Ascending Subarray Sum

Given an array of positive integers nums, return the maximum possible sum of an ascending subarray in nums.

A subarray is defined as a contiguous sequence of numbers in an array.

A subarray [numsl, numsl+1, ..., numsr-1, numsr] is ascending if for all i where l <= i < r, numsi < numsi+1. Note that a subarray of size 1 is ascending.

Example 1:

Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.
Example 2:

Input: nums = [10,20,30,40,50]
Output: 150
Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.
Example 3:

Input: nums = [12,17,15,13,10,11,12]
Output: 33
Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.
Example 4:

Input: nums = [100,10,1]
Output: 100
 

Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100



ANSWER
 
var maxAscendingSum = function (nums) {
  let sum = 0;
  let count = [];
  for (let item = 0; item < nums.length; item++) {
    if (nums[item] < nums[item + 1] && sum >= nums[item] && nums[item] > nums[item - 1]) {
      sum += nums[item];
    } else if (nums[item] <= nums[item - 1] ||(nums[item] < nums[item + 1] && sum >= nums[item])
    ) {
      sum = nums[item];
    } else {
      sum += nums[item];
      count.push(sum);
    }
  }
  return Math.max(...count);
};

maxAscendingSum([12,17,15,13,10,11,12])

QUESTION


1816. Truncate Sentence
Easy

A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each of the words consists of only uppercase and lowercase English letters (no punctuation).

For example, "Hello World", "HELLO", and "hello world hello world" are all sentences.
You are given a sentence s​​​​​​ and an integer k​​​​​​. You want to truncate s​​​​​​ such that it contains only the first k​​​​​​ words. Return s​​​​​​ after truncating it.

Example 1:
Input: s = "Hello how are you Contestant", k = 4
Output: "Hello how are you"
Explanation:
The words in s are ["Hello", "how" "are", "you", "Contestant"].
The first 4 words are ["Hello", "how", "are", "you"].
Hence, you should return "Hello how are you".

Example 2:
Input: s = "What is the solution to this problem", k = 4
Output: "What is the solution"
Explanation:
The words in s are ["What", "is" "the", "solution", "to", "this", "problem"].
The first 4 words are ["What", "is", "the", "solution"].
Hence, you should return "What is the solution".

Example 3:
Input: s = "chopper is not a tanuki", k = 5
Output: "chopper is not a tanuki"


ANSWER

my answer 

var truncateSentence = function(s, k) {
   let ind = [], i, spl = s.split(' ');
  if(spl.length === k) return s;
  function getAllIndexes(arr, val) {
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            ind.push(i);
      return ind;
    }
    getAllIndexes(s, ' ');
    ind=ind.splice(0, k)
  return s.slice(0, ind[ind.length-1])
};

leet code answer 
var truncateSentence = function(s, k) {
    return s.split(" ").slice(0,k).join(" ");
};
 truncateSentence(  s = "Hello how are you Contestant", k = 4)


QUESTION


1832. Check if the Sentence Is Pangram
Easy
A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
Example 1:
Input: sentence = "thequickbrownfoxjumpsoverthelazydog"
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.
Example 2:

Input: sentence = "leetcode"
Output: false


ANSWER
 
var checkIfPangram = function (sentence) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  for (const letter in alphabet) {
   if (sentence.indexOf(alphabet[letter]) < 0) {
     return false;
    }
  }
  return true
};
checkIfPangram("thequickbrownfoxjumpsoverthelazydog");


QUESTION


1844. Replace All Digits with Characters
Easy
You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.
There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.
For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.

Example 1:
Input: s = "a1c1e1"
Output: "abcdef"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('c',1) = 'd'
- s[5] -> shift('e',1) = 'f'

Example 2:
Input: s = "a1b2c3d4e"
Output: "abbdcfdhe"
Explanation: The digits are replaced as follows:
- s[1] -> shift('a',1) = 'b'
- s[3] -> shift('b',2) = 'd'
- s[5] -> shift('c',3) = 'f'
- s[7] -> shift('d',4) = 'h'


ANSWER



var replaceDigits = function(s) {
let toCode, toChar, str='';
   for(let i=0; i<s.length; i++){
     if(!isNaN(s[i])) toCode = s[i-1].charCodeAt(), toChar = String.fromCharCode(toCode+parseInt(s[i])),str+=toChar;
     else str+=s[i]
   }
   return str
};
replaceDigits(s = "a1b2c3d4e")

QUESTION

1848. Minimum Distance to the Target Element
Easy
Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.
Return abs(i - start).

It is guaranteed that target exists in nums.
Example 1:
Input: nums = [1,2,3,4,5], target = 5, start = 3
Output: 1
Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.

Example 2:
Input: nums = [1], target = 1, start = 0
Output: 0
Explanation: nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.

Example 3:
Input: nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
Output: 0
Explanation: Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.
 

Constraints: 1 <= nums.length <= 1000 1 <= nums[i] <= 104 0 <= start < nums.length
target is in nums.

ANSWER
 

var getMinDistance = function(nums, target, start) {
  let mySet = new Set();
  nums.forEach((x)=> x===start | x===target ? mySet.add(x): false);
  console.log(mySet)
};
getMinDistance([1,2,3,4,5], 5, 3)
x===target mySet.add(x)

QUESTION


1854. Maximum Population Year
Easy
You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.
The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.
Return the earliest year with the maximum population.

Example 1:
Input: logs = [[1993,1999],[2000,2010]]
Output: 1993
Explanation: The maximum population is 1, and 1993 is the earliest year with this population.

Example 2:
Input: logs = [[1950,1961],[1960,1971],[1970,1981]]
Output: 1960
Explanation: 
The maximum population is 2, and it had happened in years 1960 and 1970.
The earlier year between them is 1960.


ANSWER

const maximumPopulation = (logs) => {
    let m = new Map();
    for (const [birth, death] of logs) {
        for (let year = birth; year < death; year++) {
            m.set(year, m.get(year) + 1 || 1);
        }
    }
    m = new Map([...m].sort((a, b) => {
        if (a[1] == b[1]) return a[0] - b[0];  if population same, smaller year comes first
        return b[1] - a[1];  sort by population decreasing
    }));
    return m.keys().next().value;
};
maximumPopulation( logs = [[1982,1998],[2013,2042],[2010,2035],[2022,2050],[2047,2048]]);


QUESTION


1859. Sorting the Sentence
Easy
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.
A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.
For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.

Example 1:
Input: s = "is2 sentence4 This1 a3"
Output: "This is a sentence"
Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.
Example 2:
Input: s = "Myself2 Me1 I4 and3"
Output: "Me Myself and I"
Explanation: Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers..

ANSWER

var sortSentence = function(s) {
return s.split(' ').sort((a,b) => a[a.length-1] - b[b.length-1]).join('').replace([0-9]g, ' ').trim();

};
sortSentence("is2 sentence4 This1 a3")

QUESTION


1863. Sum of All Subset XOR Totals
Easy
The XOR total of an array is defined as the bitwise XOR of all its elements, or 0 if the array is empty.

For example, the XOR total of the array [2,5,6] is 2 XOR 5 XOR 6 = 1.
Given an array nums, return the sum of all XOR totals for every subset of nums. 

Note: Subsets with the same elements should be counted multiple times.

An array a is a subset of an array b if a can be obtained from b by deleting some (possibly zero) elements of b.

Example 1:
Input: nums = [1,3]
Output: 6
Explanation: The 4 subsets of [1,3] are:
- The empty subset has an XOR total of 0.
- [1] has an XOR total of 1.
- [3] has an XOR total of 3.
- [1,3] has an XOR total of 1 XOR 3 = 2.
0 + 1 + 3 + 2 = 6

Example 2:
Input: nums = [5,1,6]
Output: 28
Explanation: The 8 subsets of [5,1,6] are:
- The empty subset has an XOR total of 0.
- [5] has an XOR total of 5.
- [1] has an XOR total of 1.
- [6] has an XOR total of 6.
- [5,1] has an XOR total of 5 XOR 1 = 4.
- [5,6] has an XOR total of 5 XOR 6 = 3.
- [1,6] has an XOR total of 1 XOR 6 = 7.
- [5,1,6] has an XOR total of 5 XOR 1 XOR 6 = 2.
0 + 5 + 1 + 6 + 4 + 3 + 7 + 2 = 28

Example 3:
Input: nums = [3,4,5,6,7,8]
Output: 480
Explanation: The sum of all XOR totals for every subset is 480.

subsetXORSum(nums='molly')


ANSWER


var subsetXORSum = function(nums) {
 let bits = 0, ans, ln=nums.length;
    for (let i=0; i < ln; ++i)
        bits |= nums[i]
        ans = bits  Math.pow(2, ln-1);
        return ans;
    ;
};
subsetXORSum(nums = [5,1,6]);

QUESTION


1880. Check if Word Equals Summation of Two Words
Easy
The letter value of a letter is its position in the alphabet starting from 0 (i.e. 'a' -> 0, 'b' -> 1, 'c' -> 2, etc.).

The numerical value of some string of lowercase English letters s is the concatenation of the letter values of each letter in s, which is then converted into an integer.

For example, if s = "acb", we concatenate each letter's letter value, resulting in "021". After converting it, we get 21.
You are given three strings firstWord, secondWord, and targetWord, each consisting of lowercase English letters 'a' through 'j' inclusive.

Return true if the summation of the numerical values of firstWord and secondWord equals the numerical value of targetWord, or false otherwise.

 

Example 1:

Input: firstWord = "acb", secondWord = "cba", targetWord = "cdb"
Output: true
Explanation:
The numerical value of firstWord is "acb" -> "021" -> 21.
The numerical value of secondWord is "cba" -> "210" -> 210.
The numerical value of targetWord is "cdb" -> "231" -> 231.
We return true because 21 + 210 == 231.
Example 2:

Input: firstWord = "aaa", secondWord = "a", targetWord = "aab"
Output: false
Explanation: 
The numerical value of firstWord is "aaa" -> "000" -> 0.
The numerical value of secondWord is "a" -> "0" -> 0.
The numerical value of targetWord is "aab" -> "001" -> 1.
We return false because 0 + 0 != 1.

Example 3:
Input: firstWord = "aaa", secondWord = "a", targetWord = "aaaa"
Output: true
Explanation: 
The numerical value of firstWord is "aaa" -> "000" -> 0.
The numerical value of secondWord is "a" -> "0" -> 0.
The numerical value of targetWord is "aaaa" -> "0000" -> 0.
We return true because 0 + 0 == 0.

ANSWER



first answer correct
var isSumEqual = function(firstWord, secondWord, targetWord) {
   let fCode='', sCode=''; tCode='', ln=0, i=0;
    ln = Math.max(firstWord.length, secondWord.length, targetWord.length)
    while(i<ln){
    firstWord[i] ? fCode+=firstWord.charCodeAt(i)-97 : '';
    secondWord[i] ? sCode+=secondWord.charCodeAt(i)-97: '';
    targetWord[i] ? tCode+=targetWord.charCodeAt(i)-97 : '';
    i++;
    }
    if((+fCode)+(+sCode)===(+tCode)) return true
    return false
};
second answer correct 
var isSumEqual = function(firstWord, secondWord, targetWord) {
   let sum = (str) => {
     let res = '';
      for(let i in str){ res+=str.charCodeAt(i)-97}
      return +res
    }
    return sum(firstWord)+sum(secondWord)===sum(targetWord) 
};
isSumEqual( firstWord = "aaa", secondWord = "a", targetWord = "aaaa");

```