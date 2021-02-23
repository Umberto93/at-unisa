import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrevisionModalComponent } from './prevision-modal.component';

describe('TranscriptPrevisionModalComponent', () => {
  let component: PrevisionModalComponent;
  let fixture: ComponentFixture<PrevisionModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevisionModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrevisionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
