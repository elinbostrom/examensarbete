import styles from "./RegisterForm.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function RegisterForm({ course, setClientInfo, setShowRegForm }) {
  const schema = yup.object().shape({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    setClientInfo(data);
    setShowRegForm(false);
  };

  return (
    <article className={styles.wrapper}>
      <h3>Anmälan till "{course.title}"</h3>
      <p>Fyll i nedstående formulär</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" placeholder="Deltagarens förnamn" ref={register} />
        {errors.name && <p>Du måste skriva in deltagarens förnamn</p>}

        <input type="text" name="lastname" placeholder="Deltagarens efternamn" ref={register} />
        {errors.lastname && <p>Du måste skriva in deltagarens efternamn</p>}

        <input type="text" name="email" placeholder="Emailadress" ref={register} />
        {errors.email && <p>Du måste skriva in din email</p>}

        <input type="text" name="phone" placeholder="Telefonnummer" ref={register} />
        {errors.phone && <p>Du måste skriva till telefonnummer</p>}

        <button type="submit">
          Gå till översikt <IoIosArrowDroprightCircle />
        </button>
      </form>
    </article>
  );
}
