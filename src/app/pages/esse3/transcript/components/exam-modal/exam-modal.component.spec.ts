import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamModalComponent } from './exam-modal.component';

describe('TranscriptExamModalComponent', () => {
    let component: ExamModalComponent;
    let fixture: ComponentFixture<ExamModalComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ExamModalComponent],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ExamModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
