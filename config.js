/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         CONFIGURAÇÕES DO CHAT — JÚLIA                       ║
 * ║   Edite este arquivo para personalizar o seu site           ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 * COMO USAR:
 *  1. Altere os valores abaixo conforme seu projeto
 *  2. Salve o arquivo
 *  3. Reabra o index.html no navegador
 */

const CONFIG = {

  /* ─────────────────────────────────────────────────────────────
   * PERSONA
   * ───────────────────────────────────────────────────────────── */
  atendenteName: "Júlia",

  // URL do avatar (pode ser um link externo ou um arquivo local ex: "avatar.jpg")
  atendenteAvatar: "https://i.pravatar.cc/100?img=47",

  /* ─────────────────────────────────────────────────────────────
   * IMAGEM DE GANCHO  (Etapa 5)
   * Cole aqui a URL da imagem que será enviada como "gancho"
   * Pode ser uma URL externa ou um arquivo local: "gancho.jpg"
   * ───────────────────────────────────────────────────────────── */
  hookImage: "https://placehold.co/400x300/1a1a2e/ffffff?text=Sua+Imagem+Aqui",

  /* ─────────────────────────────────────────────────────────────
   * LINK DE ACESSO  (Etapa 9 — CTA)
   * ───────────────────────────────────────────────────────────── */
  ctaLink: "https://SEU_LINK_AQUI.com",

  /* ─────────────────────────────────────────────────────────────
   * TEXTO DO BOTÃO CTA
   * ───────────────────────────────────────────────────────────── */
  ctaButtonText: "🔓 LIBERAR MEU ACESSO AGORA",

  /* ─────────────────────────────────────────────────────────────
   * DELAYS (em milissegundos)
   * typingDelay    → quanto tempo mostrar "digitando..." antes de enviar
   * betweenDelay   → pausa entre duas mensagens seguidas da Júlia
   * reactivation   → quanto tempo sem resposta antes de reativar (ms)
   * ───────────────────────────────────────────────────────────── */
  typingDelay: 1400,
  betweenDelay: 900,
  reactivationDelay: 5 * 60 * 1000, // 5 minutos

  /* ─────────────────────────────────────────────────────────────
   * FUNIL — MENSAGENS
   * Cada etapa pode ter UMA ou MAIS mensagens.
   * Quando há mais de uma, o sistema escolhe aleatoriamente.
   * Use {name} para inserir o nome do cliente.
   * ───────────────────────────────────────────────────────────── */
  funnel: {

    // Etapa 0 → Abertura (enviada assim que o site carrega)
    stage0: [
      ["Oi… vi que você entrou aqui agora 👀", "Fiquei curiosa… como você se chama?"],
    ],

    // Etapa 1 → Personalização (após receber o nome)
    stage1: [
      ["Prazer, {name}… gostei de você ter aparecido aqui 😅", "Você chegou aqui por acaso… ou já tava curioso mesmo?"],
      ["Ah, {name}… que nome bom 😅", "Mas me conta… você veio aqui por acaso ou já tava me procurando?"],
    ],

    // Etapa 2 → Conexão
    stage2: [
      ["Confesso que nem todo mundo que entra aqui eu respondo assim…", "Mas você parece diferente 👀"],
      ["Olha… eu não faço isso com qualquer um não…", "Mas você me pareceu diferente 👀"],
    ],

    // Etapa 3 → Gancho / Pedido de permissão
    stage3: [
      ["Posso te mostrar uma coisinha que eu fiz hoje…", "Mas tô com um pouquinho de vergonha 😅"],
      ["Tem uma coisa que eu fiz hoje que poucas pessoas viram…", "Posso te mostrar? Tô meio com vergonha 😅"],
    ],

    // Etapa 4 → Após envio da imagem
    stage4: [
      ["Não ri de mim tá… eu quase não mostro isso assim"],
      ["Pode falar… o que achou? Eu confiei em você 😅"],
    ],

    // Etapa 5 → Escalada
    stage5: [
      ["Isso aí é só uma parte…", "Tem coisas que eu não deixo abertas desse jeito…"],
      ["Isso foi só um pedacinho…", "O que tá guardado é bem melhor 👀"],
    ],

    // Etapa 6 → Desejo
    stage6: [
      ["Tem gente que entra só por curiosidade…", "Mas quando vê tudo… não sai mais 👀"],
      ["Sabe aquela coisa que você não consegue parar de ver?", "É mais ou menos isso… 👀"],
    ],

    // Etapa 7 → Convite
    stage7: [
      ["Se eu te mostrar o resto… você aguenta? 😅"],
      ["Acha que consegue ver tudo sem travar? 😅"],
    ],

    // Etapa 8 → Conversão (antes do botão)
    stage8: [
      ["Então não fica só olhando daqui…", "Entra lá e vê tudo sem filtro 👇"],
      ["Vai lá então… tá tudo te esperando 👇"],
    ],

    // Etapa 9 → Urgência (após o botão)
    stage9: [
      ["Eu deixei liberado por um valor bem baixo hoje…", "Mas não sei até quando isso vai ficar assim 👀"],
      ["Tá com um precinho especial agora…", "Depois não sei se vai continuar assim 😅"],
    ],
  },

  /* ─────────────────────────────────────────────────────────────
   * RESPOSTAS DE CONTROLE
   * ───────────────────────────────────────────────────────────── */
  redirectResponses: [
    ["Depois eu te conto isso 😅", "Primeiro quero te mostrar uma coisa…"],
    ["Boa pergunta… mas depois 😅", "Tem uma coisa aqui que você precisa ver antes…"],
    ["Isso eu respondo depois…", "Mas antes… deixa eu te mostrar uma coisa 👀"],
  ],

  hesitationResponses: [
    ["Relaxa… entra sem compromisso", "Eu só queria te mostrar porque acho que você vai gostar 😅"],
    ["Não precisa ter medo não…", "Entra só pra dar uma olhada… depois você me conta 😅"],
  ],

  reactivationMessages: [
    ["Sumiu, {name}? 👀", "Eu ia te mostrar uma coisa melhor ainda…"],
    ["Oi {name}… ainda tá aí? 👀", "Não vai perder o que eu ia te mostrar…"],
  ],

  /* ─────────────────────────────────────────────────────────────
   * PALAVRAS-CHAVE
   * ───────────────────────────────────────────────────────────── */
  positiveKeywords: [
    "sim","claro","pode","vai","quero","manda","mostra","bora","vamos",
    "tô","to","tô dentro","lógico","logico","ok","okay","s","ss","sss",
    "kkk","rs","haha","yeah","yep","yes","boa","massa","show","top",
    "beleza","aguento","consigo","vou","entre","tá","ta","manda","bora",
    "claro","quero ver","mostra","pode sim","com certeza","certeza",
  ],

  hesitationKeywords: [
    "não sei","nao sei","talvez","depende","sei lá","sei la","hm","hmm",
    "acho que","tipo","será","sera","perigoso","caro","quanto","dinheiro",
    "vou pensar","pensar","depois","não agora","nao agora","espera",
  ],
};
