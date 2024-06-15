#!/bin/env node

function LinkedList(val) {
	const Node = (value = null, next = null) => {
		const node = { value, next };
		return node;
	};

	let head = Node(val);
	let tail = head;

	const getHead = () => head;
	const getTail = () => tail;

	const print = (node = head) => {
		console.log(`value: ${node.value} | next: ${node.next.value}`);
		if (node.next === null) return;
		print(node.next);
		return;
	};

	const append = (value, node = head) => {
		if (node === undefined) return;
		if (node.next === null) {
			node.next = Node(value, null, node);
			tail = node.next;
			return;
		}
		append(value, node.next);
	};

	const prepend = (value = null, node = head) => {
		head = Node(value, node);
	};

	const size = (node = head) => {
		if (node.next === null) return 1;
		size(node.next);
		let count = 1;

		count += size(node.next);

		return count;
	};

	const at = (index, node = head, ct = 0) => {
		if (node.next === null) return;

		let count = ct;
		if (index === count) return node;
		return at(index, node.next, ++count);
	};

	const pop = (node = head) => {
		if (node.next.next === null) {
			node.next = null;
			tail = node;
			return;
		}
		pop(node.next);
	};

	const contains = (val, node = head) => {
		if (node.next === null) return val === node.value;

		if (val === node.value) return true;
		return contains(val, node.next);
	};

	const find = (value, node = head, count = 0) => {
		if (node.next === null) {
			if (node.value === value) return count;
			return null;
		}

		let ct = count;

		if (value === node.value) return ct;
		return find(value, node.next, ++ct);
	};

	const toStr = (pathString, node = head) => {
		const ps =
			node === head
				? `( ${node.value} )`
				: `${pathString} ~> ( ${node.value} )`;
		if (node.next === null) {
			return ps;
		}

		return toStr(ps, node.next);
	};

	return {
		append,
		print,
		size,
		getHead,
		getTail,
		prepend,
		at,
		pop,
		contains,
		find,
		toStr,
	};
}

const a = LinkedList(10);
a.prepend(50);
a.prepend(50);

console.log(a.toStr());
