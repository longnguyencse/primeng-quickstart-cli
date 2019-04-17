import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../domain/car';

@Injectable()
export class CarService {

    constructor(private http: HttpClient) {}

    getCarsSmall() {
        return this.http.get<any>('assets/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]> res.data)
            .then(data => data);
    }

    getAccessToken(login) {
        // return this.http.post('/api/auth/signin', {'usernameOrEmail': 'nqlong1@gmail.com', 'password': '123456'})
        return this.http.post('/api/auth/signin', login)
            .toPromise()
            .then(res => res);
    }
}
