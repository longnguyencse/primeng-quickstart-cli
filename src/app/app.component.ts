import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Car } from './_model/car';
import {Login} from './_model/login';
import {MenuItem} from 'primeng/api';

import { CarService } from './_services/carservice';

export class PrimeCar implements Car {
    constructor(public vin?, public year?, public brand?, public color?) {}
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [CarService]
})
export class AppComponent implements OnInit {
    @ViewChild('login_view', {read: Element}) loginE: ElementRef;

    displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    login: Login = new Login();

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }
    items: MenuItem[];

    islogin = false;

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
        this.items = [
            {
                label: 'Home',
                routerLink: ['/home'],
            },
            {
                label: 'Welcome',
                routerLink: ['/welcome'],
                items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Contact',
                routerLink: ['/contact'],
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            },
            {
                label: 'Position',
                routerLink: ['/position'],
            }
        ];
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.findSelectedCarIndex()] = this.car;
        }
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        const index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i !== index);
        this.car = null;
        this.displayDialog = false;
    }

    loginFunction() {
        console.log('Login button click');
        // this.login.usernameOrEmail = 'kalog';
        // this.login.password = 'admin12345678';
        console.log(this.carService.getAccessToken(this.login));
    }
    onRowSelect(event) {
        this.newCar = false;
        this.car = {...event.data};
        this.displayDialog = true;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }

    showlogin(e) {
        this.islogin = !this.islogin;
        console.log(this.islogin);
    }
}
