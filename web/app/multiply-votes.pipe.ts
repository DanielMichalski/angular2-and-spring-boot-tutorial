import { Pipe, PipeTransform } from 'angular2/core';

@Pipe({
    name: 'multiplyVotes'
})
export class MultiplyVotesPipe implements PipeTransform {

    transform(value: number) {
        return (value + 1) * 10;
    }

}