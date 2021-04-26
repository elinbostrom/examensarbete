import Link from "next/link";
import React from "react";
import style from "./Footer.module.scss";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <section className={style.text}>
          <h2>Vendelsö Ridskola</h2>
          <div>
            <p>08-776 10 15</p>
            <a href="mailto:info@vendelsoridskola.se">info@vendelsoridskola.se</a>
            <p>Österängs Gård</p>
            <p>136 75 Vendelsö</p>
          </div>
          <div>
            <Link href="/kontakt">Öppettider</Link>
            <Link href="/karriarsida">Karriärsida</Link>
            <p>Vendelsö Ridhus AB | 556423-6668</p>
          </div>

          <div className={style.socials}>
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
        <a href="https://goo.gl/maps/vVCVJaLHbA2Te4Ss6">
          <img className={style.map} src="/images/map.png" alt="map" />
        </a>
      </div>
    </footer>
  );
}
