import { Component, Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name: 'addValueFormatter',
    pure: true
})
export class additionOfValueFormatter implements PipeTransform{
    transform(value: string) {
        return value + 1;
    }

}
