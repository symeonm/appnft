import css from "./ArtsSection.module.css";
import { ArtSectionSlider } from "./ArtsSectionSlider/ArtsSectionSlider";

export const ArtsSection = () => {
  return (
    <section id="#arts">
      <h2 className={css.titleArt}>COLLECTION</h2>
      <ArtSectionSlider />
    </section>
  );
};
