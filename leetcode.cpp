#include <set>
using namespace std;

//# Happy number
// The idea is when you see the circulation see previous value again. 
// This means it never be happy number like... 
// if you see the same problem over and over, there is a problem to be happy in your life. Fix it.
class HappyNumberSolution {
public:
    int SumDigits(int num) 
    {
      int sum = 0;
      while (num) 
      {
          int digit = num % 10;
          num = num / 10;
          sum += digit * digit;
      }
      return sum;
    }
  
    bool isHappy(int n) 
    {
      int num = n ;
      set<int> st;
      while (n > 1 && st.find(num) == st.end()) 
      {
        st.insert(num);
        num = SumDigits(num);
      }

      return num == 1;
    }
};

//# Max subarray
/*
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/
// DP
class MaxSubArraySolution {
public:
int maxSubArray(vector<int>& nums) {
        int sum = 0, smax = INT_MIN;
        for (int num : nums) {
            sum += num;
            smax = max(smax, sum);
            if (sum < 0) {
                sum = 0;
            }
        }
        return smax;
    }    
};


// # Maximum profit 2
// Check how to interpret the idea of selling and buying 
// to get a difference whenever the next value is bigger than previous.
class maxProfitSolution {
public:
    int maxProfit(vector<int>& prices) {
        int total = 0;
       
        // in case the vector is empty.
        if(prices.size() == 0)
            return total;
      
        for (int i = 0; i < prices.size() - 1; i++) 
        {
            if(i+1 <= prices.size() - 1)
            {
                if (prices[i+1] > prices[i]) 
                    total += prices[i+1] - prices[i];
            }
        }
    
        return total;
    }
};

// # Move zeroes 
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
class MoveZeroesSolution {
public:
    void moveZeroes(vector<int>& nums) {
        int j = 0;
        // move all the nonzero elements advance
        for (int i = 0; i < nums.size(); i++) 
        {
            if (nums[i] != 0) {
                nums[j++] = nums[i];
            }
        }
        //add zeroes n time (the amount of size difference.) 
        for (;j < nums.size(); j++) 
        {
            nums[j] = 0;
        }
    }
};

//
/*
Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]*/
class GroupAnagramsSolution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        unordered_map<string, vector<string>> mp;
        for (string s : strs) {
            string t = s; 
            sort(t.begin(), t.end());
            mp[t].push_back(s);
        }
        vector<vector<string>> anagrams;
        for (auto p : mp) { 
            anagrams.push_back(p.second);
        }
        return anagrams;
    }

};

// Counting Elements
/*
Input: arr = [1,3,2,3,5,0]
Output: 3
Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
*/
class CountingElementsSolution {
public:
    int countElements(vector<int>& arr) {
      int count = 0;
      std::sort(arr.begin(), arr.end());
//      std::ostringstream vts; 
//       if (!arr.empty()) 
//       { 
//         // Convert all but the last element to avoid a trailing "," 
//         std::copy(arr.begin(), arr.end()-1, 
//             std::ostream_iterator<int>(vts, ", ")); 

//         // Now add the last element with no delimiter 
//         vts << arr.back(); 
//       } 
//       std::cout << "npone: " << vts.str() << "\n"<< std::endl;

      for(auto num : arr)
      {
        //sd::cout << "num: " << num << "\n"<< std::endl;
        std::vector<int>::iterator it = std::find(arr.begin(), arr.end(), (num+1));
        if(it != arr.end())
          count ++;
      }
      return count;
    }
};

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
#include <math.h>       /* ceil */

class MiddleNodeSolution {
public:
    ListNode* middleNode(ListNode* head) 
    {
        ListNode *slow = head, *fast = head;
        while (fast && fast->next)
            slow = slow->next, fast = fast->next->next;
        return slow;
    }
};


/*
Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
*/
class BackspaceCompareSolution {
public:
    bool backspaceCompare(string S, string T) {
        string a = "", b = "";
        for(auto c: S)
        {
            c == '#' ? (a.size() > 0 ? a.pop_back() : void()) : a.push_back(c);
        } 
        for(auto c: T) 
        {
            c == '#' ? (b.size() > 0 ? b.pop_back() : void()) : b.push_back(c);
        }
        return a == b;
    }
};

/*
The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.
*/
class DiameterOfBinaryTreeSolution {
public:
    int cal(TreeNode* node, int &d)
    {
        if(node == nullptr) // leaf node's diameter should be 0.
            return 0;
        int lD = cal(node->left, d);
        int rD = cal(node->right, d);
        
        //calculate each node's diameter
        d = max(d, lD + rD);
        
        return 1 + max(lD, rD);
    }
    
    int diameterOfBinaryTree(TreeNode* root) 
    {
        int d = 0;
        cal(root, d);
        return d;
    }
};

/*
Input: [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.
*/
class LastStoneWeightSolution {
public:
int lastStoneWeight(vector<int>& stones) {
     priority_queue<int> pq;
      for(auto i : stones)        
          pq.push(i);
      while(pq.size() > 1)
      {
          int a = pq.top(); 
          pq.pop();
          int b = pq.top(); 
          pq.pop();
          if(a  - b > 0)
              pq.push(a-b);
      }
      return pq.empty() ? 0 : pq.top();  
    }
};

class numIslandsSolution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int x = grid.size(), y = 0, numIslands = 0;
        if(x) y = grid[0].size();
        
        // iterate through grid and call findIsland when grid[i][j] = '1'
        for(int i = 0; i < x; i++){
            for(int j = 0; j < y; j++){
                if(grid[i][j] == '1'){
                    findIsland(i, j, grid);
                    numIslands++;
                }
            }
        }
        return numIslands;
    }
private:
    void findIsland(int a, int b, vector<vector<char>>& grid) {
        int x = grid.size(); int y = grid[0].size();
        
        // if out of bounds or not '1', return
        if( a < 0 || b < 0 || a >= x || b >= y || grid[a][b] != '1') return;
        
        // set the '1' to be '0' so not recounted
        grid[a][b] = '0';
        
        // recurse in all 4 directions
        int changeX[4] = {0,-1,1,0}, changeY[4] = {-1,0,0,1};
        for(int i = 0; i < 4; i++)  findIsland(a + changeX[i], b + changeY[i], grid);
        
    }
};
