import linkedList from "./LinkedList.mjs";

const a = linkedList(10);
a.prepend(50);
a.prepend(50);

console.log(a.toStr());
a.removeAt(1);
console.log(a.toStr());
