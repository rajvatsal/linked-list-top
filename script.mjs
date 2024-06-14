#!/bin/env node

function LinkedList() {
	const list = [];

	const head = () => list[0];
	const tail = () => list[list.length - 1];

	const Node = (value = null, next = null) => {
		const node = { value, next };
		list.push(node);
		return node;
	};

	const print = (node = head()) => {
		console.log(`value: ${node.value} | next: ${node.next}`);
		if (node.next === null) return;
		print(node.next);
		return;
	};

	const append = (value, node = head()) => {
		if (node.next === null) {
			node.next = Node(value);
			return;
		}
		append(value, node.next);
	};

	return { append, print, Node, head, tail };
}

const l = LinkedList();

l.Node(4);
l.append(3);
l.append(2);
l.append(1);
l.append(0);

l.print();

console.log(l.head());
console.log(l.tail());
