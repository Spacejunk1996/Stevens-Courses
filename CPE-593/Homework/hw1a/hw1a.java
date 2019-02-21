import java.util.*;
import java.util.Scanner;


public class hw1a {
    public void improved_Eratosthenes(int Num) {
        int result = 0;
        boolean[] Array = new boolean[Num + 1];
        for (int i = 1; i <= Num; i++)
            Array[i] = true;
        for (int j = 2; j <= Math.sqrt(Num); j++) {
            for (int p = 2 * j; p <= Num; p += j) {
                Array[p] = false;
            }
        }
        for (int k = 2; k <= Num; k++) {
            if (Array[k])
                result ++;
        }
        System.out.print("The number of prime number is: ");
        System.out.print(result);
        System.out.println(" ");
    }

    public static void main(String[] args) {
    // write your code here
        Scanner reader = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int n = reader.nextInt();
        hw1a h = new hw1a();
        h.improved_Eratosthenes(n);
        reader.close();
    }
}