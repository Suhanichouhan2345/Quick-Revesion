import java.util.ArrayList;
import java.util.Scanner;

public class day13 {

    static ArrayList<Integer> numbers = new ArrayList<>();
    static Scanner sc = new Scanner(System.in);

    static void addNumber() {
        System.out.print("Enter number: ");
        int num = sc.nextInt();

        numbers.add(num);

        System.out.println("Number added successfully!");
    }

    static void displayNumbers() {
        if (numbers.isEmpty()) {
            System.out.println("No numbers available.");
            return;
        }

        System.out.println("Numbers:");

        for (int num : numbers) {
            System.out.print(num + " ");
        }

        System.out.println();
    }

    static void findLargest() {
        if (numbers.isEmpty()) {
            System.out.println("No numbers available.");
            return;
        }

        int largest = numbers.get(0);

        for (int num : numbers) {
            if (num > largest) {
                largest = num;
            }
        }

        System.out.println("Largest number: " + largest);
    }

    static void findSmallest() {
        if (numbers.isEmpty()) {
            System.out.println("No numbers available.");
            return;
        }

        int smallest = numbers.get(0);

        for (int num : numbers) {
            if (num < smallest) {
                smallest = num;
            }
        }

        System.out.println("Smallest number: " + smallest);
    }

    static void calculateSum() {
        int sum = 0;

        for (int num : numbers) {
            sum += num;
        }

        System.out.println("Sum: " + sum);
    }

    public static void main(String[] args) {

        while (true) {

            System.out.println("\n===== NUMBER MANAGER =====");
            System.out.println("1. Add Number");
            System.out.println("2. Display Numbers");
            System.out.println("3. Find Largest");
            System.out.println("4. Find Smallest");
            System.out.println("5. Calculate Sum");
            System.out.println("6. Exit");

            System.out.print("Enter choice: ");
            int choice = sc.nextInt();

            switch (choice) {

                case 1:
                    addNumber();
                    break;

                case 2:
                    displayNumbers();
                    break;

                case 3:
                    findLargest();
                    break;

                case 4:
                    findSmallest();
                    break;

                case 5:
                    calculateSum();
                    break;

                case 6:
                    System.out.println("Program ended.");
                    return;

                default:
                    System.out.println("Invalid choice!");
            }
        }
    }
}