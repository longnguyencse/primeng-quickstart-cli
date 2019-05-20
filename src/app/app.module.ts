import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import {PanelMenuModule} from 'primeng/panelmenu';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import {Router, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MenubarModule} from 'primeng/menubar';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {DataViewModule} from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {PanelModule} from 'primeng/panel';
import {CarService} from './_services/carservice';
import {ChartModule} from 'primeng/chart';
import {GalleriaModule} from 'primeng/galleria';
import { LearnPositionComponent } from './learn-position/learn-position.component';

@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        TopbarComponent,
        FooterComponent,
        LoginComponent,
        HomeComponent,
        WelcomeComponent,
        ContactComponent,
        PageNotFoundComponent,
        LearnPositionComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        RouterModule,
        DialogModule,
        ButtonModule,
        PanelMenuModule,
        AppRoutingModule,
        MenubarModule,
        CheckboxModule,
        RadioButtonModule,
        CarouselModule,
        ToastModule,
        DataViewModule,
        DropdownModule,
        PanelModule,
        ChartModule,
        GalleriaModule
    ],
    providers: [
        MessageService,
        CarService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(router: Router) {
    }
}
