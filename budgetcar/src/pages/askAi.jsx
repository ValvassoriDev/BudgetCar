import { useState } from "react";
import "./Perguntar.css";
import showdown from "showdown";
import { useNavigate } from "react-router-dom";

const Perguntar = () => {
  const [apiKey, setApiKey] = useState("");
  const [carro, setCarro] = useState("");
  const [pergunta, setPergunta] = useState("");
  const [resposta, setResposta] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const markdownToHTML = (text) => {
    const converter = new showdown.Converter();
    return converter.makeHtml(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!apiKey || !carro || !pergunta) {
      alert("Preencha todos os campos");
      return;
    }

    setLoading(true);

    const model = "gemini-2.5-flash";
    const baseURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

    const prompt = `
Você é um assistente especializado em automóveis.

## Instruções
- Responda perguntas sobre o carro "${carro}" com base em informações automotivas.
- Use uma linguagem clara e concisa.
- Não invente respostas se não souber.
- Considere a data atual: ${new Date().toLocaleDateString()}
- Responda em português em até 500 caracteres.
- Use markdown na resposta.
- Sempre informe o valor da FIPE no veiculo mais novo


## Pergunta do usuário:
${pergunta}
    `;

    try {
      const res = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
          tools: [{ google_search: {} }],
        }),
      });

      const data = await res.json();
      const respostaIA =
        data?.candidates?.[0]?.content?.parts?.[0]?.text || "Erro na resposta.";
      setResposta(markdownToHTML(respostaIA));
    } catch (error) {
      console.error("Erro ao perguntar:", error);
      setResposta("Erro ao perguntar para a IA.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="header-pages">
        <button className="button-pages" onClick={() => navigate("/")}>
          Home
        </button>
        <button className="button-pages" onClick={() => navigate("/perguntar")}>
          Pergunte a IA
        </button>
      </div>
      <div className="perguntar-container">
        <h1>Assistente de Veículos</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="API Key do Gemini"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nome do carro (ex: Gol)"
            value={carro}
            onChange={(e) => setCarro(e.target.value)}
          />
          <input
            type="text"
            placeholder="Sua pergunta"
            value={pergunta}
            onChange={(e) => setPergunta(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading ? "Perguntando..." : "Perguntar"}
          </button>
        </form>

        {resposta && (
          <div
            className="resposta"
            dangerouslySetInnerHTML={{ __html: resposta }}
          />
        )}
        <div>
          <p>Não possui uma API KEY?</p>
            <a href="https://aistudio.google.com/app/apikey" target="_blank">
            <button>Clique Aqui</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Perguntar;


