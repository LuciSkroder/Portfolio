export default function HeroPhoto() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}imgs/bighero.webp`}
      alt="Hero photo of a flower ornamentation"
      className="herophoto"
    />
  );
}
