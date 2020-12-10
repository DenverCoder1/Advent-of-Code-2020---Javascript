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

let lines = input.split("\n");

let countDiffs = {
  1: 0,
  2: 0,
  3: 0,
};

let outlet = 0;

let adapters = new Set();

let max = 0;

for (const line of lines) {
  adapters.add(Number(line));
  if (Number(line > max)) {
    max = Number(line);
  }
}

adapters.add(max + 3);

let found = true;

while (found) {
  found = false;
  for (const i in countDiffs) {
    if (adapters.has(outlet + Number(i))) {
      outlet += Number(i);
      countDiffs[i]++;
      found = true;
      break;
    }
  }
}

for (const i in countDiffs) {
  console.log("Difference of "+ i+ ":", countDiffs[i]);
}

console.log(
  countDiffs[1] + "*" + countDiffs[3] + "=" + countDiffs[1] * countDiffs[3]
);
