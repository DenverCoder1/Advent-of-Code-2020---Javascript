let input = `47
61
131
15
98
123
32
6
137
111
25
28
107
20
99
36
2
97
88
124
138
75
112
52
122
78
46
110
41
64
63
16
93
104
105
91
27
45
119
14
1
65
62
118
37
79
77
19
71
35
130
69
5
44
9
48
125
136
103
140
53
126
106
55
129
139
87
68
21
85
76
31
113
12
100
24
96
82
13
70
72
86
26
117
58
132
114
40
54
133
51
92`;

let test = `16
10
15
5
1
11
7
19
6
12
4`;

let lines = input.split("\n");

// sort adapters
let adapters = lines.sort((a, b) => a - b).map((x) => Number(x));

// put 0 at beginning of array
adapters.unshift(0);

// initialize with 1 for the first and 0 for the rest
ways = adapters.map((x, i) => (i == 0 ? 1 : 0));

for (let i = 0; i < ways.length; i++) {
  for (let j = i - 3; j < i; j++) {
    // add ways using previous 3 numbers
    if (adapters[i] <= adapters[j] + 3) {
      ways[i] += ways[j];
    }
  }
}

console.log("Ways to arrange adapters:", ways[ways.length - 1]);
