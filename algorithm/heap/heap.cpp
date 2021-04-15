/*************************************************************************
	> File Name: heap.cpp
	> Author: huguang
	> Mail: hug@haizeix.com
	> Created Time: 
 ************************************************************************/

#include <iostream>
#include <cstdio>
#include <cstdlib>
#include <queue>
#include <stack>
#include <algorithm>
#include <string>
#include <map>
#include <set>
#include <vector>
using namespace std;

#define MAX_N 1000
int data[MAX_N + 5], cnt = 0;

int top() { return data[0]; }
int size() { return cnt; }

void shift_up(int ind) {
    while (ind && data[(ind - 1) / 2] < data[ind]) {
        swap(data[(ind - 1) / 2], data[ind]);
        ind = (ind - 1) / 2;
    }
    return ;
}

void output(int n) {
    printf("heap : ");
    for (int i = 0; i < n; i++) {
        printf("%d ", data[i]);
    }
    printf("\n");
    return ;
}

void shift_down(int ind) {
    int n = cnt - 1;
    while (ind * 2 + 1 <= n) {
        int temp = ind;
        if (data[temp] < data[ind * 2 + 1]) temp = ind * 2 + 1;
        if (ind * 2 + 2 <= n && data[temp] < data[ind * 2 + 2]) temp = ind * 2 + 2;
        if (temp == ind) break;
        swap(data[temp], data[ind]);
        ind = temp;
    }
    return ;
}

void push(int x) {
    data[cnt++] = x;
    shift_up(cnt - 1);
    return ;
}

void pop() {
    if (size() == 0) return ;
    swap(data[0], data[cnt - 1]);
    cnt -= 1;
    shift_down(0);
    return ;
}

int main() {
    int op, val;
    int max_n = 0;
    while (cin >> op) {
        switch (op) {
            case 0: {
                cin >> val; 
                printf("push %d to heap\n", val); 
                push(val);
            } break;
            case 1: {
                printf("pop %d from heap\n", top()); 
                pop(); 
            } break;
            case 2: {
                output(max_n);
            } break;
        }
        max_n = max(cnt, max_n);
        output(cnt);
    }
    return 0;
}
