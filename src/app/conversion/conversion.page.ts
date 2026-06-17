import { ChangeDetectorRef, Component, OnInit, inject } from "@angular/core";
import {
  areaConversionMatrix,
  areaDescription,
  areaUnits,
  conversionMetrics,
  energyConversionMatrix,
  energyDescription,
  energyUnits,
  frequencyConversionMatrix,
  frequencyDescription,
  frequencyUnits,
  lengthConversionMatrix,
  lengthDescription,
  lengthUnits,
  massConversionMatrix,
  massDescription,
  massUnits,
  pressureConversionMatrix,
  pressureDescription,
  pressureUnits,
  speedConversionMatrix,
  speedDescription,
  speedUnits,
  temperatureDescription,
  temperatureUnits,
  timeConversionMatrix,
  timeDescription,
  timeUnits,
  volumeConversionMatrix,
  volumeDescription,
  volumeUnits,
} from "src/assets/config/metrics.config";

@Component({
  selector: "app-conversion",
  templateUrl: "./conversion.page.html",
  styleUrls: ["./conversion.page.scss"],
  standalone: false,
})
export class ConversionPage implements OnInit {
  private changeDetector = inject(ChangeDetectorRef);

  metricList!: string[];
  selectedMetricUnits!: string[];
  selectedMetric = "";
  selectedUnit1!: string;
  selectedUnit2!: string;
  selectedUnit1Value!: string;
  selectedUnit2Value!: string;
  selectedMetricDescription!: {
    header: string;
    list: string[];
  };
  isUnit1Output = false;
  isUnit2Output = false;

  ngOnInit(): void {
    this.initVariables();
  }

  initVariables() {
    this.metricList = conversionMetrics;
  }

  onMetricChange() {
    this.loadUnitsForMetrics();
  }

  loadUnitsForMetrics() {
    switch (this.selectedMetric) {
      case "Length":
        this.selectedMetricUnits = lengthUnits;
        this.selectedMetricDescription = lengthDescription;
        break;
      case "Temperature":
        this.selectedMetricUnits = temperatureUnits;
        this.selectedMetricDescription = temperatureDescription;
        break;
      case "Area":
        this.selectedMetricUnits = areaUnits;
        this.selectedMetricDescription = areaDescription;
        break;
      case "Volume":
        this.selectedMetricUnits = volumeUnits;
        this.selectedMetricDescription = volumeDescription;
        break;
      case "Mass":
        this.selectedMetricUnits = massUnits;
        this.selectedMetricDescription = massDescription;
        break;
      case "Speed":
        this.selectedMetricUnits = speedUnits;
        this.selectedMetricDescription = speedDescription;
        break;
      case "Frequency":
        this.selectedMetricUnits = frequencyUnits;
        this.selectedMetricDescription = frequencyDescription;
        break;
      case "Time":
        this.selectedMetricUnits = timeUnits;
        this.selectedMetricDescription = timeDescription;
        break;
      case "Pressure":
        this.selectedMetricUnits = pressureUnits;
        this.selectedMetricDescription = pressureDescription;
        break;
      case "Energy":
        this.selectedMetricUnits = energyUnits;
        this.selectedMetricDescription = energyDescription;
        break;
      default:
        break;
    }

    this.isUnit1Output = false;
    this.isUnit2Output = false;
    this.selectedUnit1Value = "";
    this.selectedUnit2Value = "";
    this.selectedUnit1 = this.selectedMetricUnits[0];
    this.selectedUnit2 = this.selectedMetricUnits[1];
  }

  onUnitChange(whichUnit: string) {
    switch (whichUnit) {
      case "unit1":
        if (this.selectedUnit1 === this.selectedUnit2) {
          const selectedIndex = this.selectedMetricUnits.indexOf(
            this.selectedUnit1,
          );
          const jumpIndex =
            selectedIndex === this.selectedMetricUnits.length - 1
              ? 0
              : selectedIndex + 1;
          this.selectedUnit2 = this.selectedMetricUnits[jumpIndex];
        }
        this.convertUnit1(this.selectedUnit1Value);
        break;
      case "unit2":
        if (this.selectedUnit2 === this.selectedUnit1) {
          const selectedIndex = this.selectedMetricUnits.indexOf(
            this.selectedUnit2,
          );
          const jumpIndex =
            selectedIndex === this.selectedMetricUnits.length - 1
              ? 0
              : selectedIndex + 1;
          this.selectedUnit1 = this.selectedMetricUnits[jumpIndex];
        }
        this.convertUnit2(this.selectedUnit2Value);
        break;
      default:
        break;
    }
  }

  convertUnit1(_event: unknown) {
    if (
      this.selectedUnit1Value == null ||
      this.selectedUnit1Value.length === 0 ||
      isNaN(Number(this.selectedUnit1Value))
    ) {
      this.isUnit1Output = false;
      this.isUnit2Output = false;
      this.selectedUnit1Value = "";
      this.selectedUnit2Value = "";
      return;
    }

    this.isUnit1Output = false;
    this.isUnit2Output = true;
    this.selectedUnit2Value = this.getCalculation(
      this.selectedUnit1Value,
      this.selectedUnit1,
      this.selectedUnit2,
    ).toString();
    this.changeDetector.detectChanges();
  }

  convertUnit2(_event: unknown) {
    if (
      this.selectedUnit2Value == null ||
      this.selectedUnit2Value.length === 0 ||
      isNaN(Number(this.selectedUnit2Value))
    ) {
      this.isUnit1Output = false;
      this.isUnit2Output = false;
      this.selectedUnit1Value = "";
      this.selectedUnit2Value = "";
      return;
    }

    this.isUnit1Output = true;
    this.isUnit2Output = false;
    this.selectedUnit1Value = this.getCalculation(
      this.selectedUnit2Value,
      this.selectedUnit2,
      this.selectedUnit1,
    ).toString();
    this.changeDetector.detectChanges();
  }

  getCalculation(value: string, unit1: string, unit2: string) {
    switch (this.selectedMetric) {
      case "Length":
        return this.getLengthMetricsCalculation(value, unit1, unit2);
      case "Temperature":
        return this.getTempMetricsCalculation(value, unit1, unit2);
      case "Area":
        return this.getAreaMetricsCalculation(value, unit1, unit2);
      case "Volume":
        return this.getVolumeMetricsCalculation(value, unit1, unit2);
      case "Mass":
        return this.getMassMetricsCalculation(value, unit1, unit2);
      case "Speed":
        return this.getSpeedMetricsCalculation(value, unit1, unit2);
      case "Frequency":
        return this.getFrequencyMetricsCalculation(value, unit1, unit2);
      case "Time":
        return this.getTimeMetricsCalculation(value, unit1, unit2);
      case "Pressure":
        return this.getPressureMetricsCalculation(value, unit1, unit2);
      case "Energy":
        return this.getEnergyMetricsCalculation(value, unit1, unit2);
      default:
        return "";
    }
  }

  getLengthMetricsCalculation(value: string, unit1: string, unit2: string) {
    const fromUnitIndex = this.selectedMetricUnits.indexOf(unit1);
    const toUnitIndex = this.selectedMetricUnits.indexOf(unit2);
    const conversionFactor = lengthConversionMatrix[fromUnitIndex][toUnitIndex];
    return Number(value) * conversionFactor;
  }

  getTempMetricsCalculation(value: string, unit1: string, unit2: string) {
    let result = Number(value);

    if (unit1 === "Degree Celsius") {
      if (unit2 === "Fahrenheit") {
        result = (Number(value) * 9) / 5 + 32;
      } else if (unit2 === "Kelvin") {
        result = Number(value) + 273.15;
      }
    } else if (unit1 === "Fahrenheit") {
      if (unit2 === "Degree Celsius") {
        result = ((Number(value) - 32) * 5) / 9;
      } else if (unit2 === "Kelvin") {
        result = ((Number(value) - 32) * 5) / 9 + 273.15;
      }
    } else if (unit1 === "Kelvin") {
      if (unit2 === "Degree Celsius") {
        result = Number(value) - 273.15;
      } else if (unit2 === "Fahrenheit") {
        result = ((Number(value) - 273.15) * 9) / 5 + 32;
      }
    }

    return result;
  }

  getAreaMetricsCalculation(value: string, unit1: string, unit2: string) {
    const fromUnitIndex = this.selectedMetricUnits.indexOf(unit1);
    const toUnitIndex = this.selectedMetricUnits.indexOf(unit2);
    const conversionFactor = areaConversionMatrix[fromUnitIndex][toUnitIndex];
    return Number(value) * conversionFactor;
  }

  getVolumeMetricsCalculation(value: string, unit1: string, unit2: string) {
    const fromUnitIndex = this.selectedMetricUnits.indexOf(unit1);
    const toUnitIndex = this.selectedMetricUnits.indexOf(unit2);
    const conversionFactor = volumeConversionMatrix[fromUnitIndex][toUnitIndex];
    return Number(value) * conversionFactor;
  }

  getMassMetricsCalculation(value: string, unit1: string, unit2: string) {
    const fromUnitIndex = this.selectedMetricUnits.indexOf(unit1);
    const toUnitIndex = this.selectedMetricUnits.indexOf(unit2);
    const conversionFactor = massConversionMatrix[fromUnitIndex][toUnitIndex];
    return Number(value) * conversionFactor;
  }

  getSpeedMetricsCalculation(value: string, unit1: string, unit2: string) {
    const fromUnitIndex = this.selectedMetricUnits.indexOf(unit1);
    const toUnitIndex = this.selectedMetricUnits.indexOf(unit2);
    const conversionFactor = speedConversionMatrix[fromUnitIndex][toUnitIndex];
    return Number(value) * conversionFactor;
  }

  getFrequencyMetricsCalculation(value: string, unit1: string, unit2: string) {
    const fromUnitIndex = this.selectedMetricUnits.indexOf(unit1);
    const toUnitIndex = this.selectedMetricUnits.indexOf(unit2);
    const conversionFactor =
      frequencyConversionMatrix[fromUnitIndex][toUnitIndex];
    return Number(value) * conversionFactor;
  }

  getTimeMetricsCalculation(value: string, unit1: string, unit2: string) {
    const fromUnitIndex = this.selectedMetricUnits.indexOf(unit1);
    const toUnitIndex = this.selectedMetricUnits.indexOf(unit2);
    const conversionFactor = timeConversionMatrix[fromUnitIndex][toUnitIndex];
    return Number(value) * conversionFactor;
  }

  getPressureMetricsCalculation(value: string, unit1: string, unit2: string) {
    const fromUnitIndex = this.selectedMetricUnits.indexOf(unit1);
    const toUnitIndex = this.selectedMetricUnits.indexOf(unit2);
    const conversionFactor =
      pressureConversionMatrix[fromUnitIndex][toUnitIndex];
    return Number(value) * conversionFactor;
  }

  getEnergyMetricsCalculation(value: string, unit1: string, unit2: string) {
    const fromUnitIndex = this.selectedMetricUnits.indexOf(unit1);
    const toUnitIndex = this.selectedMetricUnits.indexOf(unit2);
    const conversionFactor = energyConversionMatrix[fromUnitIndex][toUnitIndex];
    return Number(value) * conversionFactor;
  }
}
