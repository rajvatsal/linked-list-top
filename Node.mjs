#!/bin/env node

export default function Node(value = null, next = null) {
	const node = { value, next };
	return node;
}
