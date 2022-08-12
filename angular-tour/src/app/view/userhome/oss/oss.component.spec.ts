import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OssComponent } from './oss.component';

describe('OssComponent', () => {
  let component: OssComponent;
  let fixture: ComponentFixture<OssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
