public class Day2 {
    public static void main(String[] args) {

        int[] arr = {45, 12, 89, 67, 23};

        int max = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        System.out.println("Maximum = " + max);
    }
}