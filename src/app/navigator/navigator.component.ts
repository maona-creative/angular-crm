import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { WelderformsComponent } from '../welderforms/welderforms.component';
import { CommonModule } from '@angular/common';
import { FinmetalformsComponent } from '../finmetalforms/finmetalforms.component';


import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navigator',
  standalone: true,
  imports: [
   
    WelderformsComponent,
    ButtonModule,
    CommonModule,
    FinmetalformsComponent,
    MenubarModule
    

  ],
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css'
})
export class NavigatorComponent {
  
  items: MenuItem[] | undefined;

  constructor(
    private router: Router
   ) {}

  ngOnInit() {
    this.items = [
        {
            label: 'Welders',
            icon: 'pi pi-palette',
            items: [
                {
                    label: 'Add new welder',
                    route: '/welder-forms'
                },
                {
                    label: 'Welder table',
                    route: '/welder-table'
                }
            ]
        },

        {
        label: 'FinMetal',
        icon: 'pi pi-palette',
        items: [
            {
                label: 'Add new finmetal',
                route: '/finmetal-forms'
            },
            {
                label: 'Finmetal',
                route: '/finmetal-forms'
            }
          ]
        }
      
    ];
 }
}

