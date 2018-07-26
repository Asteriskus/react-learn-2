const add = (a, b) => a+b;
const generateGreeting = (name) => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(4, 3);
    expect(result).toBe(7);
});

test('generateGreeting', () => {
    const result = generateGreeting('Alex');
    expect(result).toBe('Hello Alex!')
});