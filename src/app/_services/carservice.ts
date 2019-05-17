import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../_model/car';

@Injectable()
export class CarService {

    constructor(private httpClient: HttpClient) {}

    getCarsSmall() {
        return this.httpClient.get<any>('assets/data/cars-small.json')
            .toPromise()
            .then(res => <Car[]> res.data)
            .then(data => data);
    }

    getAccessToken(login) {
        return this.httpClient.post('/api/auth/signin', login)
            .toPromise()
            .then(res => res);
    }

    getCarsLarge() {
        return this.httpClient.get<any>('assets/showcase/resources/data/cars-large.json')
            .toPromise()
            .then(res => <Car[]> res.data)
            .then(data => {
                return data;
            });
    }
}
