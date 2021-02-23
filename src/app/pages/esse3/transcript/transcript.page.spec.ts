import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TranscriptPage } from './transcript.page';

describe('TranscriptPage', () => {
  let component: TranscriptPage;
  let fixture: ComponentFixture<TranscriptPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranscriptPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TranscriptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
