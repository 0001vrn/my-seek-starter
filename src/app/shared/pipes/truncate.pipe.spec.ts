import { TruncatePipe } from './truncate.pipe';
import { inject } from '@angular/core/testing';

describe('Pipe: TruncatePipe', () => {
    let truncatePipe: TruncatePipe = new TruncatePipe();

    it('should return a truncated string.', () => {
        expect(truncatePipe.transform).toBeDefined();
        let mockString = 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. ';
        expect(truncatePipe.transform(mockString, 30)).toBe('Lorem ipsum dolor sit amet. Lo...');
        expect(truncatePipe.transform(mockString, 5)).toBe('Lorem...');
    });
});