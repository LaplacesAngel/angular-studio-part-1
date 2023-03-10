import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerimentsComponent } from './exeriments.component';

describe('ExerimentsComponent', () => {
  let component: ExerimentsComponent;
  let fixture: ComponentFixture<ExerimentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerimentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
