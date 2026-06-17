import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { IonicModule } from "@ionic/angular";
import { HomePage } from "./home.page";

describe("HomePage", () => {
  let fixture: ComponentFixture<HomePage>;
  let component: HomePage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [CommonModule, RouterTestingModule, IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create the component", () => {
    expect(component).toBeTruthy();
  });

  it("should render a link to conversion page", () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector("ion-button");

    expect(button).toBeTruthy();
    expect(button?.getAttribute("ng-reflect-router-link")).toContain(
      "/conversion",
    );
  });
});
