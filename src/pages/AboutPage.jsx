import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const { t } = useTranslation();
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    fetch("imgs/gallery/gallery.json")
      .then((res) => res.json())
      .then(setGalleryImages)
      .catch((err) => console.error("Failed to load gallery JSON:", err));
  }, []);

  return (
    <section>
      <article className="about-box">
        <section className="share">
          <div className="hobby-line">
            <h2>{t("soft-title")}</h2>
            <img className="hobby-logo" src="https://luciskroder.github.io/Portfolio/imgs/person.png" alt="Small icon of a person" />
          </div>
          <p className="about-text">{t("soft-text")}</p>
        </section>
        <section className="share">
          <div className="hobby-line">
            <img className="soft-img" src="https://luciskroder.github.io/Portfolio/imgs/softskills-2.png" alt="List of skills ranked by percentage" />
            <img className="soft-img" src="https://luciskroder.github.io/Portfolio/imgs/softskills-1.png" alt="Diagram of colors corrosponding to certain skills" />
          </div>
        </section>
      </article>
      <article className="about-box">
        <section className="share">
          <div className="hobby-line">
            <h2>{t("photo-title")}</h2>
            <img className="hobby-logo" src="https://luciskroder.github.io/Portfolio/imgs/Camera.png" alt="Small icon of a camera" />
          </div>
          <p className="about-text">{t("photo-text")}</p>
          <button onClick={() => setIsGalleryOpen(true)}>{t("gallery")}</button>
        </section>
        <section className="share">
          <img className="highlight" src="https://luciskroder.github.io/Portfolio/imgs/highlight-1.webp" />
          <img className="highlight" src="https://luciskroder.github.io/Portfolio/imgs/highlight-2.webp" />
          <img className="highlight" src="https://luciskroder.github.io/Portfolio/imgs/highlight-3.webp" />
          <img className="highlight" src="https://luciskroder.github.io/Portfolio/imgs/highlight-4.webp" />
          <img className="highlight" src="https://luciskroder.github.io/Portfolio/imgs/highlight-5.webp" />
          <img className="highlight" src="https://luciskroder.github.io/Portfolio/imgs/highlight-6.webp" />
        </section>
      </article>
      {isGalleryOpen && (
        <section className="gallery">
          <button onClick={() => setIsGalleryOpen(false)}>Close</button>
          <div>
            {galleryImages.map((img) => (
              <img key={img} src={`${process.env.PUBLIC_URL}imgs/gallery/${img}`} className="gallery-img" />
            ))}
          </div>
        </section>
      )}
      <article className="about-box">
        <section className="share">
          <div className="hobby-line">
            <h2>{t("hobby-title")}</h2>
            <img className="hobby-logo" src="https://luciskroder.github.io/Portfolio/imgs/Pen tool.png" alt="Small icon of a cursive pen" />
          </div>
          <p className="about-text">{t("hobby-text")}</p>
        </section>
        <section className="share"></section>
      </article>
    </section>
  );
}
