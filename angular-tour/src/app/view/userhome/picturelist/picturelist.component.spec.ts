import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicturelistComponent } from './picturelist.component';

describe('PicturelistComponent', () => {
  let component: PicturelistComponent;
  let fixture: ComponentFixture<PicturelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicturelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicturelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
