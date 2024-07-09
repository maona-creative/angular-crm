import { Component, OnInit } from '@angular/core';

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
export class NavigatorComponent implements OnInit {
  
  items: MenuItem[] | undefined;

  constructor(
    private router: Router
   ) {}

  ngOnInit() {
    this.items = [
        {
            label: 'Welders',
            icon: 'pi pi-list',
            items: [
                {
                    label: 'Add new welder',
                    icon: 'pi pi-user-plus',
                    route: '/welder-forms'
                },
                {
                    label: 'Welder table',
                    icon: 'pi pi-file',
                    route: '/welder-table'
                }
            ]
        },

        {
        label: 'FinMetal',
        icon: 'pi pi-list',
        items: [
            {
                label: 'Add new finmetal',
                icon: 'pi pi-user-plus',
                route: '/finmetal-forms'

            },
            {
                label: 'Finmetal',
                icon: 'pi pi-file',
                route: '/finmetal-forms'
            }
          ]
        }
      
    ];
 }
}

