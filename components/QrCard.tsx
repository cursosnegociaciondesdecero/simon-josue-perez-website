import { asset, site } from "@/lib/site";
import { WhatsappIcon } from "./Icons";

/** Tarjeta del código QR de la comunidad de WhatsApp (equivale a la imagen del sitio original). */
export default function QrCard() {
  const c = site.community;
  return (
    <a href={c.url} target="_blank" rel="noopener noreferrer" className="qr" aria-label={c.button}>
      <div className="qr__card">
        <img className="qr__avatar" src={asset("/images/logo.jpg")} alt="" width={72} height={72} />
        <p className="qr__title">{c.cardTitle}</p>
        <p className="qr__subtitle">{c.cardSubtitle}</p>
        <div className="qr__code">
          <img src={asset("/images/qr-whatsapp.svg")} alt="Código QR de la comunidad de WhatsApp" />
          <WhatsappIcon className="qr__logo" />
        </div>
      </div>
    </a>
  );
}
