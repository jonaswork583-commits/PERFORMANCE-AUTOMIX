/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const PERFORMANCE_DATA = {
  client: "Automix",
  period: "Dia 1 ao Dia 7",
  totalInvestment: 605.96, // Sum of 225.67 + 261.92 + 43.40 + 31.37 + 43.60
  totalLeads: 70, // Sum of 54 + 16 leads
  totalVisits: 242, // Sum of 97 + 145 profile visits
  totalReach: 25401, // Site Remarketing reach
  slides: [
    {
      id: 1,
      title: "Campanha de Vendas para Automix",
      subtitle: "Geração de Leads Qualificados",
      platform: "Meta Ads (Facebook & Instagram)",
      invested: 225.67,
      result: 54,
      resultLabel: "Leads",
      costPerResult: 4.18,
      costPerResultLabel: "Custo por Lead (CPL)",
      description: "Campanha focada na atração de clientes com alta intenção de compra para a marca principal Automix.",
      status: "Alta Performance",
      efficiency: "Excelente",
      insights: [
        "Apresenta um CPL extremamente competitivo de R$ 4,18, ideal para otimização de vendas diretas.",
        "Contribui com o maior canal de captação ativa de leads qualificados do período."
      ]
    },
    {
      id: 2,
      title: "Campanha de Vendas Multimarcas",
      subtitle: "Geração de Leads Multimarcas",
      platform: "Meta Ads (Facebook & Instagram)",
      invested: 261.92,
      result: 16,
      resultLabel: "Leads",
      costPerResult: 16.37,
      costPerResultLabel: "Custo por Lead (CPL)",
      description: "Foco na atração de clientes para o estoque rotativo de veículos multimarcas.",
      status: "Atenção ao Custo",
      efficiency: "Moderada",
      insights: [
        "Custo por lead de R$ 16,37 devido à segmentação ampla. Recomenda-se testar novos criativos focados em modelos específicos.",
        "Alocação inicial de verba para testes de tração do portfólio multimarcas."
      ]
    },
    {
      id: 3,
      title: "Remarketing para o Site",
      subtitle: "Reengajamento de Audiência Morna",
      platform: "Meta Ads (Facebook & Instagram)",
      invested: 43.40,
      result: 25401,
      resultLabel: "Pessoas Alcançadas",
      costPerResult: 1.71, // CPM
      costPerResultLabel: "Custo por Mil Alcançados (CPM)",
      description: "Impacto visual em usuários que já visitaram as páginas do site ou interagiram com as redes sociais.",
      status: "Excelente Alcance",
      efficiency: "Altíssima",
      insights: [
        "Custando apenas R$ 1,71 para alcançar 1.000 pessoas, possui extrema eficiência em lembrança de marca.",
        "Incentiva visitantes anteriores a retornarem ao fluxo de vendas e fechamento de propostas."
      ]
    },
    {
      id: 4,
      title: "Tráfego para Perfil Automix",
      subtitle: "Atração e Visibilidade de Canal",
      platform: "Meta Ads (Instagram)",
      invested: 31.37,
      result: 97,
      resultLabel: "Visitas no Perfil",
      costPerResult: 0.32,
      costPerResultLabel: "Custo por Visita (CPV)",
      description: "Campanha visando direcionar potenciais compradores para explorar o perfil institucional e stories diários.",
      status: "Engajamento Sólido",
      efficiency: "Ótima",
      insights: [
        "Custo por visita de R$ 0,32, gerando oportunidades orgânicas de interação através de DMs e Stories.",
        "Excelente tática de branding contínuo que alimenta o funil social de longo prazo."
      ]
    },
    {
      id: 5,
      title: "Tráfego para Perfil da Multimarcas",
      subtitle: "Visibilidade e Atração Instagram",
      platform: "Meta Ads (Instagram)",
      invested: 43.60,
      result: 145,
      resultLabel: "Visitas no Perfil",
      costPerResult: 0.30,
      costPerResultLabel: "Custo por Visita (CPV)",
      description: "Direcionamento estratégico para a página do Instagram com foco na vitrine multimarcas.",
      status: "Máxima Eficiência",
      efficiency: "Excelente",
      insights: [
        "Apresentou o menor custo por visita do período (R$ 0,30), indicando forte afinidade do público com o estoque variado.",
        "Gera volume expressivo de novos visitantes e potenciais compradores no chat."
      ]
    }
  ]
};
