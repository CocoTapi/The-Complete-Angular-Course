import { NgClass, NgFor, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';

interface Activity {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor, NgClass, NgStyle, InputFormatDirective, ZippyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  courses = [1, 2, 3];

  viewMode = 'list';

  activities: Activity[] = [];

  isSelected: boolean = false;

  canSave: boolean = true;

  onAdd() {
    this.activities.push({ id: 4, name: 'activity4' })
  }

  onRemove(activity: Activity) {
    let index = this.activities.indexOf(activity);
    if (index !== -1) this.activities.splice(index, 1);
  }

  loadActivities() {
    this.activities = [
      { id: 1, name: 'Activity 1' },
      { id: 2, name: 'Activity 2' },
      { id: 3, name: 'Activity 3' },
    ]
  }

  //if you deal with large data, use this to get better performance to reduce refetch data
  trackActivity(index: number, activity: Activity){
    return activity ? activity.id : undefined;
  }

  onClick(){
    this.isSelected = !this.isSelected;
  }
}
