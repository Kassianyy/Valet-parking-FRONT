import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegVehiculoPage } from './reg-vehiculo.page';

describe('RegVehiculoPage', () => {
  let component: RegVehiculoPage;
  let fixture: ComponentFixture<RegVehiculoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
