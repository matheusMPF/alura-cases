import { LinkFAQ } from "@/components/Link";
import AluraLogo from "../../public/assets/images/AluraLogo";
import Input from "@/components/Input";
import Button from "@/components/Button";
import ImgDefault from "@/components/ImgDefault";

export default function Home() {
  return (
    <section className="h-full w-full flex justify-around items-center max-lg:flex-col max-md:gap-8">
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-16 w-[65%]">
          <AluraLogo />
          <div className="flex flex-col gap-4">
            <LinkFAQ />
            <h1>Alura Cases</h1>
            <p>
              Aqui você vai ter acesso a discussões avançadas: as principais
              decisões sobre arquitetura e design de sistemas. Aprenda através
              das descobertas que as principais empresas de tecnologia
              enfrentam!
            </p>
            <p>Quer testar antes de todo mundo?</p>
          </div>
          <div className="w-full flex gap-4 max-lg:flex-col">
            <Input placeholder="Coloque Seu email aqui" type="email" />
            <Button>Cadastrar</Button>
          </div>
        </div>
      </div>

      <div>
        <ImgDefault />
      </div>
    </section>
  );
}
