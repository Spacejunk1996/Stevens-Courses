// Fermat's Little Theorem
// let p be a prime and b be an integer 
// Then, b^(p-1) mod p == 1.
import java.util.*;


class Fermats {
    //n = m - 1
    public static int pow(int x, int n, int m) {
        int prod = 1;
        while (n > 0) {
            if (n % 2 != 0) {
                prod = (prod * x) % m;
            }
            x = (x * x) % m;
            n = n / 2;
        }
        return prod;
    }
    public static void main(String[] args) {
        Random rand = new Random();
        // int num1 = rand.nextInt(10);
        int num1 = 17;
        // int num2 = rand.nextInt(97) + 3;
        int num2 = 561;
        int num3 = num2 - 1;
        if (pow(num1, num3, num2) == 1) {
            System.out.println("num2: " + num2 + " probablly is a prime number");
        }
        else 
            System.out.println("num2: " + num2 + " definitily is not a prime number");
    }
}