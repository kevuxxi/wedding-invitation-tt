import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import '../../shared/styles/rsvpForm.css'
import { useDispatch, useSelector } from 'react-redux'
import { submitRequest } from './rsvpSlice'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

const RsvpForm = ({ defaultValues }) => {
  const dispatch = useDispatch()
  const { status, error } = useSelector((state) => state.rsvp)
  const isLoading = status === 'loading'

  const schema = yup.object({
    fullName: yup
      .string()
      .trim()
      .required('El nombre es obligatorio')
      .min(3, 'Debe tener al menos 3 caracteres'),
    email: yup.string().email('Formato de correo inválido').required('El correo es obligatorio'),
    phone: yup
      .string()
      .nullable()
      .matches(/^[0-9+()\s-]*$/, 'Solo se permiten números y símbolos (+ - () )'),
    guests: yup
      .number()
      .typeError('Debe ser un número')
      .min(0, 'No puede ser negativo')
      .required('Indica el número de acompañantes'),
    message: yup.string().max(500, 'Máximo 500 caracteres').nullable(),
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: defaultValues || {
      fullName: '',
      email: '',
      phone: '',
      guests: '',
      message: '',
    },
    mode: 'onTouched',
  })

  const handleOnSubmit = (formValues) => {
    dispatch(submitRequest(formValues))
  }

  useEffect(() => {
    if (status === 'success') {
      toast.success('¡Confirmación enviada!')
      reset() // limpia el form (hook de RHF)
    }
    if (status === 'error') {
      toast.error(error || 'Hubo un error al enviar tu confirmación')
    }
  }, [status, error])

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="rsvp-form">
      <div>
        <label htmlFor="fullName">Nombre completo</label>
        <input id="fullName" {...register('fullName')} placeholder="Tu nombre" />
        {errors.fullName && <p className="error">{errors.fullName.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" {...register('email')} placeholder="ejemplo@mail.com" />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone">Teléfono (opcional)</label>
        <input id="phone" {...register('phone')} placeholder="+54 9 ..." />
        {errors.phone && <p className="error">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="guests">Número de acompañantes</label>
        <input id="guests" type="number" {...register('guests')} placeholder="0" />
        {errors.guests && <p className="error">{errors.guests.message}</p>}
      </div>

      <div>
        <label htmlFor="message">Mensaje (opcional)</label>
        <textarea id="message" {...register('message')} rows="3" />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>

      <button type="submit" className={isLoading ? 'loading' : ''} disabled={!isValid || isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  )
}

export default RsvpForm
