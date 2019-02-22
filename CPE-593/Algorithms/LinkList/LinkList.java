import java.util.*;
public class LinkList {
    private static class Node {
        public int val;
        public Node next;
    }

    private Node head;
    public LinkList() {
        head = null;

    }

    public void addStart(int v) {
        Node temp = new Node();
        temp.val = v;
        temp.next = head;
        head = temp;
    }

    public void addEnd(int v) {
        Node temp = new Node();
        temp.val = v;
        temp.next = null;
        if (head == null) {
            head = temp;
            return;
        }
        Node p;
        for (p = head; p.next != null; p = p.next) {

        }
        p.next = temp;
    }

    public void insert(int pos, int v) {
        Node p = head;
        while (pos > 0) {
            p = p.next;
            pos--;
        }
        Node temp = new Node();
        temp.val = v;
        temp.next = p.next;
        p.next = temp;
    }

    public int removeStart() {
        Node temp = head;
        head = head.next;
        return temp.val;
    }

    public int removeEnd() {
        Node p = head;
        Node q = p.next;
        if (q == null) {
            int v = head.val;
            head = null;
            return v;
        }
        for (; q.next != null; p = q, q = q.next);
        p.next = null;
        return q.val;
    }

    public String toString() {
        StringBuilder b = new StringBuilder();
        for (Node p = head; p != null; p = p.next) {
            b.append(p.val).append(' ');
        }
        return b.toString();
    }
    public static void main(String[] args) {
        LinkList a = new LinkList();
        for (int i = 0; i < 10; i++) {
            a.addStart(i);
        }
        for (int i = 0; i < 10; i++) {
            a.addEnd(i);
        }
        System.out.println(a);
    }
}