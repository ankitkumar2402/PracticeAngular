import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { IProduct } from "./IObject";
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class startService{
    private dataURL = "./data.json";
    constructor(private http: HttpClient){}

    getData(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.dataURL).pipe(
            tap(data => console.log(JSON.stringify(data))),
            catchError(this.handleError)
        )
    }

    handleError(err: HttpErrorResponse){
        return throwError(err);
    }
}
