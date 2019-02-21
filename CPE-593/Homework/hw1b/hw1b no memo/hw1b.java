import java.util.*;
import java.time.*;


public class hw1b {
    public static double choose(int n, int r) {
        double result = 0;
        int helper = n-r;
        result = factorial(n)/(factorial(r) * factorial(helper));
		return result;
	}

    public static double factorial(int num) {
        if (num < 0) {
            throw new IllegalArgumentException("num must be >= 0");
        }
        else if (num == 0)
            return 1;
        else 
            return num * factorial(num - 1);
    }

	public static void main(String[] args) {
		int numTrials = 100000000;
		Random rnd = new Random(0);
		for (int i = 0; i < numTrials; i++) {
			int n = rnd.nextInt(501);
            int r = rnd.nextInt(n-1);
            choose(n,r);
        }
	}
}
