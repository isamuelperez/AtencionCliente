import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionCliente } from './atencion-cliente';

describe('AtencionCliente', () => {
  let component: AtencionCliente;
  let fixture: ComponentFixture<AtencionCliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtencionCliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtencionCliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
