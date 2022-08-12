import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewseditorComponent } from './newseditor.component';

describe('NewseditorComponent', () => {
  let component: NewseditorComponent;
  let fixture: ComponentFixture<NewseditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewseditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewseditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
