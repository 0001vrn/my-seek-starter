import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationComponent } from './navigation.component';
import { HighlightMyTextDirective } from '../shared/directives/highlight-my-text.directive';
import { DateFormatterPipe } from '../shared/pipes/date-formatter-pipe';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationComponent, HighlightMyTextDirective, DateFormatterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render its HTML partial', async(() => {
    let element = fixture.nativeElement;
    fixture.detectChanges();
    expect(element.innerHTML).toContain('Seek');
  }));
});
