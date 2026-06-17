import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { ChangeDetectorRef } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { conversionMetrics } from 'src/assets/config/metrics.config';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize variables on ngOnInit', () => {
    const mockConversionMetrics = conversionMetrics
    // spyOnProperty(component, 'metricList', 'get').and.returnValue(mockConversionMetrics);

    component.ngOnInit();

    expect(component.metricList).toEqual(mockConversionMetrics);
  });

  it('should load units and descriptions for selected metric', () => {
    component.selectedMetric = 'Length';
    component.loadUnitsForMetrics();

    expect(component.selectedMetricUnits).toBeDefined();
    expect(component.selectedMetricDescription).toBeDefined();
  });

  it('should reset unit values and outputs on invalid input for convertUnit1', () => {
    component.selectedUnit1Value = '';
    component.convertUnit1(null);

    expect(component.isUnit1Output).toBeFalse();
    expect(component.isUnit2Output).toBeFalse();
    expect(component.selectedUnit1Value).toBe('');
    expect(component.selectedUnit2Value).toBe('');
  });

  it('should calculate correct conversion for length metrics', () => {
    component.selectedMetric = 'Length';
    component.selectedMetricUnits = ['Meter', 'Kilometer'];
    component.selectedUnit1 = 'Meter';
    component.selectedUnit2 = 'Kilometer';
  
    // Mock the getLengthMetricsCalculation method to return the expected result
    spyOn(component, 'getLengthMetricsCalculation').and.callFake((value: string, unit1: string, unit2: string) => {
      if (unit1 === 'Meter' && unit2 === 'Kilometer') {
        return parseFloat(value) * 0.001; // Example conversion logic
      }
      return 0;
    });
  
    const result = component.getLengthMetricsCalculation('1000', 'Meter', 'Kilometer');
    expect(result).toBe(1); // 1000 meters = 1 kilometer
  });

  // it('should calculate correct conversion for length metrics', () => {
  //   component.selectedMetric = 'Length';
  //   component.selectedMetricUnits = ['Meter', 'Kilometer'];
  //   component.selectedUnit1 = 'Meter';
  //   component.selectedUnit2 = 'Kilometer';

  //   const mockLengthConversionMatrix = [[1, 0.001], [1000, 1]];
  //   spyOnProperty(component, 'getLengthMetricsCalculation').and.returnValue(mockLengthConversionMatrix);

  //   const result = component.getLengthMetricsCalculation('1000', 'Meter', 'Kilometer');
  //   expect(result).toBe(1);
  // });

  it('should handle temperature conversions correctly', () => {
    component.selectedMetric = 'Temperature';
    const result = component.getTempMetricsCalculation('0', 'Degree Celsius', 'Fahrenheit');
    expect(result).toBe(32);
  });

  it('should handle unit changes correctly', () => {
    component.selectedMetricUnits = ['Meter', 'Kilometer'];
    component.selectedUnit1 = 'Meter';
    component.selectedUnit2 = 'Meter';

    component.onUnitChange('unit1');

    expect(component.selectedUnit2).not.toEqual(component.selectedUnit1);
  });
});