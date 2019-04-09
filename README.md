# sspa-bundle-file-unpack

This is a simple single-spa-angular app by <b>Angular 7</b> and <b>single-spa-angular@3.0.0-beta.12</b>. 
What I'm trying to do there is to modify `ng serve` and `ng build` in `angular.json` to the default angular settings..
The reason I did this is because our team prefers to have multiple `.js` files rather than one main.js file under dist folder, so that we can async load or only load common files once...etc.

<b>Run in root folder:</b>

`npm install`

Check angular app is running fine.

`cd navbar`

`ng build`

`ng serve`

Then go back to root folder and run:

`npx serve -s`

The only error in console is 

`Uncaught TypeError: Cannot read property 'default' of undefined at (index):24`
