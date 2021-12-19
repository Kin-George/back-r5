import { useFormik, yupToFormErrors } from 'formik';
import React from 'react';
import * as Yup from 'yup'


const DetalleProductos = (   ) => {

   // validacion y leer los datos del formulario
   // onst formik = useFormikormik({
   //    initialValues: {
   //       id:'',
   //       reference:'',
   //       brand:'',
   //       category:'',
   //       materiales:'',
   //       dimensiones:'',
   //       description:'',
   //       availability:'',
   //       price:'',
   //       quantity:'',
   //       photograpy:'',
   //    },
   //    validationSchema: Yup.object({
   //       id: Yup.number()
   //          .min(1, 'Debes agregar un numero')
   //          .required('El id es obligatorio'),
   //       reference: Yup.stringing()
   //          .min(3,'Debes agregar una referencia')
   //          .required('La referencia es obligatoria'),
   //       brand: Yup.string()
   //          .min(3,'Debes agregar una marca')
   //          .required('La marca es obligatoria')
   //    }),
   //    onSubmit: datos => {
   //       console.log(datos);
   //    }

   // });c


       return( 
        <>

           <h1 className="text-3xl font-light mb-4">Detalle productos</h1>
        
        </>
     );
}
 
export default DetalleProductos;