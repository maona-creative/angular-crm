import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelderformsComponent } from './welderforms.component';

describe('WelderformsComponent', () => {
  let component: WelderformsComponent;
  let fixture: ComponentFixture<WelderformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelderformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelderformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
