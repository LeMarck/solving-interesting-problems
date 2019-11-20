'use strict';

const getTravelPath = require('./travel-path');

describe('getTravelPath', () => {
    it('должен вернуть пустой путь', () => {
        expect(getTravelPath([])).toEqual([]);
    });

    it('должен вернуть путь от NY до Spb', () => {
        expect(getTravelPath([
            { from: 'London', to: 'Paris' },
            { from: 'NY', to: 'London' },
            { from: 'Moscow', to: 'Spb' },
            { from: 'Paris', to: 'Moscow' }
        ]))
            .toEqual([
                { from: 'NY', to: 'London' },
                { from: 'London', to: 'Paris' },
                { from: 'Paris', to: 'Moscow' },
                { from: 'Moscow', to: 'Spb' }
            ]);
    });
});
