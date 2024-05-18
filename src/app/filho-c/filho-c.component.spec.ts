import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoCComponent } from './filho-c.component';

describe('FilhoCComponent', () => {
  let component: FilhoCComponent;
  let fixture: ComponentFixture<FilhoCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilhoCComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilhoCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
