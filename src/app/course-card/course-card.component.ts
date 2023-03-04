import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course'

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output()
  courseSelected: EventEmitter<Course> = new EventEmitter<Course>();

  constructor() {}
  ngOnInit() {}

  onCourseView() {
    alert("Click to view Course")

    this.courseSelected.emit(this.course);
  }

  // We use this to add/remove classes from the card
  cardClasses() {
    if  (this.course.category === 'BEGINNER') {
     return 'beginner'
    } else if  (this.course.category === 'INTERMEDIATE') {
      return 'intermediate'
    } if  (this.course.category === 'ADVANCED') {
      return 'advanced'
    }
  }

  // We use this to add/change style
  cardStyle() {
    return {'text-decoration': 'underline'};
  }

}
