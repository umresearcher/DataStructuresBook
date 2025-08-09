
class Student {
    public int sID;
    public Student(int id) {
        sID = id;
    }
}

public class JavaTest {
    public static void main(String[] args) {
        Student s1, s2;
        s1 = new Student(101);
        s2 = s1;
        s2.sID = 202;
        System.out.println("s1 ID = " + s1.sID);
        System.out.println("s2 ID = " + s2.sID);
    }
}
