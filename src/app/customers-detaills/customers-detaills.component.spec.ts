import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersDetaillsComponent } from './customers-detaills.component';

describe('CustomersDetaillsComponent', () => {
  let component: CustomersDetaillsComponent;
  let fixture: ComponentFixture<CustomersDetaillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersDetaillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomersDetaillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
