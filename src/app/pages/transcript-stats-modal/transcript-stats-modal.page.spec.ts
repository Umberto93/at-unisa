import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranscriptStatsModalPage } from './transcript-stats-modal.page';

describe('TranscriptStatsModalPage', () => {
  let component: TranscriptStatsModalPage;
  let fixture: ComponentFixture<TranscriptStatsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscriptStatsModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranscriptStatsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
