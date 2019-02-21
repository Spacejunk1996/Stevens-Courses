import java.util.*;
import java.io.*;


public class hw3a {

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

    public static void readFile() {

    }

    public static int[] insertionSort(int[] A) {
        
        for (int i = 1; i < A.length; i++) {
            int j = i;
            int temp = A[j];
            while (j > 0 && A[j - 1] > temp) {
                swap(A, j - 1, j);
                j --;
            } 
        }
        // for (int i = 0; i < A.length; i++) {
        //     System.out.print(A[i] + ',');
        // }
        return A;

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

        int [] result = insertionSort(numbers);
        printArray(result);
        fileReader.close();
    }
}
