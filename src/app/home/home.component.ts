import {Component, OnInit} from '@angular/core';
import {MenuItem, MessageService, SelectItem} from 'primeng/api';
import {Car} from '../_model/car';
import {CarService} from '../_services/carservice';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    items: MenuItem[];
    clicks: number = 0;
    data: any;
    carsCarousel: Car[];
    cars: Car[];
    selectedCar: Car;

    displayDialog: boolean;

    sortOptions: SelectItem[];

    sortKey: string;

    sortField: string;

    sortOrder: number;

    images: any[];

    constructor(private messageService: MessageService, private carService: CarService) {
        this.carsCarousel = [
            {vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black'},
            {vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White'},
            {vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue'},
            {vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White'},
            {vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red'},
            {vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue'},
            {vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow'},
            {vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown'},
            {vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black'}
        ];
        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }]
        };

    }

    selectLargeCar(event: Event, car: Car) {
        this.selectedCar = car;
        this.displayDialog = true;
        event.preventDefault();
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onDialogHide() {
        this.selectedCar = null;
    }

    selectCar(car: Car) {
        this.messageService.add({severity: 'info', summary: 'Car Selected', detail: 'Vin:' + car.vin});
    }

    ngOnInit() {
        this.carService.getCarsLarge().then(cars => this.cars = cars);

        this.sortOptions = [
            {label: 'Newest First', value: '!year'},
            {label: 'Oldest First', value: 'year'},
            {label: 'Brand', value: 'brand'}
        ];

        this.items = [
            {
                label: 'File',
                icon: 'pi pi-pw pi-file',
                items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'User', icon: 'pi pi-fw pi-user-plus', routerLink: ['/welcome']},
                        {label: 'Filter', icon: 'pi pi-fw pi-filter'}
                    ]
                },
                    {label: 'Open', icon: 'pi pi-fw pi-external-link'},
                    {separator: true},
                    {label: 'Quit', icon: 'pi pi-fw pi-times'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            },
            {
                label: 'Help',
                icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Contents',
                        icon: 'pi pi-pi pi-bars'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-pi pi-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'User',
                                icon: 'pi pi-fw pi-file',
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'pi pi-fw pi-cog',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {label: 'Save', icon: 'pi pi-fw pi-save'},
                            {label: 'Update', icon: 'pi pi-fw pi-save'},
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'pi pi-fw pi-tags',
                        items: [
                            {label: 'Delete', icon: 'pi pi-fw pi-minus'}
                        ]
                    }
                ]
            }
        ];

        this.images = [];
        this.images.push({source: 'assets/showcase/images/demo/galleria/galleria1.jpg', alt: 'Description for Image 1', title: 'Title 1'});
        this.images.push({source: 'assets/showcase/images/demo/galleria/galleria2.jpg', alt: 'Description for Image 2', title: 'Title 2'});
        this.images.push({source: 'assets/showcase/images/demo/galleria/galleria3.jpg', alt: 'Description for Image 3', title: 'Title 3'});
        this.images.push({source: 'assets/showcase/images/demo/galleria/galleria4.jpg', alt: 'Description for Image 4', title: 'Title 4'});
        this.images.push({source: 'assets/showcase/images/demo/galleria/galleria5.jpg', alt: 'Description for Image 5', title: 'Title 5'});
        this.images.push({source: 'assets/showcase/images/demo/galleria/galleria6.jpg', alt: 'Description for Image 6', title: 'Title 6'});
        this.images.push({source: 'assets/showcase/images/demo/galleria/galleria7.jpg', alt: 'Description for Image 7', title: 'Title 7'});
        this.images.push({source: 'assets/showcase/images/demo/galleria/galleria8.jpg', alt: 'Description for Image 8', title: 'Title 8'});
        this.images.push({source: 'assets/showcase/images/demo/galleria/galleria9.jpg', alt: 'Description for Image 9', title: 'Title 9'});
        this.images.push({
            source: 'assets/showcase/images/demo/galleria/galleria10.jpg',
            alt: 'Description for Image 10',
            title: 'Title 10'
        });
        this.images.push({
            source: 'assets/showcase/images/demo/galleria/galleria11.jpg',
            alt: 'Description for Image 11',
            title: 'Title 11'
        });
        this.images.push({
            source: 'assets/showcase/images/demo/galleria/galleria12.jpg',
            alt: 'Description for Image 12',
            title: 'Title 12'
        });
    }

}
