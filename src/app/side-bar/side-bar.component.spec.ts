import { TestBed, async } from '@angular/core/testing';

import { SideBarComponent } from './side-bar.component';

describe('SideBarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideBarComponent
      ],
    }).compileComponents();
  }));

  it('should create the sidebar', async(() => {
    const fixture = TestBed.createComponent(SideBarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render dashboard in li:nth-child(5) tag', async(() => {
    const fixture = TestBed.createComponent(SideBarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('li:nth-(5)').textContent).toContain('Dashboard');
  }));
});
