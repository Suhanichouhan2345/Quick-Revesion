import java.util.Scanner;

public class Day6_NumberUtilities {

    static boolean isPrime(int n) {
        if (n <= 1) return false;

        for (int i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }

    static int factorial(int n) {
        int fact = 1;

        for (int i = 1; i <= n; i++) {
            fact *= i;
        }

        return fact;
    }

    static int reverse(int n) {
        int rev = 0;

        while (n > 0) {
            rev = rev * 10 + n % 10;
            n /= 10;
        }

        return rev;
    }

    static boolean isPalindrome(int n) {
        return n == reverse(n);
    }

    static void table(int n) {
        for (int i = 1; i <= 10; i++) {
            System.out.println(n + " x " + i + " = " + (n * i));
        }
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        while (true) {

            System.out.println("\n===== Number Utility Program =====");
            System.out.println("1. Prime Check");
            System.out.println("2. Factorial");
            System.out.println("3. Reverse Number");
            System.out.println("4. Palindrome Check");
            System.out.println("5. Multiplication Table");
            System.out.println("6. Exit");

            System.out.print("Enter Choice : ");
            int ch = sc.nextInt();

            switch (ch) {

                case 1:
                    System.out.print("Enter Number : ");
                    int p = sc.nextInt();

                    if (isPrime(p))
                        System.out.println("Prime Number");
                    else
                        System.out.println("Not Prime");
                    break;

                case 2:
                    System.out.print("Enter Number : ");
                    int f = sc.nextInt();
                    System.out.println("Factorial = " + factorial(f));
                    break;

                case 3:
                    System.out.print("Enter Number : ");
                    int r = sc.nextInt();
                    System.out.println("Reverse = " + reverse(r));
                    break;

                case 4:
                    System.out.print("Enter Number : ");
                    int pal = sc.nextInt();

                    if (isPalindrome(pal))
                        System.out.println("Palindrome");
                    else
                        System.out.println("Not Palindrome");
                    break;

                case 5:
                    System.out.print("Enter Number : ");
                    int t = sc.nextInt();
                    table(t);
                    break;

                case 6:
                    System.out.println("Thank You");
                    return;

                default:
                    System.out.println("Invalid Choice");
            }
        }
    }
}