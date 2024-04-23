/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for(let i= 0;i < nums.length;i++){
       let digit = nums[i];

       for(let j = 1 + i; j<nums.length;j++){

            if(digit + nums[j] == target ){
                console.log(digit + nums[j])
                return [i, j]

            }
        }

    } 

};

let nums = [3,2,4];
let target = 6;

console.log(twoSum(nums,target))