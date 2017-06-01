import { TestBed, inject, async } from '@angular/core/testing';
import { TopHeaderComponent } from './top-header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { Location, CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopHeaderComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopHeaderComponent
      ],
    }).compileComponents();
  }));

  it('should create top header', async(() => {
    const fixture = TestBed.createComponent(TopHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title justForex', async(() => {
    const fixture = TestBed.createComponent(TopHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.topnav a').textContent).toContain('justForex');
  }));

  it('should have existing spans', async(() => {
    const fixture = TestBed.createComponent(TopHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span')).toBeDefined();
  }));

  it('should have existing info button', async(() => {
    const fixture = TestBed.createComponent(TopHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.fa .fa-info')).toBeDefined();
  }));

  it('should have existing user button', async(() => {
    const fixture = TestBed.createComponent(TopHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.fa .fa-user')).toBeDefined();
  }));

  it('clicking user button should route to myprofile',
    async(inject([Router, Location], (router: Router, location: Location) => {

    let fixture = TestBed.createComponent(TopHeaderComponent);
    fixture.detectChanges();

    fixture.debugElement.query(By.css('.fa .fa-user')).nativeElement.click();
    fixture.whenStable().then(() => {
      expect(location.path()).toEqual('/myprofile');
      console.log('after expect');
    });
  })));
});
