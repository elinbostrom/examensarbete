import styles from './RegisterForm.module.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { IoIosArrowForward } from 'react-icons/io'

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().min(8).max(11).required()
})

export default function index({ course }) {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => console.log(data);

  return (
    <article className={styles.wrapper}>
      <h3>Anmälan till "{course.title}"</h3>
      <p>Fyll i nedstående formulär</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" placeholder="Deltagarens namn" ref={register} />
        <p>{errors.name?.message}</p>

        <input type="text" name="email" placeholder="Emailadress" ref={register} />
        <p>{errors.email?.message}</p>

        <input type="text" name="phone" placeholder="Telefonnummer" ref={register} />
        <p>{errors.phone?.message}</p>

        <button type="submit">Gå till översikt <IoIosArrowForward /></button>
      </form>
    </article>
  )
}
