import java.util.*;


class gcd {
    public static int gcd(int m, int n) {
        if (n == 0)
            return m;
        return gcd(n, m % n);
    }
    public static void main(String[] args) {
        int n = gcd(12,8);
        System.out.print(n);
    }
}