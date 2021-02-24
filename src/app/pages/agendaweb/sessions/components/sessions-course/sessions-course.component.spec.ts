import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SessionsCourseComponent } from './sessions-course.component';

describe('SessionsCourseComponent', () => {
    let component: SessionsCourseComponent;
    let fixture: ComponentFixture<SessionsCourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SessionsCourseComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(SessionsCourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
