import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should remove expense with id', () => {
    const result = removeExpense({ id: '123sad' });
    expect(result).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123sad'
    });
});

test('should edit expense with id and updates', () => {
    const result = editExpense('123sas', {
        description: 'Bill rent',
        amount: 100,
        note: 'New note'
    });
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123sas',
        updates: {
            description: 'Bill rent',
            amount: 100,
            note: 'New note'
        }
    });
});

test('Should add expense with provided expense', () => {
    const tryData = {
        description: 'Rent',
        amount: 109050,
        createdAt: 1000,
        note: 'This was the last rent this month'
    };
    const action = addExpense(tryData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...tryData,
            id: expect.any(String)
        }
    });
});

test('Should add expense without provided expense', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});

