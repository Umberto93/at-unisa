import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FreeRoomsPage } from './free-rooms.page';

describe('FreeRoomsPage', () => {
  let component: FreeRoomsPage;
  let fixture: ComponentFixture<FreeRoomsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeRoomsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FreeRoomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
