//This is a java program to sort numbers using randomized quick sort
import java.util.*;
import java.io.*;
 
public class test
{
    
    public static void main(String[] args) throws IOException
    {
        FileInputStream fileReader = new FileInputStream("hw3.dat");
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(fileReader));

        String Line1;
        String Line2;
        Line1 = bufferedReader.readLine();
        Line2 = bufferedReader.readLine();

        int N = Integer.parseInt(Line1);
        String[] Stringarray = Line2.split(" ");
        int[] numbers = new int[N];
        for(int i = 0; i < N; i++){
            numbers[i] = Integer.parseInt(Stringarray[i]);//numbers is the unsorted array
        }
        
        fileReader.close();
        QuickSort(numbers, 0, N-1);
        System.out.println(Arrays.toString(numbers));
    }

    public static void QuickSort(int array[], int left, int right){

        int i = left;
        int j = right;
        Random rand = new Random();
        int pivotIndex = rand.nextInt(right) + 1;
        System.out.println(pivotIndex);
        int pivot = array[pivotIndex];
        
        while(i < j){
            while(array[j] > array[pivotIndex]){//looking for value is less than key
                j--;
            }

            while(array[i] < array[pivotIndex]){//looking for value greater than key
                i++;
            }

            if (i < j) {
                int t;
                t = array[i];
                array[i] = array[j];
                array[j] = t;
                i++;
                j--;
            }
        }
        if(left > right){
            return ;
        }
        if (left < i - 1)
            QuickSort(array, left, i - 1);
        if (i < right)
            QuickSort(array, i, right);
        

    }
}