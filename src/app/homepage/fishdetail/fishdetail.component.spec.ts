import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishdetailComponent } from './fishdetail.component';

describe('FishdetailComponent', () => {
  let component: FishdetailComponent;
  let fixture: ComponentFixture<FishdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
