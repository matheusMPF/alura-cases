import Link from "next/link";
import { Metadata } from "next";
// import { useFaq } from "@/api/useFaq";

interface Post {
  question: string;
  answer: string;
}

export const metadata: Metadata = {
  title: "FAQ - Alura cases",
};

async function getData() {
  const res = await fetch(
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json",
    { next: { revalidate: 10 } }
  );

  if (!res) {
    alert("Falha ao buscar os dados");
  }

  return res.json();
}

async function FAQPage() {
  const posts = await getData();

  return (
    <div className="flex gap-16 p-16 w-full max-md:flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="font-OpenSansBold">FAQ: Perguntas Frequentes</h1>
        <Link href="/" className="text-primary-300">
          Voltar para home
        </Link>
      </div>

      <ul className="flex flex-col gap-8">
        {posts.map((item: Post, key: number) => (
          <li key={key} className="">
            <h2 className="font-semibold text-xl">{item.question}</h2>
            <p className="text-lg">{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQPage;

// "use client";

// import Link from "next/link";
// import { useFaq } from "@/api/useFaq";

// interface Post {
//   question: string;
//   answer: string;
// }

// function FAQPage() {
//   const { error, loading, posts } = useFaq();

//   if (loading) {
//     return <p>Carregando...</p>;
//   }

//   if (error) {
//     return <p className="text-red-500">Erro ao carregar dados: {error}</p>;
//   }

//   return (
//     <div>
//       <h1>FAQ</h1>
//       <Link href="/">Voltar para home</Link>
//       <ul className="flex flex-col gap-8 mt-4">
//         {posts.map((item: Post) => (
//           <li key={item.question}>
//             <h2 className="font-semibold text-3xl">{item.question}</h2>
//             <p className="text-zinc-600 text-sm">{item.answer}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default FAQPage;
