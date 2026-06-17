import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import {
  areaConversionMatrix,
  areaUnits,
  conversionMetrics,
  energyConversionMatrix,
  energyUnits,
  frequencyConversionMatrix,
  frequencyUnits,
  lengthConversionMatrix,
  lengthUnits,
  massConversionMatrix,
  massUnits,
  pressureConversionMatrix,
  pressureUnits,
  speedConversionMatrix,
  speedUnits,
  temperatureUnits,
  timeConversionMatrix,
  timeUnits,
  volumeConversionMatrix,
  volumeUnits,
} from "src/assets/config/metrics.config";
import { ConversionPage } from "./conversion.page";

describe("ConversionPage", () => {
  let fixture: ComponentFixture<ConversionPage>;
  let component: ConversionPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConversionPage],
      imports: [CommonModule, FormsModule, IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ConversionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("ngOnInit should initialize metricList from config", () => {
    component.ngOnInit();
    expect(component.metricList).toEqual(conversionMetrics);
  });

  it("onMetricChange should load units for the selected metric", () => {
    component.selectedMetric = "Length";
    spyOn(component, "loadUnitsForMetrics");

    component.onMetricChange();

    expect(component.loadUnitsForMetrics).toHaveBeenCalled();
  });

  it("loadUnitsForMetrics should load Length units, reset values, and set defaults", () => {
    component.selectedMetric = "Length";
    component.isUnit1Output = true;
    component.isUnit2Output = true;
    component.selectedUnit1Value = "12";
    component.selectedUnit2Value = "24";

    component.loadUnitsForMetrics();

    expect(component.selectedMetricUnits).toEqual(lengthUnits);
    expect(component.selectedMetricDescription).toBeDefined();
    expect(component.selectedUnit1).toBe(lengthUnits[0]);
    expect(component.selectedUnit2).toBe(lengthUnits[1]);
    expect(component.selectedUnit1Value).toBe("");
    expect(component.selectedUnit2Value).toBe("");
    expect(component.isUnit1Output).toBeFalse();
    expect(component.isUnit2Output).toBeFalse();
  });

  it("loadUnitsForMetrics should load Temperature units and description", () => {
    component.selectedMetric = "Temperature";

    component.loadUnitsForMetrics();

    expect(component.selectedMetricUnits).toEqual(temperatureUnits);
    expect(component.selectedMetricDescription).toBeDefined();
    expect(component.selectedUnit1).toBe(temperatureUnits[0]);
    expect(component.selectedUnit2).toBe(temperatureUnits[1]);
  });

  it("onUnitChange should rotate the other unit when both units are equal (unit1)", () => {
    component.selectedMetricUnits = ["A", "B", "C"];
    component.selectedUnit1 = "A";
    component.selectedUnit2 = "A";
    spyOn(component, "convertUnit1");

    component.onUnitChange("unit1");

    expect(component.selectedUnit2).not.toEqual("A");
    expect(component.convertUnit1).toHaveBeenCalledWith(
      component.selectedUnit1Value,
    );
  });

  it("onUnitChange should wrap to the first unit when unit2 matches the last option", () => {
    component.selectedMetricUnits = ["A", "B", "C"];
    component.selectedUnit1 = "C";
    component.selectedUnit2 = "C";
    spyOn(component, "convertUnit1");

    component.onUnitChange("unit1");

    expect(component.selectedUnit2).toBe("A");
    expect(component.convertUnit1).toHaveBeenCalledWith(
      component.selectedUnit1Value,
    );
  });

  it("onUnitChange should rotate unit1 and convert from unit2 when both units are equal", () => {
    component.selectedMetricUnits = ["A", "B", "C"];
    component.selectedUnit1 = "B";
    component.selectedUnit2 = "B";
    component.selectedUnit2Value = "7";
    spyOn(component, "convertUnit2");

    component.onUnitChange("unit2");

    expect(component.selectedUnit1).toBe("C");
    expect(component.convertUnit2).toHaveBeenCalledWith("7");
  });

  it("convertUnit1 should clear outputs for invalid input", () => {
    component.selectedUnit1Value = "";
    component.convertUnit1(null);
    expect(component.isUnit1Output).toBeFalse();
    expect(component.isUnit2Output).toBeFalse();
    expect(component.selectedUnit1Value).toBe("");
    expect(component.selectedUnit2Value).toBe("");
  });

  it("convertUnit1 should convert length value using lengthConversionMatrix", () => {
    component.selectedMetric = "Length";
    component.selectedMetricUnits = lengthUnits;
    component.selectedUnit1 = lengthUnits[0];
    component.selectedUnit2 = lengthUnits[1];
    const input = "1000";
    component.selectedUnit1Value = input;

    const fromIdx = lengthUnits.indexOf(component.selectedUnit1);
    const toIdx = lengthUnits.indexOf(component.selectedUnit2);
    const expected = Number(input) * lengthConversionMatrix[fromIdx][toIdx];

    component.convertUnit1(null);
    expect(component.isUnit2Output).toBeTrue();
    expect(component.selectedUnit2Value).toBe(String(expected));
  });

  it("convertUnit2 should clear outputs for invalid input", () => {
    component.selectedUnit1Value = "5";
    component.selectedUnit2Value = "abc";

    component.convertUnit2(null);

    expect(component.isUnit1Output).toBeFalse();
    expect(component.isUnit2Output).toBeFalse();
    expect(component.selectedUnit1Value).toBe("");
    expect(component.selectedUnit2Value).toBe("");
  });

  it("convertUnit2 should convert length value back into unit1", () => {
    component.selectedMetric = "Length";
    component.selectedMetricUnits = lengthUnits;
    component.selectedUnit1 = lengthUnits[0];
    component.selectedUnit2 = lengthUnits[1];
    const input = "1";
    component.selectedUnit2Value = input;

    const fromIdx = lengthUnits.indexOf(component.selectedUnit2);
    const toIdx = lengthUnits.indexOf(component.selectedUnit1);
    const expected = Number(input) * lengthConversionMatrix[fromIdx][toIdx];

    component.convertUnit2(null);

    expect(component.isUnit1Output).toBeTrue();
    expect(component.isUnit2Output).toBeFalse();
    expect(component.selectedUnit1Value).toBe(String(expected));
  });

  it("getCalculation should return an empty string for unsupported metrics", () => {
    component.selectedMetric = "Unsupported";

    expect(component.getCalculation("10", "A", "B")).toBe("");
  });

  it("getTempMetricsCalculation should convert Celsius to Fahrenheit correctly", () => {
    component.selectedMetric = "Temperature";
    const res = component.getTempMetricsCalculation(
      "0",
      "Degree Celsius",
      "Fahrenheit",
    );
    expect(res).toBe(32);
  });

  it("getTempMetricsCalculation should convert Kelvin to Fahrenheit correctly", () => {
    component.selectedMetric = "Temperature";

    const res = component.getTempMetricsCalculation(
      "273.15",
      "Kelvin",
      "Fahrenheit",
    );

    expect(res).toBe(32);
  });

  it("getCalculation should convert Area using area matrix", () => {
    component.selectedMetric = "Area";
    component.selectedMetricUnits = areaUnits;
    const value = "3";
    const fromUnit = areaUnits[0];
    const toUnit = areaUnits[1];
    const fromIdx = areaUnits.indexOf(fromUnit);
    const toIdx = areaUnits.indexOf(toUnit);
    const expected = Number(value) * areaConversionMatrix[fromIdx][toIdx];

    const result = component.getCalculation(value, fromUnit, toUnit);

    expect(result).toBe(expected);
  });

  it("getCalculation should convert Volume using volume matrix", () => {
    component.selectedMetric = "Volume";
    component.selectedMetricUnits = volumeUnits;
    const value = "2";
    const fromUnit = volumeUnits[0];
    const toUnit = volumeUnits[1];
    const fromIdx = volumeUnits.indexOf(fromUnit);
    const toIdx = volumeUnits.indexOf(toUnit);
    const expected = Number(value) * volumeConversionMatrix[fromIdx][toIdx];

    const result = component.getCalculation(value, fromUnit, toUnit);

    expect(result).toBe(expected);
  });

  it("getCalculation should convert Mass using mass matrix", () => {
    component.selectedMetric = "Mass";
    component.selectedMetricUnits = massUnits;
    const value = "2";
    const fromUnit = massUnits[0];
    const toUnit = massUnits[1];
    const fromIdx = massUnits.indexOf(fromUnit);
    const toIdx = massUnits.indexOf(toUnit);
    const expected = Number(value) * massConversionMatrix[fromIdx][toIdx];

    const result = component.getCalculation(value, fromUnit, toUnit);

    expect(result).toBe(expected);
  });

  it("getCalculation should convert Speed using speed matrix", () => {
    component.selectedMetric = "Speed";
    component.selectedMetricUnits = speedUnits;
    const value = "10";
    const fromUnit = speedUnits[0];
    const toUnit = speedUnits[1];
    const fromIdx = speedUnits.indexOf(fromUnit);
    const toIdx = speedUnits.indexOf(toUnit);
    const expected = Number(value) * speedConversionMatrix[fromIdx][toIdx];

    const result = component.getCalculation(value, fromUnit, toUnit);

    expect(result).toBe(expected);
  });

  it("getCalculation should convert Frequency using frequency matrix", () => {
    component.selectedMetric = "Frequency";
    component.selectedMetricUnits = frequencyUnits;
    const value = "120";
    const fromUnit = frequencyUnits[0];
    const toUnit = frequencyUnits[1];
    const fromIdx = frequencyUnits.indexOf(fromUnit);
    const toIdx = frequencyUnits.indexOf(toUnit);
    const expected = Number(value) * frequencyConversionMatrix[fromIdx][toIdx];

    const result = component.getCalculation(value, fromUnit, toUnit);

    expect(result).toBe(expected);
  });

  it("getCalculation should convert Time using time matrix", () => {
    component.selectedMetric = "Time";
    component.selectedMetricUnits = timeUnits;
    const value = "5";
    const fromUnit = timeUnits[0];
    const toUnit = timeUnits[1];
    const fromIdx = timeUnits.indexOf(fromUnit);
    const toIdx = timeUnits.indexOf(toUnit);
    const expected = Number(value) * timeConversionMatrix[fromIdx][toIdx];

    const result = component.getCalculation(value, fromUnit, toUnit);

    expect(result).toBe(expected);
  });

  it("getCalculation should convert Pressure using pressure matrix", () => {
    component.selectedMetric = "Pressure";
    component.selectedMetricUnits = pressureUnits;
    const value = "8";
    const fromUnit = pressureUnits[0];
    const toUnit = pressureUnits[1];
    const fromIdx = pressureUnits.indexOf(fromUnit);
    const toIdx = pressureUnits.indexOf(toUnit);
    const expected = Number(value) * pressureConversionMatrix[fromIdx][toIdx];

    const result = component.getCalculation(value, fromUnit, toUnit);

    expect(result).toBe(expected);
  });

  it("getCalculation should convert Energy using energy matrix", () => {
    component.selectedMetric = "Energy";
    component.selectedMetricUnits = energyUnits;
    const value = "8";
    const fromUnit = energyUnits[0];
    const toUnit = energyUnits[1];
    const fromIdx = energyUnits.indexOf(fromUnit);
    const toIdx = energyUnits.indexOf(toUnit);
    const expected = Number(value) * energyConversionMatrix[fromIdx][toIdx];

    const result = component.getCalculation(value, fromUnit, toUnit);

    expect(result).toBe(expected);
  });
});
