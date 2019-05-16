import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SelectivePreloadingStrategyService} from './_services/selective-preloading-strategy.service';
import {AppComponent} from './app.component';
import {ContactComponent} from './contact/contact.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    outlet: 'popup'
  },
  {
    path: 'welcome',
    component: AppComponent,
    outlet: 'popup'
  },
  {
    path: 'contact',
    component: ContactComponent,
    outlet: 'popup'
  },
  { path: '',
    redirectTo: '/welcome',
    pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
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

export class AppRoutingModule {}
