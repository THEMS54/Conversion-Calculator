# Conversion-Calculator

A simple Ionic + Angular conversion calculator mobile app scaffolded with Capacitor.

Quick links
- Project config: [angular.json](angular.json)
- Node scripts & deps: [package.json](package.json)
- Capacitor config: [capacitor.config.ts](capacitor.config.ts)
- Ionic config: [ionic.config.json](ionic.config.json)
- Global styles: [src/global.scss](src/global.scss)
- Test runner: [karma.conf.js](karma.conf.js)
- Main app component: [`AppComponent`](src/app/app.component.ts)
- App module: [`AppModule`](src/app/app.module.ts)

Prerequisites
- Node.js (recommended LTS)
- npm or pnpm
- Ionic CLI (optional, for device/emulator flow)
- Android Studio (for Android builds)

Quick start
1. Install dependencies:
   ```sh
   npm install

2. Run the app in development:
    ng serve
or with Ionic:
    ionic serve

Build for production
    npm run build
    # or
    ng build --prod

Capacitor / native

Sync web build to native projects:
    npx cap sync
Open Android:
    npx cap open android
Testing
    Run unit tests (Karma + Jasmine):
        ng test
Configuration and code pointers

Component bootstrap: see AppModule.
Root component: see AppComponent.
Test config: karma.conf.js and TypeScript test config: tsconfig.spec.json
License

MIT (follow project / dependency licenses)
