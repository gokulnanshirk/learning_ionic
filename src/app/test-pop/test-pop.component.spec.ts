import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestPopComponent } from './test-pop.component';

describe('TestPopComponent', () => {
  let component: TestPopComponent;
  let fixture: ComponentFixture<TestPopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPopComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestPopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
