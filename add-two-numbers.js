function ListNode(val) {
     this.val = val;
      this.next = null;
  }
 


var addTwoNumbers = function(l1, l2) {
    var list_one = [];
    list_one[0] = l1.val
    if(l1.next != null)
        {
            l1.next.forEach((element) => {
                console.log(element);
            });

        }

    return l1;
};

addTwoNumbers(ListNode(2, 4, 3), ListNode(5, 6, 4));