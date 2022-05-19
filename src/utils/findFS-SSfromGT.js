
const trunc = (num) => {
  return Number(num.toString().slice(0, 3));
}


const arr = [
  {
    'ZA': [0.8, 0.8, 0.8, 0.8, 0.8, 0.8]
  },
  {
    'ZB': [0.9, 0.9, 0.9, 0.9, 0.9, 0.9],
  },
  {
    'ZC': [1.3, 1.3, 1.2, 1.2, 1.2, 1.2]
  },
  {
    'ZD': [1.6, 1.4, 1.2, 1.1, 1.0, 1.0]
  },
  {
    'ZE': [2.4, 1.7, 1.3, 1.1, 0.9, 0.8]
  }
];

const calculate_F1 = (groundType, arr, s1) => {

  let s1_truncated = trunc(s1);

  let idx = 0;

  if (s1 > 1.5) {
    idx = 5;
  }

  if (s1 < 1.5) {
    idx = 4
  }

  if (s1 < 1.25) {
    idx = 3;
  }

  if (s1 < 1.0) {
    idx = 2;
  }

  if (s1 < 0.75) {
    idx = 1;
  }

  if (s1 < 0.5) {
    idx = 0;
  }

  const res = arr.find(z => Boolean(z[groundType]));

  const a = res[groundType];

  return a[idx];

}

console.log(calculate_F1('ZE', arr, 1.4));