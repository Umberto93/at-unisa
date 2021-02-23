import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StatsModalComponent } from './stats-modal.component';

describe('TranscriptStatsModalComponent', () => {
  let component: StatsModalComponent;
  let fixture: ComponentFixture<StatsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StatsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
