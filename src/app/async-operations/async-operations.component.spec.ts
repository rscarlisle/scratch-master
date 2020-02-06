import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncOperationsComponent } from '@src/app/async-operations/async-operations.component';

describe('AsyncOperationsComponent', () => {
  let component: AsyncOperationsComponent;
  let fixture: ComponentFixture<AsyncOperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncOperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
