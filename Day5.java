import java.util.*;

class Student {
    int id;
    String name;
    int age;
    String course;
    double marks;

    Student(int id, String name, int age, String course, double marks) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.course = course;
        this.marks = marks;
    }

    public String toString() {
        return "ID : " + id +
                "\nName : " + name +
                "\nAge : " + age +
                "\nCourse : " + course +
                "\nMarks : " + marks +
                "\n-------------------------";
    }
}

public class StudentManagementSystem {

    static Scanner sc = new Scanner(System.in);
    static ArrayList<Student> students = new ArrayList<>();

    static void addStudent() {
        System.out.print("Enter ID : ");
        int id = sc.nextInt();
        sc.nextLine();

        System.out.print("Enter Name : ");
        String name = sc.nextLine();

        System.out.print("Enter Age : ");
        int age = sc.nextInt();
        sc.nextLine();

        System.out.print("Enter Course : ");
        String course = sc.nextLine();

        System.out.print("Enter Marks : ");
        double marks = sc.nextDouble();

        students.add(new Student(id, name, age, course, marks));
        System.out.println("Student Added Successfully.\n");
    }

    static void viewStudents() {

        if (students.isEmpty()) {
            System.out.println("No Students Found.\n");
            return;
        }

        for (Student s : students) {
            System.out.println(s);
        }
    }

    static void searchStudent() {

        System.out.print("Enter ID : ");
        int id = sc.nextInt();

        for (Student s : students) {

            if (s.id == id) {
                System.out.println(s);
                return;
            }
        }

        System.out.println("Student Not Found.\n");
    }

    static void updateStudent() {

        System.out.print("Enter ID : ");
        int id = sc.nextInt();
        sc.nextLine();

        for (Student s : students) {

            if (s.id == id) {

                System.out.print("New Name : ");
                s.name = sc.nextLine();

                System.out.print("New Age : ");
                s.age = sc.nextInt();
                sc.nextLine();

                System.out.print("New Course : ");
                s.course = sc.nextLine();

                System.out.print("New Marks : ");
                s.marks = sc.nextDouble();

                System.out.println("Updated Successfully.\n");
                return;
            }
        }

        System.out.println("Student Not Found.\n");
    }

    static void deleteStudent() {

        System.out.print("Enter ID : ");
        int id = sc.nextInt();

        Iterator<Student> it = students.iterator();

        while (it.hasNext()) {

            Student s = it.next();

            if (s.id == id) {

                it.remove();
                System.out.println("Deleted Successfully.\n");
                return;
            }
        }

        System.out.println("Student Not Found.\n");
    }

    static void averageMarks() {

        if (students.isEmpty()) {
            return;
        }

        double sum = 0;

        for (Student s : students) {
            sum += s.marks;
        }

        System.out.println("Average Marks : " + (sum / students.size()));
    }

    static void highestMarks() {

        if (students.isEmpty())
            return;

        Student best = students.get(0);

        for (Student s : students) {

            if (s.marks > best.marks)
                best = s;
        }

        System.out.println(best);
    }

    static void lowestMarks() {

        if (students.isEmpty())
            return;

        Student low = students.get(0);

        for (Student s : students) {

            if (s.marks < low.marks)
                low = s;
        }

        System.out.println(low);
    }

    static void sortByName() {

        students.sort((a, b) -> a.name.compareToIgnoreCase(b.name));
        System.out.println("Sorted By Name.\n");
    }

    static void sortByMarks() {

        students.sort((a, b) -> Double.compare(b.marks, a.marks));
        System.out.println("Sorted By Marks.\n");
    }

    public static void main(String[] args) {

        while (true) {

            System.out.println("\n===== Student Management System =====");
            System.out.println("1.Add Student");
            System.out.println("2.View Students");
            System.out.println("3.Search Student");
            System.out.println("4.Update Student");
            System.out.println("5.Delete Student");
            System.out.println("6.Average Marks");
            System.out.println("7.Highest Marks");
            System.out.println("8.Lowest Marks");
            System.out.println("9.Sort By Name");
            System.out.println("10.Sort By Marks");
            System.out.println("11.Exit");

            System.out.print("Enter Choice : ");

            int ch = sc.nextInt();

            switch (ch) {

                case 1:
                    addStudent();
                    break;

                case 2:
                    viewStudents();
                    break;

                case 3:
                    searchStudent();
                    break;

                case 4:
                    updateStudent();
                    break;

                case 5:
                    deleteStudent();
                    break;

                case 6:
                    averageMarks();
                    break;

                case 7:
                    highestMarks();
                    break;

                case 8:
                    lowestMarks();
                    break;

                case 9:
                    sortByName();
                    break;

                case 10:
                    sortByMarks();
                    break;

                case 11:
                    System.out.println("Thank You");
                    System.exit(0);

                default:
                    System.out.println("Invalid Choice");
            }
        }
    }
}