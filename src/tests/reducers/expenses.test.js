import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('Should set reducer by default', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('Should not remove expense because of invalid id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenses[0]
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expenses[0]]);
});

test('Should edit expense with provided id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note: 'My note'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([{...expenses[0], note: 'My note'}, expenses[1], expenses[2]]);
});

test('Should not edit expense because of invalid id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            note: 'My note'
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});