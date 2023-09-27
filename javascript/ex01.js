let decodeAtIndex = function (S, K) {
  let count = 0;
  for (let i = 0; i < S.length; i++) {
    if (!isNaN(S[i])) count *= Number(S[i]);
    else count++;
  }

  for (let i = S.length - 1; i >= 0; i--) {
    K = K % count;

    if (K == 0 && isNaN(S[i])) return S[i];

    if (!isNaN(S[i])) count = Math.ceil(count / Number(S[i]));
    else count--;
  }
};

console.log(decodeAtIndex("as", 2));
