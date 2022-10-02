var char = "Mohamed Arsath";

for (const c of char) {
	if (c === " ") {
		console.log("+");
		continue;
	}
	console.log(c);
}

for (const key in char) {
	if (key) {
		const element = key.object[key.object];
	}
	console.log(key);
}
