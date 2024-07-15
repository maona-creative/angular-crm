import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinmetaltableComponent } from './finmetaltable.component';

describe('FinmetaltableComponent', () => {
  let component: FinmetaltableComponent;
  let fixture: ComponentFixture<FinmetaltableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinmetaltableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinmetaltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
