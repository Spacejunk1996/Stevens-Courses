var link = new LinkedList();
link.append(3);
link.append(4);
console.log(link.toString());

function LinkedList() {

    let Node = function(element) {
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = function(element) {

        let node = new Node (element),
        current;

        if (head == null) {
            head = node;
        } else {

            current = head;
            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        length ++;

    }

    this.insert = function(position, element) {

        if (position >= 0 && position <= length) {

            let node = new Node (element),
            current = head,
            previous,
            index = 0;

            if (position === 0) {

                node.next = current;
                current = current.next
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next
                }
                node.next = current;
                previous.next = node;
            }
            length ++;
            return true;

        } else {
            return false;
        }
    }

    this.removeAt = function(position) {

        if (position > -1 && position < length) {

            let current = head,
            previous,
            index = 0;

            if (position === 0) {
                head = current.next;
            } else {
                while (index ++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }

            length --;

            return current.element;

        } else {
            return null;
        }

    }

    this.remove = function(elelment) {
        let index = this.indexOf(element);
        return this.removeAt(index);
    }

    this.indexOf = function(element) {

    }

    this.isEmpty = function() {
        return length === 0;
    }

    this.size = function() {
        return length;
    }

    this.toString = function() {

        let current = head;
        string = '';

        while(current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next;
        }
        return string;

    }

    this.print = function() {

    }

}

function DoublyLinkedList() {

    let Node = function(element) {

        this.element = element;
        this.next = null;
        this.prev = null; //NEW
    }

    let length = 0;
    let head = null;
    let tail = null; //NEW

    this.insert = function (position, element) {

        if (position >= 0 && position <= length) {

            let node = new Node(element),
            current = head,
            previous,
            indes = 0;
            if (position == 0) {
                // 如果head为空
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {

                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;

            } else {

                while (index ++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;

                current.prev = node;
                node.prev = previous;

            }
            length ++;

            return ture;

        } else {
            return false;
        }
        
    }

    this.removeAt = function(position) {

        if (position > -1 && position < length) {

            let current = head,
            previous,
            index = 0;

            if (position === 0) {

                head = current.next;
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) {

                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.current.next;
                }

                previous.next = current.next;
                current.next.prev = previous;
            }
            
            length --;
            return current.element;
        } else {
            
            return null;
        }
    }
}