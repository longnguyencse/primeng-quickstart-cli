import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SelectivePreloadingStrategyService} from './_services/selective-preloading-strategy.service';
import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './login/login.component';
import {LearnPositionComponent} from './learn-position/learn-position.component';


const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'welcome',
        component: WelcomeComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'position',
        component: LearnPositionComponent,
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: false, // <-- debugging purposes only
                preloadingStrategy: SelectivePreloadingStrategyService,
            }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}
