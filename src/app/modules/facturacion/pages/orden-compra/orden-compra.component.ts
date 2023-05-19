import { Component, OnInit } from '@angular/core';
import { Factura, Cliente } from '../../models/factura.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MantenimientoService } from '../../../mantenimiento/mantenimiento.service';
@Component({
  selector: 'app-orden-compra',
  templateUrl: './orden-compra.component.html',
})
export class OrdenCompraComponent implements OnInit {
  factura?: Factura;

  // Filter Data
  myForm: FormGroup;
  listFilterData?: any[];

  // Defauklt Values
  alpha_space = /[a-z\s]/i;
  date?: Date = new Date();
  clientes$: Cliente[] = [];
  filteredClientes: Cliente[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private mantenimientoService: MantenimientoService
  ) {
    this.myForm = this.formBuilder.group({
      numero: ['', [Validators.required]],
      establecimiento: ['', [Validators.required]],
      puntoEmision: ['', [Validators.required]],
      fecha: [null, [Validators.required]],
      identificacion: [
        null,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(13),
        ],
      ],
      cliente: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.getClients();
  }

  async getClients() {
    await this.mantenimientoService.getClients().subscribe(
      (res) => {
        this.clientes$ = res.datos;
        this.filteredClientes = res.datos;
      },
      (err) => {},
      () => {
        this.getListFilterData();
      }
    );
  }

  getListFilterData() {
    console.log('second');
    this.listFilterData = [
      {
        label: 'Factura Nro.',
        key: 'numero',
        placeholder: '001',
        maxlength: 50,
        isInput: true,
      },
      {
        label: 'Establecimiento',
        key: 'establecimiento',
        placeholder: 'Establecimiento',
        maxlength: 50,
        isInput: true,
      },
      {
        label: 'Punto Emision',
        key: 'puntoEmision',
        placeholder: 'Establecimiento',
        maxlength: 50,
        isInput: true,
      },
      {
        label: 'Fecha',
        key: 'fecha',
        placeholder: 'dd/mm/aaaa',
        max_date: this.date,
        isDate: true,
        dateFormat: 'dd/mm/yy',
        selectDate: true,
        selectBlur: true,
        onSelectDate: (event?: any) => {
          // this.setMinEndDate(event);
        },
        onBlur: (event?: any) => {},
      },
      {
        label: 'Identificación',
        key: 'identificacion',
        field: 'identificacion',
        placeholder: '0000000000',
        minlength: 1,
        maxlength: 13,
        pKeyFilter: 'pint',
        selectBlur: true,
        onBlur: (event?: any) => this.validatorIdentificacion(),
        search: (event?: any) => this.searchCliente(event, 'identificacion'),
        onSelect: (event?: any) => this.selectedCliente(event),
        suggestions: this.filteredClientes,
        isAutocomplete: true,
      },
      {
        label: 'Nombre Cliente:',
        key: 'cliente',
        field: 'nombre',
        placeholder: 'Nombres y Apellidos',
        maxlength: 50,
        isAutocomplete: true,
        search: (event?: any) => this.searchCliente(event, 'nombre'),
        onSelect: (event?: any) => this.selectedCliente(event),
      },
    ];
  }

  searchCliente(
    $event?: any,
    key: keyof Cliente = 'nombre' || 'identificacion'
  ) {
    let query = $event.query;

    this.filteredClientes = this.clientes$?.filter((cliente) => {
      const nombreCliente = String(cliente[key] ?? '').toLowerCase();
      const queryLower = query.toLowerCase();

      return nombreCliente.includes(queryLower) ? true : false;
    });
  }

  selectedCliente(event: any) {
    const cliente = event as Cliente;

    this.myForm.get('identificacion')?.setValue(cliente);
    this.myForm.get('cliente')?.setValue(cliente);
  }

  validatorIdentificacion(): void {
    const identificacion = this.myForm.controls['identificacion'].value;

    if (
      identificacion &&
      !(identificacion?.length === 10 || identificacion?.length === 13)
    ) {
      this.myForm.controls['identificacion'].setErrors({
        invalidIdentificacion: true,
        message: 'La identificación debe tener 10 o 13 dígitos',
      });
    } else {
      this.myForm.controls['identificacion'].setErrors(null);
    }
  }
}
