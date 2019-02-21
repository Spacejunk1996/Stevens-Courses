import java.util.*;
import java.util.Timer;

public class hw1b {
	static int n = 500;
	static int [][] memo = new int[n][];

	public static int[][] Create_matrix() {

        for (int i = 0; i < memo.length; i++) {
			memo[i] = new int[i + 1];
			
			for (int j = 0; j < memo[i].length; j++) {
				if (i == 0 || j == 0 || i == j) {
				    memo[i][j] = 1;
				} else {
				    memo[i][j] = memo[i - 1][j] + memo[i - 1][j - 1];
				}	
			}
		}
		return memo;
	}

	public static double choose(int n, int r) {

        if (r == 0)
            return 1;
        else if (r == n)
            return 1;
        else 
            return (memo[n-1][r-1] + memo[n-1][r]);
	}

	public static void main(String[] args) {
		long startTime = System.currentTimeMillis();
		Create_matrix();
		int numTrials = 100000000;
		Random rnd = new Random(0);
		for (int i = 0; i < numTrials; i++) {
			int n = rnd.nextInt(501);
			int r = rnd.nextInt(n+1);
			choose(n,r);
		}
		long endTime = System.currentTimeMillis(); 
		System.out.println("The time of the program processing is " + (endTime - startTime) + " ms"); 
	}
}