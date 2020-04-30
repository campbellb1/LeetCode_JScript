class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Insert first node
    insertFirst(data){
        this.head = new Node(data, this.head);
    }

    //Insert last node

    //Insert at index

    //Get at index

    //Print list data
    printListData(){
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }

}

//----------------DRIVER----------------------

const l2 = new Node(1);
const l1 = new Node(8, l2);

const b1 = new Node(0);

node_A = l1;
node_B = b1;
//
length = 3;
string_A = "";
string_B = "";

while(node_A != null || node_B != null)
{
    if(node_A != null)
    {
        string_A = "" + string_A + node_A.data;
        node_A = node_A.next;
    }
    if(node_B != null)
    {
        string_B = "" + string_B + node_B.data;
        node_B = node_B.next;
    }

    console.log(string_A);
    console.log(string_B);

}
iSum = parseInt(string_A) + parseInt(string_B);
var nextNode = null;
var lastNode = null;

console.log(iSum);

for(let i = 0; i < iSum.toString().length; i++)
{
    console.log(iSum.toString()[i]);
    nextNode = new Node(parseInt(iSum.toString()[i]));
    nextNode.next = lastNode;
    lastNode = nextNode;
}

console.log(lastNode);