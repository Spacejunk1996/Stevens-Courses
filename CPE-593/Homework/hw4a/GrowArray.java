import java.io.*;
import java.util.*;
import java.lang.reflect.Field;
class GrowArray {
    static int findCapacity(ArrayList<Integer> al) throws Exception {
 
        Field field = ArrayList.class.getDeclaredField("elementData");
 
        field.setAccessible(true);
 
        return ((Object[]) field.get(al)).length;
 
    }
    public static void main(String[] args) throws IOException{
        int[][] arr = new int[16][16];
        ArrayList<Integer> list[][];
        list = new ArrayList[16][16];
        for(int i = 0; i < arr.length; i++){ 
            for (int j = 0; j < arr.length; j++) {
                list[i][j] = new ArrayList(); 
            }
        }
        
        FileInputStream fileReader = new FileInputStream("convexhullpoints.dat");
        FileInputStream fileReader2 = new FileInputStream("convexhullpoints.dat");
        BufferedReader bufferedReader1 = new BufferedReader(new InputStreamReader(fileReader));
        BufferedReader bufferedReader2 = new BufferedReader(new InputStreamReader(fileReader2));
        
        double x_min = 999.0, x_max = 0.0, y_min = 999.0, y_max = 0.0;   
        int num = 4;
        
        String line1 = null;
        while((line1 = bufferedReader1.readLine()) != null) {
            String[] integerStrings = line1.split(" ");
            double[] numbers = new double[integerStrings.length];
            for (int i = 0; i < integerStrings.length; i ++) {
                numbers[i] = Double.parseDouble(integerStrings[i]);
            }
            if (numbers[0] < x_min)
                x_min = numbers[0];
            if (numbers[0] > x_max)
                x_max = numbers[0];
            if (numbers[1] < y_min)
                y_min = numbers[1];
            if (numbers[1] > y_max)
                y_max = numbers[1];
        }
        
        String line2 = null;
        while((line2 = bufferedReader2.readLine()) != null) {
            String[] intStrings = line2.split(" ");
            double [] Num = new double[intStrings.length];
            for (int i = 0; i < intStrings.length; i ++) {
                Num[i] = Double.parseDouble(intStrings[i]);
                // System.out.print(Num[i]);
            }
            int i = (int)((Num[1] - y_min)/(y_max - y_min)) * 15;
            int j = (int)((Num[0] - x_min)/(x_max - x_min)) * 15;
            // System.out.print(j);
            //grow array
            list[i][j].add(1);
            // if (list[i][j].size() <= findCapacity(list[i][j]))
            //     list[i][j].ensureCapacity(1);
        }

        
        System.out.println("The number of points of each box: ");
        for (int m = 0; m < 16; m++) {
            for (int n = 0; n < 16; n++) {
                System.out.println("row: " + m + " column: " + n);
                System.out.println(list[m][n].size());
            }
        }
        bufferedReader1.close();
        bufferedReader2.close();
    } 
}