
/*
The approach for DFS is
Iterate through every element in the grid. If the element is a 1, call the DFS function and increment the counter for the number of islands by 1.
Within the DFS:
Check if the element is out of bounds / not equal to 1. If it is, return.
Set the element to equal '0' (so that it is never counted again, you are removing the island)
Call the DFS in all 4 directions
Essentially, whenever you find an island, you remove it.
*/
class numIslandsDFSSolution {
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
        if( a < 0 || b < 0 || a >= x || b >= y || grid[a][b] != '1') 
            return;
        
        // set the '1' to be '0' so not recounted
        grid[a][b] = '0';
        
        // recurse in all 4 directions
        int changeX[4] = {0,-1,1,0}, changeY[4] = {-1,0,0,1};
        for(int i = 0; i < 4; i++)  
            findIsland(a + changeX[i], b + changeY[i], grid);
      
    }
};

/*
A similar approach can be used for BFS (removing islands by setting elements to '0'). The code for BFS is below:
*/
class numIslandsBFSSolution {
public:
    int numIslands(vector<vector<char>>& grid) {
        int x = grid.size(), y = 0, numIslands = 0;
        if(x) y = grid[0].size();
        
        // iterate through grid 
        for(int i = 0; i < x; i++){
            for(int j = 0; j < y; j++){
                if(grid[i][j] == '1'){
                    numIslands++;
                    
                    // bfs
                    queue<pair<int,int>> q;
                    q.push(make_pair(i,j));
                    
                    while(!q.empty()){
                        pair<int,int> top = q.front();
                        q.pop();
                        int a = top.first; int b = top.second;
                        
                        // if out of bounds or not equal to 1
                        if( a < 0 || b < 0 || a >= x || b >= y || grid[a][b] != '1') 
                            continue;
                        else{
                            // set current position to '0' and add all 4 directions to queue
                            grid[a][b] = '0';
                            int changeX[4] = {0,-1,1,0}, changeY[4] = {-1,0,0,1};
                            for(int i = 0; i < 4; i++)  
                                q.push(make_pair(a + changeX[i], b + changeY[i]));
                        }
                    }
                }
            }
        }
        return numIslands;
    }
};
