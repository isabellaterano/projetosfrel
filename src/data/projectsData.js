const projectImages = import.meta.glob("../assets/project*.png", {
  eager: true,
  import: "default",
});

const projectsData = [
  {
    id: 1,
    name: "Agência Digital",
    description:
      "Plataforma institucional de alta conversão projetada para agências de tecnologia, focada em performance e interface minimalista.",
    image: projectImages["../assets/project2.png"],
    type: ["Empresarial"],
    url: "https://digitalagency-forge.netlify.app/",
    featured: true,
  },
  {
    id: 2,
    name: "Corretora de Planos de Saúde",
    description:
      "Landing page corporativa estruturada para alta conversão, otimizada para captação de leads qualificados e funil de vendas.",
    image: projectImages["../assets/project13.png"],
    type: ["Landing Page"],
    url: null,
    featured: false,
  },
  {
    id: 3,
    name: "Agência de Marketing",
    description:
      "Solução web corporativa com blog integrado, desenvolvida para automação de conteúdo e posicionamento de marca.",
    image: projectImages["../assets/project21.png"],
    type: ["Empresarial", "Blog"],
    url: "https://vitru360.com/",
    featured: true,
  },
  {
    id: 4,
    name: "Locação de máquinas e equipamentos para construção",
    description:
      "Plataforma corporativa de alta performance para a locação de máquinas e equipamentos.",
    image: projectImages["../assets/project15.png"],
    type: ["Empresarial"],
    url: "https://aerolift.com.br/",
    featured: true,
  },
  {
    id: 5,
    name: "Limpeza Predial",
    description:
      "Portal corporativo com arquitetura focada em SEO local e seção dinâmica de blog para atração de clientes orgânicos.",
    image: projectImages["../assets/project18.png"],
    type: ["Empresarial", "Blog"],
    url: "https://excelenciabc.com/",
    featured: false,
  },
  {
    id: 6,
    name: "Locação de Escritórios",
    description:
      "Site institucional de alto padrão para o setor imobiliário corporativo, voltada para a locação de salas e andares comerciais.",
    image: projectImages["../assets/project3.png"],
    type: ["Empresarial"],
    url: "https://idealofficesmorumbi.com.br/",
    featured: true,
  },
  {
    id: 7,
    name: "Salão de Beleza",
    description:
      "Interface institucional moderna com sistema integrado de agendamento online e painel de serviços de estética.",
    image: projectImages["../assets/project28.png"],
    type: ["Empresarial", "Blog", "Agendamento"],
    url: "https://paraisocabeleireiro.com/",
    featured: true,
  },
  {
    id: 8,
    name: "Barbearia",
    description:
      "Página institucional com estética refinada e foco na experiência do usuário, idealizada para conversão de novos clientes.",
    image: projectImages["../assets/project20.png"],
    type: ["Empresarial", "Blog"],
    url: "https://www.mrshelbysbarbershop.com/",
    featured: true,
  },
  {
    id: 9,
    name: "Serviços de Climatização",
    description:
      "Plataforma técnica focada em prestação de serviços residenciais e industriais com carregamento ultra-rápido.",
    image: projectImages["../assets/project29.png"],
    type: ["Empresarial", "Blog"],
    url: "https://floripaclimatizacao.com.br/",
    featured: false,
  },
  {
    id: 10,
    name: "Página de Produto",
    description:
      "Landing page minimalista para e-commerce de produto único, explorando tipografia limpa e alto contraste visual.",
    image: projectImages["../assets/project30.png"],
    type: ["Landing Page"],
    url: "https://smartbottle.onrender.com",
    featured: true,
  },
  {
    id: 11,
    name: "Estúdio Fotográfico",
    description:
      "Portfólio minimalista otimizado para carregamento inteligente de imagens em alta resolução sem perda de performance.",
    image: projectImages["../assets/project26.png"],
    type: ["Portfólio"],
    url: null,
    featured: false,
  },
  {
    id: 12,
    name: "Clínica Odontológica",
    description:
      "Landing page para o setor de saúde privada de alto padrão, combinando elegância visual e agilidade na navegação.",
    image: projectImages["../assets/project32.png"],
    type: ["Landing Page"],
    url: "https://odontoprime-jjwl.onrender.com",
    featured: true,
  },
  {
    id: 13,
    name: "Segurança do Trabalho",
    description:
      "Portal corporativo para assessoria regulamentar e compliance, organizado por módulos de fácil leitura.",
    image: projectImages["../assets/project27.png"],
    type: ["Empresarial", "Blog"],
    url: null,
    featured: false,
  },
  {
    id: 14,
    name: "Blog de Receitas",
    description:
      "Aplicação dinâmica voltada para a legibilidade fluida de conteúdos culinários e filtros assíncronos por categorias.",
    image: projectImages["../assets/project12.png"],
    type: ["Blog"],
    url: "https://receitasdajulia.vercel.app/",
    featured: true,
  },
  {
    id: 15,
    name: "Serviços de Limpeza",
    description:
      "Landing page interativa com foco comercial para contratação de facilities residenciais e comerciais de forma prática.",
    image: projectImages["../assets/project4.png"],
    type: ["Landing Page"],
    url: "https://limpapro.onrender.com",
    featured: true,
  },
  {
    id: 16,
    name: "Portfólio Técnico",
    description:
      "Showcase digital projetado para engenharia de software, priorizando uma arquitetura de informação clara e direta.",
    image: projectImages["../assets/project11.png"],
    type: ["Portfólio"],
    url: "https://johnmillerportfolio.netlify.app/",
    featured: true,
  },
  {
    id: 17,
    name: "Portfólio Criativo",
    description:
      "Interface interativa voltada para o setor de design, onde a tipografia estruturada dita o ritmo visual da experiência.",
    image: projectImages["../assets/project10.png"],
    type: ["Portfólio"],
    url: "https://portfoliomariemancini.netlify.app/",
    featured: true,
  },
  {
    id: 18,
    name: "Estúdio de Tatuagem",
    description:
      "Site institucional com temática dark e design autoral, otimizado para conversão direta via canais de atendimento.",
    image: projectImages["../assets/project5.png"],
    type: ["Empresarial"],
    url: "https://skulltattoostudio.netlify.app/",
    featured: true,
  },
  {
    id: 19,
    name: "Portfólio de Fotografia",
    description:
      "Galeria digital premium com transições sofisticadas e grids assimétricos para valorização de produções visuais.",
    image: projectImages["../assets/project9.png"],
    type: ["Portfólio"],
    url: "https://portfolio-photography-coral.vercel.app/",
    featured: true,
  },
  {
    id: 20,
    name: "Clínica Veterinária",
    description:
      "Interface acolhedora e intuitiva desenvolvida para apresentação de serviços médicos e contato emergencial.",
    image: projectImages["../assets/project8.png"],
    type: ["Empresarial"],
    url: "https://petcareclinicavet.netlify.app/",
    featured: true,
  },
  {
    id: 21,
    name: "Plataforma SaaS",
    description:
      "Interface moderna de produto voltada para o mercado de inteligência artificial, utilizando padrões estéticos futuristas e limpos.",
    image: projectImages["../assets/project31.png"],
    type: ["Landing Page"],
    url: "https://syntrixai.onrender.com",
    featured: true,
  },
  {
    id: 22,
    name: "Portfólio de Desenvolvedor",
    description:
      "Apresentação profissional de competências em tecnologia e desenvolvimento de sistemas com layout sóbrio.",
    image: projectImages["../assets/project7.png"],
    type: ["Portfólio"],
    url: "https://jaspereverettportfolio.netlify.app/",
    featured: true,
  },
  {
    id: 23,
    name: "E-commerce de Cadeiras",
    description:
      "Conceito de comércio eletrônico focado no segmento de mobiliário corporativo e residencial de alto padrão.",
    image: projectImages["../assets/project1.png"],
    type: ["E-commerce"],
    url: "https://ecommerce-chair.onrender.com/",
    featured: true,
  },
  {
    id: 24,
    name: "Consultoria Estratégica",
    description:
      "Portal institucional focado no mercado corporativo B2B, transmitindo solidez e autoridade comercial.",
    image: projectImages["../assets/project17.png"],
    type: ["Empresarial", "Blog"],
    url: "https://omatic.com.br/",
    featured: false,
  },
  {
    id: 25,
    name: "E-commerce de Acessórios",
    description:
      "Loja virtual completa com arquitetura robusta voltada para a venda de peças e vestuário técnico para motociclistas.",
    image: projectImages["../assets/project19.png"],
    type: ["E-commerce", "Blog"],
    url: "https://ibamegastore.com/",
    featured: true,
  },
  {
    id: 26,
    name: "Gestão de Tráfego",
    description:
      "Landing page de alta conversão estruturada com foco em captação de leads para lançamentos digitais e negócios locais.",
    image: projectImages["../assets/project25.png"],
    type: ["Landing Page"],
    url: "https://upcomunidadedigital.com.br/",
    featured: true,
  },
  {
    id: 27,
    name: "Escritório de Advocacia",
    description:
      "Site institucional planejado para o setor jurídico corporativo, unindo seriedade, elegância e clareza de informações.",
    image: projectImages["../assets/project16.png"],
    type: ["Landing Page"],
    url: null,
    featured: false,
  },
  {
    id: 28,
    name: "Consultoria de Agronegócio",
    description:
      "Portal corporativo especializado no setor agro e sustentabilidade energética, projetado para transmitir segurança e liderança.",
    image: projectImages["../assets/project22.png"],
    type: ["Empresarial", "Blog"],
    url: null,
    featured: false,
  },
  {
    id: 29,
    name: "Portal Jornalístico",
    description:
      "Plataforma de notícias com layout dinâmico em grid responsivo, idealizada para legibilidade e alto volume de acessos.",
    image: projectImages["../assets/project23.png"],
    type: ["Blog"],
    url: "https://portodesaosebastiaonews.com.br/",
    featured: false,
  },
  {
    id: 30,
    name: "Página de Vendas",
    description:
      "Landing page de conversão cirúrgica para infoprodutos, aplicando gatilhos de usabilidade e design focado em resultados.",
    image: projectImages["../assets/project24.png"],
    type: ["Landing Page"],
    url: null,
    featured: false,
  },
  {
    id: 31,
    name: "Escritório de Advocacia",
    description:
      "Interface corporativa voltada para advocacia premium, comunicando compliance, profissionalismo e alta credibilidade.",
    image: projectImages["../assets/project14.png"],
    type: ["Landing Page"],
    url: null,
    featured: false,
  },
];

export default projectsData;
