// 일급 함수 
// - 함수를 값으로 다룰 수 있다. === 고차 함수

const add5 = a => a + 5;
log(add5);
log(add5(5));

const f1 = () => () => 1;
log(f1());

const f2 = f1();
log(f2);
log(f2());

// 함수를 인자로 받아 실행하는 함수 
const apply1 = f => f(1);
const add2 = a => a + 2;
log(apply1(add2));
log(apply1(a => a - 1));

const times = (f, n) => {
  let i = -1;
  while (++i < n) f(i);
};

times(log, 3);

times(a => log(a + 10), 3);

// 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
const addMaker = a => b => a + b;
const add10 = addMaker(10);
log(add10(5));
log(add10(10));