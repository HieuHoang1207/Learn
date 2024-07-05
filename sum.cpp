#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

int solveMeFirst(int a, int b) {
 // Hint: Type return a+b; below:
if ((a<1)||(b<1)||(a>1000)||(b>1000)){
    std::cout << "Enter a and b into the word range 1<=a,b<=1000" << std::endl;
    exit(0);
}
  int sum;
  sum = a+b;
  return sum;
}

int main() {
  int num1, num2;
  int sum;
  cin>>num1>>num2;
  sum = solveMeFirst(num1,num2);
  cout<<sum;
  return 0;
}