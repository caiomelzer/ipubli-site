import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPublisComponent } from './ipublis.component';

describe('IPublisComponent', () => {
  let component: IPublisComponent;
  let fixture: ComponentFixture<IPublisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IPublisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IPublisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
