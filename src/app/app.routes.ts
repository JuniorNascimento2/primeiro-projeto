import { Routes } from '@angular/router';
import { HelloWordComponent } from './hello-word/hello-word.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FilhoAComponent } from './filho-a/filho-a.component';
import { FilhoBComponent } from './filho-b/filho-b.component';
import { FilhoCComponent } from './filho-c/filho-c.component';
import { FilhoDComponent } from './filho-d/filho-d.component';
import { CustomersDetaillsComponent } from './customers-detaills/customers-detaills.component';
import { guardiaoGuard } from './guardiao.guard';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { WeatherComponent } from './weather/weather.component';
import { PipesComponent } from './pipes/pipes.component';

export const routes: Routes = [
    {path: 'hello-word', title:'Hello Word', component: HelloWordComponent, children: [
        {path: 'filho-a', title: 'Filho A', component: FilhoAComponent},
        {path: 'filho-b', title: 'Filho B', component: FilhoBComponent},
        {path: 'filho-c', title: 'Filho C', component: FilhoCComponent},
        {path: 'filho-d', title: 'Filho D', component: FilhoDComponent}
    ]}, 
    {path: 'data-binding', title: 'Data Binding', component: DataBindingComponent, canActivate: [guardiaoGuard]},
    {path: 'directives', title: 'Directives', component: DirectivesComponent},
    {path: 'customers', title: 'Customers', component: CustomerListComponent},
    {path: 'customers/:id', title: 'Customers Dataills', component: CustomersDetaillsComponent},
    {path: 'reactive-form', title: 'Reactive Form', component: ReactiveFormComponent},
    {path: 'template-form', title: 'Template Form', component: TemplateFormComponent},
    {path: 'weather', title: 'Clima', component: WeatherComponent},
    {path: 'pipes', title: 'Pipes', component: PipesComponent},
    {path: '', redirectTo: '/hello-word', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
