
#include <iostream>

class Student {
public:
    int sID;
    Student(int id) : sID(id) {}
};

int main() {
    Student s1(101);
    Student s2 = s1;
    s2.sID = 202;
    std::cout << "s1 ID = " << s1.sID << std::endl;
    std::cout << "s2 ID = " << s2.sID << std::endl;
    return 0;
}
