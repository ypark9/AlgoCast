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
//
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
