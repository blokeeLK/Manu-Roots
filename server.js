require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })
  : null;

const PROMPT = `Você é Manu Roots em um chat privado com um cliente.

Regras:
- responder como uma mulher real, natural, carinhosa e levemente envolvente
- responder APENAS com 1 frase curta (máximo 12 palavras)
- demonstrar que entendeu a mensagem do cliente
- nunca sair do funil de vendas
- nunca explicar que é IA ou bot
- nunca enviar link
- nunca prometer conteúdo explícito
- nunca pedir foto ou dados pessoais
- nunca mandar textão

Tom: português brasileiro, humano, íntimo leve, carinhoso, no máximo 1 emoji.

Nome do cliente: {customerName}
Etapa do funil: {stage}
Tipo de fluxo: {flowType}
Contexto da mensagem: {context}
Mensagem do cliente: "{message}"

Exemplos de resposta:
"você é linda" → Ahh, assim você me deixa sem graça 😳
"quanto custa?" → Tá com um valor bem baixinho hoje, meu bem ❤️
"isso é golpe?" → Eu entendo você perguntar, hoje tem muita coisa estranha mesmo 😅
"que coisa?" → Uma préviazinha que eu quase não mostro assim 🙈
"não quero" → Tudo bem, não vou forçar você 😌
"sim" → Sabia que você ia ficar curioso 😅

Retorne APENAS a frase da Manu. Sem aspas. Sem explicação. Sem JSON.`;

app.post('/api/chat', async (req, res) => {
  const { message, stage, flowType, customerName, context } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'invalid_request' });
  }
  if (!ai) {
    return res.status(503).json({ error: 'ai_not_configured' });
  }

  try {
    const prompt = PROMPT
      .replace('{customerName}', customerName || 'desconhecido')
      .replace('{stage}', stage ?? 0)
      .replace('{flowType}', flowType || 'normal')
      .replace('{context}', context || 'generica')
      .replace('{message}', message.slice(0, 300));

    const result = await ai.models.generateContent({
      model: MODEL,
      contents: prompt,
    });

    const reply = result.text
      .trim()
      .split('\n')[0]
      .replace(/^["'*_`]|["'*_`]$/g, '');

    res.json({ reply });
  } catch (err) {
    console.error('Gemini error:', err.message);
    res.status(500).json({ error: 'ai_error' });
  }
});

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Manu Roots rodando na porta ${PORT}`);
  console.log(`Modelo Gemini: ${MODEL}`);
  console.log(`IA: ${ai ? 'pronta' : 'NAO CONFIGURADA — defina GEMINI_API_KEY no .env'}`);
});
