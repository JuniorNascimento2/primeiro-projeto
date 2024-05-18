import { Component } from '@angular/core';
import { FilhoAComponent } from "../filho-a/filho-a.component";
import { FilhoBComponent } from "../filho-b/filho-b.component";
import { FilhoCComponent } from "../filho-c/filho-c.component";
import { FilhoDComponent } from "../filho-d/filho-d.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-hello-word',
    standalone: true,
    templateUrl: './hello-word.component.html',
    styleUrl: './hello-word.component.css',
    imports: [FilhoAComponent, FilhoBComponent, FilhoCComponent, FilhoDComponent, RouterModule, CommonModule]
})
export class HelloWordComponent {

    textoVaiProFilho: string = '';

    textoVeioDoFilho: string = '';

}
