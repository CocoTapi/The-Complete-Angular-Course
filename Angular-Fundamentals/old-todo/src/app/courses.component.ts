import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title | uppercase }}</h2>
        <img [src]="imageURL" /> 
        <ul>
            <li *ngFor="let course of courses">
            {{course}}
            </li>
        </ul>

        <!-- <table>
            <tr>
            <td [attr.colspan]="colSpan"></td>
            </tr>
        </table> -->

        <button class="btn btn-primary"[class.active]="isActive" >Save</button>
        <button [style.backgroundColor]="isActive ? 'blue': 'red'" >Cancel</button>
        <button (click)="onSave($event)" >Click me!</button>
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
        <!-- import formsModule in app.module.ts to use "ngModule" -->

        {{ course.title | uppercase }} <br/>
        {{ course.rating | number: '1.1-1' }}<br/>
        {{ course.students | number }}<br/>
        {{ course.price | currency: 'AUD': true: '3.2-2' }}<br/>
        {{ course.releaseDate | date: 'shortDate' }} <br/>

        {{ text | summary: 100 }}
    `
})
export class CoursesComponent {
    title = "List of courses";
    courses;
    imageURL = "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/01/Pokemon-Ash-Pikachu.jpg?q=50&fit=crop&w=1100&h=618&dpr=1.5"
    colSpan = 2;

    isActive = false;
    email = '';

    onSave($event: Event){
        console.log("Button was clicked!", $event)
    }

    onKeyUp(){
        console.log("Enter was pressed", this.email)
    }

    course = {
        title: "The Computer Angular Course",
        rating: 4.23425,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    text = `
        An online course is a program of learning that's organized according to a syllabus (usually in units) and that takes place in a virtual space. Online courses can be informal and focused on one skill or as formal as leading to a certification or degree.
    `

   constructor(service: CoursesService){
    this.courses = service.getCourses();
   }
}