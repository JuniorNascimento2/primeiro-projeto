import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoDComponent } from './filho-d.component';

describe('FilhoDComponent', () => {
  let component: FilhoDComponent;
  let fixture: ComponentFixture<FilhoDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilhoDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilhoDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
