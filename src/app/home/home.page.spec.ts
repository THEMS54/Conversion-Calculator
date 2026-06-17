import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HomePage } from './home.page';

import {
  conversionMetrics,
  lengthUnits,
  lengthConversionMatrix,
} from 'src/assets/config/metrics.config';

describe('HomePage', () => {
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnInit should initialize metricList from config', () => {
    component.ngOnInit();
    expect(component.metricList).toEqual(conversionMetrics);
  });

  it('loadUnitsForMetrics should load Length units and description and set defaults', () => {
    component.selectedMetric = 'Length';
    // ensure metric units are set after loading
    component.loadUnitsForMetrics();
    expect(component.selectedMetricUnits).toEqual(lengthUnits);
    expect(component.selectedMetricDescription).toBeDefined();
    // defaults for selected units and cleared values
    expect(component.selectedUnit1).toBe(lengthUnits[0]);
    expect(component.selectedUnit2).toBe(lengthUnits[1]);
    expect(component.selectedUnit1Value).toBe('');
    expect(component.selectedUnit2Value).toBe('');
  });

  it('onUnitChange should rotate the other unit when both units are equal (unit1)', () => {
    component.selectedMetricUnits = ['A', 'B', 'C'];
    component.selectedUnit1 = 'A';
    component.selectedUnit2 = 'A';
    component.onUnitChange('unit1');
    expect(component.selectedUnit2).not.toEqual('A');
  });

  it('convertUnit1 should clear outputs for invalid input', () => {
    component.selectedUnit1Value = '';
    component.convertUnit1(null);
    expect(component.isUnit1Output).toBeFalse();
    expect(component.isUnit2Output).toBeFalse();
    expect(component.selectedUnit1Value).toBe('');
    expect(component.selectedUnit2Value).toBe('');
  });

  it('convertUnit1 should convert length value using lengthConversionMatrix', () => {
    component.selectedMetric = 'Length';
    component.selectedMetricUnits = lengthUnits;
    component.selectedUnit1 = lengthUnits[0]; // from
    component.selectedUnit2 = lengthUnits[1]; // to
    const input = '1000';
    component.selectedUnit1Value = input;

    // compute expected using matrix
    const fromIdx = lengthUnits.indexOf(component.selectedUnit1);
    const toIdx = lengthUnits.indexOf(component.selectedUnit2);
    const expected = Number(input) * lengthConversionMatrix[fromIdx][toIdx];

    component.convertUnit1(null);
    expect(component.isUnit2Output).toBeTrue();
    expect(component.selectedUnit2Value).toBe(String(expected));
  });

  it('getTempMetricsCalculation should convert Celsius to Fahrenheit correctly', () => {
    component.selectedMetric = 'Temperature';
    const res = component.getTempMetricsCalculation('0', 'Degree Celsius', 'Fahrenheit');
    expect(res).toBe(32);
  });
});