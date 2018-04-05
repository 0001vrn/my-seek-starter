import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MyComponent } from '../.././my/my.component';
import { HighlightMyTextDirective } from './highlight-my-text.directive';
import { DateFormatterPipe } from '../pipes/date-formatter-pipe';
import { DataService } from '../../services/data.service';

describe('HighlightMyTextDirective', () => {
  let component: MyComponent;
  let fixture: ComponentFixture<MyComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComponent, HighlightMyTextDirective, DateFormatterPipe ],
      providers: [ DataService ],
      imports: [ HttpModule ]
    });
    fixture = TestBed.createComponent(MyComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('span'));
  });

  it ('on mouseenter event it should highlight', () => {
    inputEl.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it ('on mouseleave event it should highlight', () => {
    inputEl.triggerEventHandler('mouseehover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).not.toBe('yellow');
  });

});
