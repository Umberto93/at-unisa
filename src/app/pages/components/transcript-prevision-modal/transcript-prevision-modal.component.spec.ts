import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranscriptPrevisionModalComponent } from './transcript-prevision-modal.component';

describe('TranscriptPrevisionModalComponent', () => {
  let component: TranscriptPrevisionModalComponent;
  let fixture: ComponentFixture<TranscriptPrevisionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscriptPrevisionModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranscriptPrevisionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
