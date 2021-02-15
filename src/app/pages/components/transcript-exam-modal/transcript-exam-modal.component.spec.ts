import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranscriptExamModalComponent } from './transcript-exam-modal.component';

describe('TranscriptExamModalComponent', () => {
  let component: TranscriptExamModalComponent;
  let fixture: ComponentFixture<TranscriptExamModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscriptExamModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranscriptExamModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
