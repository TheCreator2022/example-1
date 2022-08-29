var l1 = 0
var a = 0
var c = 0
var result = () => (l1 ** 2) + Math.random() + (Math.sqrt(a * c) + Math.tan(20))

function attach1(value) {
	l1 += value
    document.getElementById("l1").innerText = l1
}

function attach2() {
	a += 1
	document.getElementById("a").innerText = a
}

function attach3() {
	c += 1
	document.getElementById("c").innerText = c
}

function updateResult(num) {
	document.getElementById("result").innerText = Math.ceil(num)
}