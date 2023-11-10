/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0){
        return "";
    }

    strs.sort();
    let firstStr = strs[0];
    let lastStr = strs[strs.length - 1];

    let commonPrefix = "";
    for(let i = 0; i < strs.length; i++){
        if(firstStr.charAt(i) === lastStr.charAt(i)){
            commonPrefix += firstStr.charAt(i);
        }else{
            break;
        }
    }

    return commonPrefix;
};
// @lc code=end

