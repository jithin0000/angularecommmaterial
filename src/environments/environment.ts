// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
   firebaseConfig : {
    apiKey: 'AIzaSyD_n6PEUJqgvlBOETEl8svnQdB139C7Vvo',
    authDomain: 'firstrproject.firebaseapp.com',
    databaseURL: 'https://firstrproject.firebaseio.com',
    projectId: 'firstrproject',
    storageBucket: 'firstrproject.appspot.com',
    messagingSenderId: '104131095993',
    appId: '1:104131095993:web:3f4284837f58fb89'
  },
  url: "https://ecommang.herokuapp.com/api"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
