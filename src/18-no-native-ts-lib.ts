import _ from 'lodash';

const data = [
    {
        username: 'nico',
        role: 'admin',
    },
    {
        username: 'Valen',
        role: 'seller',
    },
    {
        username: 'Joa',
        role: 'seller',
    },
    {
        username: 'Alexa',
        role: 'customer',
    },
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
