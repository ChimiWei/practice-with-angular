import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoDiaComponent } from './botao-dia.component';

describe('BotaoDiaComponent', () => {
  let component: BotaoDiaComponent;
  let fixture: ComponentFixture<BotaoDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotaoDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
