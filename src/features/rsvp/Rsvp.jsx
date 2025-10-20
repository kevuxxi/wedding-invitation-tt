import Container from '../../shared/components/container/Container'
import RsvpForm from './RsvpForm'

const Rsvp = () => {
  return (
    <Container>
      <h1>Confirma tu asistencia 💍</h1>
      <p>Por favor, completa el formulario para confirmar tu presencia en nuestro gran día.</p>
      <RsvpForm />
    </Container>
  )
}

export default Rsvp
