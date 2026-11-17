import QrCard from "@/components/QrCard";
import { InstagramIcon, TiktokIcon, YoutubeIcon } from "@/components/Icons";
import { asset, site } from "@/lib/site";

const socialIcons = { Youtube: YoutubeIcon, Instagram: InstagramIcon, Tiktok: TiktokIcon };

export default function Home() {
  const { hero, community, footer } = site;

  return (
    <>
      <header className="header">
        <div className="container header__inner">
          <a href={asset("/")} className="header__logo">
            <img src={asset("/images/logo.jpg")} alt={site.author} width={53} height={53} />
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1 className="title">{hero.title}</h1>
            <p className="text">{hero.subtitle}</p>
          </div>
        </section>

        <section
          className="community"
          style={{ ["--bg" as string]: `url(${asset("/images/fondo-bw.jpg")})` }}
        >
          <div className="container community__inner">
            <QrCard />
            <div className="community__copy">
              <h2 className="title title--left">{community.title}</h2>
              <p className="text">{community.description}</p>
              <p className="text text--accent">{community.cta}</p>
              <a className="button" href={community.url} target="_blank" rel="noopener noreferrer">
                {community.button}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p className="footer__legal">{footer.legal}</p>
          <ul className="footer__social">
            {footer.social.map(({ name, url }) => {
              const Icon = socialIcons[name];
              return (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>
                    <Icon className="footer__icon" />
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="footer__links">
            {footer.links.map(({ label, url }) => (
              <li key={label}>
                <a href={url}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}
