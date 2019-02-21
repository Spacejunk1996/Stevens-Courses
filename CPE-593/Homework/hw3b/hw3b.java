import java.util.*;
import java.io.*;


class hw3b {
    
    public static void swap(int[] A, int m, int n) {
        int Temp = 0;
        Temp = A[m];
        A[m] = A[n];
        A[n] = Temp;
    }

    public static void printArray(int[] A) {
        for (int i = 0; i < A.length; i++) {
            System.out.print(A[i] + " ");
        }
    }

    public static int[]q(int[] A, int l, int r) {
        quick(A, l, A.length - 1);
        return A;
    }

    public static void quick(int[] A, int l, int r) {
        int index;
        index = quickSort(A, 0, r);
        if (A.length > 1) {
            if (l < index - 1)
                quick(A, l, index - 1);
            if (index < r) 
                quick(A, index, r);
        }
    }

    public static int quickSort(int[]A, int l, int r) {
        
        //Random rand = new Random();
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

     public static void main(String[] args) throws IOException {
        
        FileInputStream fileReader = new FileInputStream("hw3.dat");
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(fileReader));
        String Str1, Str2;
        Str1 = bufferedReader.readLine();
        Str2 = bufferedReader.readLine();
        int num = Integer.parseInt(Str1);
        String[] integerStrings = Str2.split(" ");
        int[] numbers = new int [num];
        for (int i = 0; i < num; i++) {
            numbers[i] = Integer.parseInt(integerStrings[i]);
        }
        int [] result = q(numbers, 0, numbers.length);
        printArray(result);
        fileReader.close();
    }
}