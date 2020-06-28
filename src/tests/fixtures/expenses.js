import moment from 'moment';

export default [{
    id: '0',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0
},
{
    id: '1',
    description: 'rent',
    note: '',
    amount: 10000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '2',
    description: 'credit',
    note: '',
    amount: 1500,
    createdAt: moment(0).add(4,'days').valueOf()
}]