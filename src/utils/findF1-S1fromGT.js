
const trunc = (num) => {
  return Number(num.toString().slice(0, 3));
}


const arr = [
  {
    'ZA': [0.8, 0.8, 0.8, 0.8, 0.8, 0.8]
  },
  {
    'ZB': [0.8, 0.8, 0.8, 0.8, 0.8, 0.8],
  },
  {
    'ZC': [1.5, 1.5, 1.5, 1.5, 1.5, 1.4]
  },
  {
    'ZD': [2.4, 2.2, 2.0, 1.9, 1.8, 1.7]
  },
  {
    'ZE': [4.2, 3.3, 2.8, 2.4, 2.2, 2.0]
  }
];

export const calculate_F1 = (groundType, arr, s1) => {


  let s1_truncated = trunc(s1);


  let idx = 0;
  if (s1_truncated * 10 - 1 >= 6) {
    idx = 5;
  }


  for (let i = 0.1; i <= 0.6; i += 0.1) {
    i = trunc(i);
    if (s1_truncated === i) {
      idx = i * 10 - 1;
    }

  }

  const res = arr.find(z => Boolean(z[groundType]));

  const a = res[groundType];

  return a[idx];

}

console.log(calculate_F1('ZD', arr, 0.3434534));