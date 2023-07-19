import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieseriesDetailsPage } from './movieseries-details.page';

describe('MovieseriesDetailsPage', () => {
  let component: MovieseriesDetailsPage;
  let fixture: ComponentFixture<MovieseriesDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MovieseriesDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
