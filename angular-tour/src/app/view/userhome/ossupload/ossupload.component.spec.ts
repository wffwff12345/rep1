import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OssuploadComponent } from './ossupload.component';

describe('OssuploadComponent', () => {
  let component: OssuploadComponent;
  let fixture: ComponentFixture<OssuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OssuploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OssuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
