import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTabComponent } from './card-tab.component';

describe('CardTabComponent', () => {
  let component: CardTabComponent;
  let fixture: ComponentFixture<CardTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
