import Link from "next/link";
import React from "react";
import style from "./Footer.module.scss";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <section className={style.text}>
          <div>
            <h2>Vendelsö Ridskola</h2>
            <p>08-776 10 15</p>
            <a href="mailto:info@vendelsoridskola.se">
              info@vendelsoridskola.se
            </a>
            <p>Österängs Gård</p>
            <p>136 75 Vendelsö</p>
            <p>Vendelsö Ridhus AB | 556423-6668</p>
          </div>

          <div className={style.socials}>
            <div className={style.links}>
              <Link href="/om-oss/kontakt">Öppettider</Link>
              <Link href="/karriar">Karriärsida</Link>
              <a
                href="https://www.vendelsoridskola.se/wp-content/uploads/2022/02/Personuppgiftspolicy.pdf"
                target="_blank"
              >
                Personuppgiftspolicy
              </a>
            </div>
            <p>Följ oss via våra sociala medier</p>
            <div>
              <a href="https://www.instagram.com/vendelsoridskola/?hl=sv">
                <AiOutlineInstagram />
              </a>
              <a href="https://sv-se.facebook.com/vendelso.ridskola">
                <AiOutlineFacebook />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
