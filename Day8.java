import java.util.Scanner;

public class Day8 {

    // Display Array
    public static void display(int[] arr) {
        System.out.println("\nArray Elements:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    // Linear Search
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }

    // Second Largest Element
    public static int secondLargest(int[] arr) {

        int largest = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;

        for (int num : arr) {

            if (num > largest) {
                second = largest;
                largest = num;
            } else if (num > second && num != largest) {
                second = num;
            }

        }

        return second;
    }

    // Reverse Array
    public static void reverse(int[] arr) {

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {

            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }

    }

    // Frequency of Each Element
    public static void frequency(int[] arr) {

        boolean[] visited = new boolean[arr.length];

        System.out.println("\nFrequency:");

        for (int i = 0; i < arr.length; i++) {

            if (visited[i]) {
                continue;
            }

            int count = 1;

            for (int j = i + 1; j < arr.length; j++) {

                if (arr[i] == arr[j]) {
                    count++;
                    visited[j] = true;
                }

            }

            System.out.println(arr[i] + " -> " + count);
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter Array Size: ");
        int n = sc.nextInt();

        int[] arr = new int[n];

        System.out.println("Enter Array Elements:");

        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        display(arr);

        System.out.print("\nEnter Element to Search: ");
        int target = sc.nextInt();

        int index = linearSearch(arr, target);

        if (index == -1) {
            System.out.println("Element Not Found");
        } else {
            System.out.println("Element Found at Index: " + index);
        }

        System.out.println("Second Largest Element: " + secondLargest(arr));

        frequency(arr);

        reverse(arr);

        System.out.println("\nReversed Array:");
        display(arr);

        sc.close();
    }
}