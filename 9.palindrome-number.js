/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = x;
    let reversed = 0;
    if(x > 0){
        while(x !== 0){
            reversed = reversed * 10 + Math.floor(x%10);
            x = Math.floor(x/10);
        }
    
        if(temp === reversed){
            return true;
        }else{
            return false;
        }
    }else if(x === 0){
        return true;
    }else{
        return false;
    }
};
// @lc code=end

