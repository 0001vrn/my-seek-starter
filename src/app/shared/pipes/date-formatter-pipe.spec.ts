import {DateFormatterPipe} from './date-formatter-pipe';

describe('DateFormatterPipe', () => {
    let pipe: DateFormatterPipe = new DateFormatterPipe();
    let date = new Date('12/12/2012');

    it('Does pipe function exists', () => {
    expect(pipe).toBeTruthy();
    });

    it('Does transform property exists', () => {
        expect(pipe.transform).toBeTruthy();
    });

    it ('test the changed format 1', () => {
        expect(pipe.transform(date, 'MM-DD-YYYY')).toEqual('12-12-2012');
    });

    it ('test the changed format 2', () => {
        expect(pipe.transform(date, 'MM/DD/YYYY')).toEqual('12/12/2012');
    });

    it ('test the changed format 3', () => {
        expect(pipe.transform(date, 'MM.DD.YYYY')).toEqual('12.12.2012');
    });


});