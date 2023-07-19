import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieseriesPage } from './movieseries.page';

describe('MovieseriesPage', () => {
  let component: MovieseriesPage;
  let fixture: ComponentFixture<MovieseriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MovieseriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
