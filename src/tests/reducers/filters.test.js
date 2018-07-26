import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('Should init reducer with defaults', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set text filter', () => {
    const text = 'try';
    const state = filtersReducer(undefined, { type: 'SET_TEXT', text});
    expect(state.text).toBe('try');
});

test('Should set sort by amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should set sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };

    const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
    expect(state.sortBy).toBe('date');
});

test('Should set start date', () => {
    const date = moment(0);
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', date });
    expect(state.startDate).toBe(date);
});

test('Should set end date', () => {
    const date = moment(0);
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', date });
    expect(state.endDate).toBe(date);
});