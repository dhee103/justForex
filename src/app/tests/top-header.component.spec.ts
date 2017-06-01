import { TestBed, async } from '@angular/core/testing';

import { TopHeaderComponent } from '../top-header.component';
import { SideBarComponent } from '../side-bar.component';

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
});
