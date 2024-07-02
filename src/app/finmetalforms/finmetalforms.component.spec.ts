import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinmetalformsComponent } from './finmetalforms.component';

describe('FinmetalformsComponent', () => {
  let component: FinmetalformsComponent;
  let fixture: ComponentFixture<FinmetalformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinmetalformsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinmetalformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
