import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NavigationComponent } from '../.././navigation/navigation.component';
import { HighlightMyTextDirective } from './highlight-my-text.directive';
import { DateFormatterPipe } from '../pipes/date-formatter-pipe';

describe('HighlightMyTextDirective', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationComponent, HighlightMyTextDirective, DateFormatterPipe]
    });
    fixture = TestBed.createComponent(NavigationComponent);
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
