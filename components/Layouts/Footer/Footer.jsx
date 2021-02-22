import Link from "next/link";
import React from "react";
import style from "./Footer.module.scss";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

export default function index() {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <section className={style.text}>
          <h2>Vendelsö Ridskola</h2>
          <div>
            <p>08-776 10 15</p>
            <a href="mailto:info@vendelsoridskola.se">info@vendelsoridskola.se</a>
          </div>
          <div>
            <p>Österängs Gård</p>
            <p>136 75 Vendelsö</p>
            <Link href="/kontakt">Öppettider</Link>
            <Link href="/karriarsida">Karriärsida</Link>
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
        <div>
          <img className={style.map} src="/images/map.png" alt="map" />
        </div>
      </div>
    </footer>
  );
}
