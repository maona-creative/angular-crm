import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeldertableComponent } from './weldertable.component';

describe('WeldertableComponent', () => {
  let component: WeldertableComponent;
  let fixture: ComponentFixture<WeldertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeldertableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeldertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
