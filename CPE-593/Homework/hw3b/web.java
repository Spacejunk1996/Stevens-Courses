//This is a java program to sort numbers using randomized quick sort
import java.util.Random;
import java.io.*;
 
public class web 
{
    
    static int N;
    static int[] sequence;

    public static void main(String args[]) throws IOException{

        FileInputStream fileReader = new FileInputStream("hw3.dat");
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(fileReader));

        String Line1;
        String Line2;
        Line1 = bufferedReader.readLine();
        Line2 = bufferedReader.readLine();

        
        
        N = Integer.parseInt(Line1);
        sequence = new int[N];

        String[] Stringarray = Line2.split(" ");
        
        for(int i = 0; i < N; i++){
            sequence[i] = Integer.parseInt(Stringarray[i]);//numbers is the unsorted array
        }
        
        fileReader.close();
        System.out.println("\nSorted Sequence: ");
        QuickSort(0, N - 1);
        printSequence(sequence);
    }

    public static void QuickSort(int left, int right) 
    {
        if (right - left <= 0)
            return;
        else 
        {
            Random rand = new Random();
            int pivotIndex = left + rand.nextInt(right - left + 1);
            swap(pivotIndex, right);
 
            int pivot = sequence[right];
            int partition = partitionIt(left, right, pivot);
            QuickSort(left, partition - 1);
            QuickSort(partition + 1, right);
        }
    }
 
    public static int partitionIt(int left, int right, long pivot) 
    {
        int leftPtr = left - 1;
        int rightPtr = right;
        while (true) 
        {
            while (sequence[++leftPtr] < pivot)
                ;
            while (rightPtr > 0 && sequence[--rightPtr] > pivot)
                ;
 
            if (leftPtr >= rightPtr)
                break;
            else
                swap(leftPtr, rightPtr);
        }
        swap(leftPtr, right);
        return leftPtr;
    }
 
    public static void swap(int dex1, int dex2) 
    {
        int temp = sequence[dex1];
        sequence[dex1] = sequence[dex2];
        sequence[dex2] = temp;
    }
 
    static void printSequence(int[] sorted_sequence) 
    {
        for (int i = 0; i < sorted_sequence.length; i++)
            System.out.print(sorted_sequence[i] + " ");
    }
 
    
}