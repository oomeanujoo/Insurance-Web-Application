# **ngb-toast**
This library was generated with [Angular CLI 9](https://github.com/angular/angular-cli).

## Installation
Using npm:
> npm install ngb-toast --save 

## Setup
import **NgbToastModule** into your AppModule

    import { BrowserModule } from  '@angular/platform-browser';
    import { NgModule } from  '@angular/core';
    import { AppComponent } from  './app.component';
	import { NgbToastModule } from  'ngb-toast';
	
	@NgModule({
		declarations: [ AppComponent ],
		imports: [
			BrowserModule,
			NgbToastModule
		],
		providers: [],
		bootstrap: [AppComponent]
	})
	
	export  class  AppModule { }
	
## Use
### Step 1
Add <ngb-toast-container> tag in your app.component.html file

    <ngb-toast-container></ngb-toast-container>
    <router-outlet></router-outlet>

### Step 2
Import **NgbToastService** into your component.ts file
	
	import  {  NgbToastService }  from  'ngb-toast';
    
	@Component({...})
	export  class  YourComponent  {
		constructor(private  toastService:  NgbToastService) {}
		...
		showSuccess(): void {
			const toast: NgbToast = {
				toastType:  NgbToastType.Success,
				text:  "This is an sample success toast with dismissible action",
				dismissible:  true,
				onDismiss: () => {
					console.log("Toast dismissed!!");
				}
			}
			this.toastService.show(toast);
		}
		
		removeToast(toast: NgbToast): void {
			this.toastService.remove(toast);
		}
		
		...
		
	}

## Options
***NgbToastType***
 - Success
 - Info
 - Warning
 - Danger
 - Primary
 - Secondary
 - Light
 - Dark

***dismissible: boolean*** - If true will show close button else not.

***timeInSeconds: number*** - If passed toast will disappear after specified time else by default it will be close after 5 seconds

***onDismiss: Function*** - callback function called after toast dismissed