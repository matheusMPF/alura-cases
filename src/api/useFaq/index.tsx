"use client";

import { useEffect, useState } from "react";

interface useFaqProps {
  question: string;
  answer: string;
}

export const useFaq = () => {
  const [posts, sePosts] = useState<useFaqProps[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    try {
      const res = await fetch(
        "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json"
      );

      if (!res.ok) {
        setError("Erro ao buscar os dados");
        return;
      }

      const data = await res.json();
      sePosts(data);
    } catch (err) {
      setError(`Falha ao carregar dados: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { posts, error, loading };
};
