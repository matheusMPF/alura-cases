import aluraCasesMain from "../../../public/assets/images/alura-cases-main.png";
import Image from "next/image";

const ImgDefault = () => {
  return aluraCasesMain ? (
    <div className="h-screen flex flex-col justify-end mr-[-24rem]">
      <Image
        src={aluraCasesMain}
        width={1800}
        alt="Alura cases"
        className="rounded-2xl shadow-2xl"
      />
    </div>
  ) : (
    <div
      className="bg-neutral-400 shadow-md rounded-md px-56 py-64 flex items-center justify-center"
      role="img"
      aria-label="Imagem não disponível. Tamanho sugerido 1480x720"
    >
      <span className="text-4xl">1480x720</span>
    </div>
  );
};

export default ImgDefault;
