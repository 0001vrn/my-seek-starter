import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
    transform(inputString, length) {
        let truncatedString = '';
        if (inputString && length) {
            if (inputString.length > length) {
                truncatedString = `${inputString.substring(0, length)}...`;
            } else {
                truncatedString = inputString;
            }
        }
        return truncatedString;
    }
}