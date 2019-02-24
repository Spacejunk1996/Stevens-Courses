import java.util.*;


class Shuffle {
    public static void main(String[] args) {
        // Create an array
        Integer[] array = new Integer[]{33,77,8,79,97,77,78,81,78,6,
                                        56,0,88,46,53,73,57,42,38,68,
                                        1,75,67,22,41,66,2,12,26,54,
                                        93,91,81,33,54,36,85,56,97,
                                        30,5,77,55,12,66,4,38,9,74,
                                        38,30,46,62,24,94,93,36,76,
                                        48,13,16,19,0,91,20,40,15,24,
                                        64,82,9,13,36,67,8,51,99,73,96,
                                        53,11,38,81,40,2,40,40,78,91,68,
                                        86,3,51,43,18,60,37,51,90,59};
        
        // Shuffle the elements in the array
        List<Integer> l = Arrays.asList(array);
        System.out.println("Before shuffle");
        System.out.println(l);
        
        Collections.shuffle(l);
        System.out.println("After shuffle");
        System.out.println(l);
    }
}
