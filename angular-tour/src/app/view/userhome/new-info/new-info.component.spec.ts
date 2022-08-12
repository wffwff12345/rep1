import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInfoComponent } from './new-info.component';

describe('NewInfoComponent', () => {
  let component: NewInfoComponent;
  let fixture: ComponentFixture<NewInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
