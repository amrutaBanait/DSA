//5 in Direct- recursion

function f1(n) {
    if (n === 0) {
        return;
    } else {
        console.log(n);
        f2(n - 1);
    }
}

function f2(n) {
    if (n < 1) {
        return;
    } else {
        console.log(n);
        f1(Math.floor(n / 2));
    }
}

function main() {
    f1(10);
}

main();

// O / p
// 10
// 9
// 4
// 3
// 1


