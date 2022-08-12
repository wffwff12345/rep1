import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentlistComponent } from './contentlist.component';

describe('ContentlistComponent', () => {
  let component: ContentlistComponent;
  let fixture: ComponentFixture<ContentlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
