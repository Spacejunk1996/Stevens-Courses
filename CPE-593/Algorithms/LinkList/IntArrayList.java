import sun.jvm.hotspot.utilities.IntArray;

public class IntArrayList {
    private int[] data;
    private int size;
    private final void checkGrow() {

    }
    public static void testIntArray(int n) {
        IntArrayList a = new IntArrayList (n);
        for (int i = 0; i < n; i++)
            a.addEnd(i);
    }

    public static void testArrayList(int n) {
        ArrayList<integer> a  = new ArrayList<>(n);
        for (int i = 0; i < n; i++)
            a.addEnd(i);
    }
    public static void main (String[] args) {
        final int n = 1000000;
        
    }
}