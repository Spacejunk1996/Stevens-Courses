import java.util.*;
import java.time.*;
import java.lang.*;


/*
	output should be:
    k = 2  took: 46 ms;
    k = 5  took: 36 ms;
    k = 7  took: 36 ms;
    k = 10 took: 49 ms;
    k = 15 took: 50 ms;
    k = 20 took: 48 ms;
    k = 25 took: 49 ms;
	...
	best time k = 5 or 7 took 36 ms;
*/
class OptimizedQuicksort {
    static int k = 7;
    public static void swap(int[] A, int m, int n) {
        int temp;
        temp = A[m];
        A[m] = A[n];
        A[n] = temp;
    }

    public static int[] quicksort(int[] A, int l, int r) {
        quick(A, l, A.length - 1);
        return A;
    }

    public static void quick(int[] A, int l, int r) {
        int index;
        index = paration(A, l, r);
        if (A.length > 1) {
            if (l < index - 1) {
                if (index - 1 - l > k)
                    quick(A, l, index - 1);
            }
            if (index < r) {
                if (r - index > k)
                    quick(A, index, r);
            }
        }
    }

    public static int paration(int[] A, int l, int r) {
        int pivot = A[(l+r)/2];
        while (l < r) {
            while (A[l] < pivot) 
                l++;
            while (A[r] > pivot)
                r--;
            if (l <= r) {
                swap(A, l, r);
                l++;
                r--;
            }
        }
        return l;
    }

    public static int[] insertionsort(int[] A) {
        for (int i = 1; i < A.length; i++) {
            int j = i;
            int temp = A[j];
            while(j > 0 && A[j - 1] > temp) {
                swap(A, j, j-1);
                j--;
            }
        }
        printArray(A);
        return A;
    }

    public String toString(int[] A) {
        StringBuilder b = new StringBuilder();
        for (int i = 0; i < A.length; i ++) {
            b.append(A[i]).append(' ');
        }
        return b.toString();
    }

    public static void printArray(int[] A) {
        for (int i = 0; i < A.length; i++) {
            System.out.print(A[i] + " ");
        }
    }
    public static void main(String [] args) {
        // int[] A = new int[100];
        // Random rand = new Random();
        // for(int i = 0; i <  A.length; i++) {
        //     A[i] = rand.nextInt(100);
        //     System.out.print(A[i] + ",");
        // }
        long startTime = System.currentTimeMillis(); 

        int[] A = {33,77,8,79,97,77,78,81,78,6,
                   56,0,88,46,53,73,57,42,38,68,
                   1,75,67,22,41,66,2,12,26,54,
                   93,91,81,33,54,36,85,56,97,
                   30,5,77,55,12,66,4,38,9,74,
                   38,30,46,62,24,94,93,36,76,
                   48,13,16,19,0,91,20,40,15,24,
                   64,82,9,13,36,67,8,51,99,73,96,
                   53,11,38,81,40,2,40,40,78,91,68,
                   86,3,51,43,18,60,37,51,90,59};
        System.out.println("K: " + k);
        quicksort(A, 0, A.length - 1);
        insertionsort(A);
        long endTime   = System.currentTimeMillis(); 
        long TotalTime = endTime - startTime;       
        System.out.println("TotalTime: " + TotalTime + " ms");
    }
}