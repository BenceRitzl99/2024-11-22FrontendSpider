import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SPIDERSComponent } from './spiders.component';

describe('SPIDERSComponent', () => {
  let component: SPIDERSComponent;
  let fixture: ComponentFixture<SPIDERSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SPIDERSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SPIDERSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
