for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

/*
should log:
0
2
4
6
8
10
12 (this was incorrect, while I would indeed be incremented after logging 10, it would attempt to satisfy the condition as 12 which would be false)
*/