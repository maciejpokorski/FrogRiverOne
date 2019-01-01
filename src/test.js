import solution from './index.js'

test('5, [1, 3, 1, 4, 2, 3, 5, 4], 6', () => {
    const X = 5;
    const A = [1, 3, 1, 4, 2, 3, 5, 4];
    expect(solution(X, A)).toEqual(6);
});

test('1, [1], 0', () => {
    const X = 1;
    const A = [1];
    expect(solution(X, A)).toEqual(0);
});

test('0, [2], -1', () => {
    const X = 0;
    const A = [2];
    expect(solution(X, A)).toEqual(-1);
});

test('2, [2], -1', () => {
    const X = 2;
    const A = [2];
    expect(solution(X, A)).toEqual(-1);
});

test('2, [2,1], 1', () => {
    const X = 2;
    const A = [2,1];
    expect(solution(X, A)).toEqual(1);
});

test('2, [1, 2], 1', () => {
    const X = 2;
    const A = [1, 2];
    expect(solution(X, A)).toEqual(1);
});

test('2, [1,1], -1', () => {
    const X = 2;
    const A = [1,1];
    expect(solution(X, A)).toEqual(-1);
});

test('2, [2, 2], -1', () => {
    const X = 2;
    const A = [2, 2];
    expect(solution(X, A)).toEqual(-1);
});

test('3, [1,3], -1', () => {
    const X = 3;
    const A = [1,3];
    expect(solution(X, A)).toEqual(-1);
});

test('2, [2, 2], -1', () => {
    const X = 2;
    const A = [2, 2];
    expect(solution(X, A)).toEqual(-1);
});

test('2, [1, 2, 3], 1', () => {
    const X = 2;
    const A = [1, 2, 3];
    expect(solution(X, A)).toEqual(1);
});

test('3, [2, 3, 1], 2', () => {
    const X = 3;
    const A = [2, 3, 1];
    expect(solution(X, A)).toEqual(2);
});

test('3, [3, 2, 1], 2', () => {
    const X = 3
    const A = [3, 2, 1];
    expect(solution(X, A)).toEqual(2);
});

test('4, [3, 2, 1], -1', () => {
    const X = 4;
    const A = [3, 2, 1];
    expect(solution(X, A)).toEqual(-1);
});

test('3, [3, 2, 2], -1', () => {
    const X = 3;
    const A = [3, 2, 2];
    expect(solution(X, A)).toEqual(-1);
});

test('3, [3, 3, 3, 1, 1, 2], 5', () => {
    const X = 3;
    const A = [3, 3, 3, 1, 1, 2];
    expect(solution(X, A)).toEqual(5);
});