export const MY_DATE_FORMATS = {
    parse: {
      dateInput: 'DD/MM/YYYY',
    },
    display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'MMMM YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'MMMM YYYY'
    },
}; 

// cuando en la vista de añadir un nuevo libro, relleno el campo de la fecha de añadido o léido,
// en la consola del inspeccionar obtengo el siguiente warning:
// The specified value "DD/MM/YYYY" does not conform to the required format, "yyyy-MM-dd".
// y por tanto, cuando entramos a los detalles del libro nuevo que acabamos de crear...
// podemos ver en el inspeccionar que ese objeto de libro que hemos creado,
// tiene sus fechas como undedfined...

// He intentado, aún sin éxito, modificar el formato de fecha que se recoge del mat-datepicker
// para que pase de exigir YYYY-MM-DD, a lo que permite seleccionar, DD-MM-YYYY

// me he documentado en estas guías para los pasos a seguir

// 1) https://www.freakyjolly.com/angular-material-datepicker-change-format-of-selected-date/
// 2) https://www.concretepage.com/angular-material/angular-material-datepicker-format
// 3) https://stackoverflow.com/questions/53359598/how-to-change-angular-material-datepicker-format