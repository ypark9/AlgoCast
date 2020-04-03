#include <set>
using namespace std;
// The idea is when you see the circulation see previous value again. 
// This means it never be happy number like... 
// if you see the same problem over and over, there is a problem to be happy in your life. Fix it.
class HappyNumberSolution {
public:
  int SumDigits(int num) {
    int sum = 0;
    while (num) {
        int digit = num % 10;
        num = num / 10;
        sum += digit * digit;
    }
    return sum;
  }
  
    bool isHappy(int n) {
      int num = n ;
      set<int> st;
      while (n > 1 && st.find(num) == st.end()) {
        st.insert(num);
        num = SumDigits(num);
      }

      return num == 1;
    }
};


//DP
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
