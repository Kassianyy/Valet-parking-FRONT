import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaitingPage } from './waiting.page';

describe('WaitingPage', () => {
  let component: WaitingPage;
  let fixture: ComponentFixture<WaitingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
