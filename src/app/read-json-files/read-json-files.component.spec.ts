import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadJsonFilesComponent } from './read-json-files.component';

describe('ReadJsonFilesComponent', () => {
  let component: ReadJsonFilesComponent;
  let fixture: ComponentFixture<ReadJsonFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadJsonFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadJsonFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
