const projectImages = import.meta.glob("../assets/project*.png", {
  eager: true,
  import: "default",
});

const projectsData = [
  {
    id: 1,
    name: "Agência Digital",
    description:
      "Site institucional desenvolvido para uma agência de tecnologia, com foco em apresentação dos serviços, navegação clara e uma experiência visual moderna.",
    image: projectImages["../assets/project2.png"],
    type: ["Empresarial"],
    url: "https://digitalagency-forge.netlify.app/",
    featured: true,
  },

  {
    id: 2,
    name: "Corretora de Planos de Saúde",
    description:
      "Landing page desenvolvida para captação de leads, apresentando os serviços de forma objetiva e direcionando o visitante para o contato comercial.",
    image: projectImages["../assets/project13.png"],
    type: ["Landing Page"],
    url: null,
    featured: false,
  },

  {
    id: 3,
    name: "Agência de Marketing",
    description:
      "Site institucional com estrutura de blog, pensado para apresentação dos serviços, publicação de conteúdo e fortalecimento da presença digital da marca.",
    image: projectImages["../assets/project21.png"],
    type: ["Empresarial", "Blog"],
    url: null,
    featured: false,
  },

  {
    id: 4,
    name: "Locação de Máquinas e Equipamentos",
    description:
      "Site corporativo desenvolvido para apresentar equipamentos, serviços e informações comerciais de forma organizada e acessível.",
    image: projectImages["../assets/project15.png"],
    type: ["Empresarial"],
    url: "https://aerolift.com.br/",
    featured: true,
  },

  {
    id: 5,
    name: "Limpeza Predial",
    description:
      "Site corporativo com estrutura voltada para serviços de limpeza e facilities, incluindo conteúdo estratégico e seção de blog para presença orgânica.",
    image: projectImages["../assets/project18.png"],
    type: ["Empresarial", "Blog"],
    url: "https://excelenciabc.com/",
    featured: true,
  },

  {
    id: 6,
    name: "Locação de Escritórios",
    description:
      "Site institucional para locação de salas e espaços comerciais, desenvolvido para apresentar os ambientes, serviços e informações de forma elegante e objetiva.",
    image: projectImages["../assets/project3.png"],
    type: ["Empresarial"],
    url: "https://idealofficesmorumbi.com.br/",
    featured: true,
  },

  {
    id: 7,
    name: "Salão de Beleza",
    description:
      "Site institucional para salão de beleza, com apresentação de serviços, informações sobre o espaço e integração com agendamento online.",
    image: projectImages["../assets/project28.png"],
    type: ["Empresarial", "Agendamento"],
    url: "https://paraisocabeleireiro.com/",
    featured: true,
  },

  {
    id: 8,
    name: "Barbearia",
    description:
      "Site institucional desenvolvido para uma barbearia, com identidade visual marcante, apresentação dos serviços e foco na geração de novos contatos.",
    image: projectImages["../assets/project20.png"],
    type: ["Empresarial"],
    url: "https://www.mrshelbysbarbershop.com/",
    featured: true,
  },

  {
    id: 9,
    name: "Clínica Médica",
    description:
      "Site institucional desenvolvido para comunicar autoridade e credibilidade, apresentando serviços e informações de forma acolhedora e facilitando o contato com novos pacientes.",
    image: projectImages["../assets/project33.png"],
    type: ["Empresarial"],
    url: "https://dramarciamachado.com.br/",
    featured: true,
  },

  {
    id: 10,
    name: "Serviços de Climatização",
    description:
      "Site corporativo para serviços de climatização residencial e industrial, estruturado para apresentar soluções e facilitar o contato com potenciais clientes.",
    image: projectImages["../assets/project29.png"],
    type: ["Empresarial", "Blog"],
    url: "https://floripaclimatizacao.com.br/",
    featured: false,
  },

  {
    id: 11,
    name: "Página de Produto",
    description:
      "Landing page para apresentação de um produto, utilizando uma estrutura visual simples e objetiva para destacar características e benefícios.",
    image: projectImages["../assets/project30.png"],
    type: ["Landing Page"],
    url: "https://smartbottle.onrender.com",
    featured: true,
  },

  {
    id: 12,
    name: "Estúdio Fotográfico",
    description:
      "Portfólio digital desenvolvido para valorizar trabalhos fotográficos, com foco na apresentação das imagens e em uma experiência de navegação visual.",
    image: projectImages["../assets/project26.png"],
    type: ["Portfólio"],
    url: null,
    featured: false,
  },

  {
    id: 13,
    name: "Clínica Odontológica",
    description:
      "Landing page para clínica odontológica, combinando apresentação dos serviços, comunicação profissional e navegação simples para facilitar o contato.",
    image: projectImages["../assets/project32.png"],
    type: ["Landing Page"],
    url: "https://odontoprime-jjwl.onrender.com",
    featured: true,
  },

  {
    id: 14,
    name: "Segurança do Trabalho",
    description:
      "Site corporativo para empresa de segurança do trabalho, organizado para apresentar serviços, informações regulamentares e conteúdos de apoio.",
    image: projectImages["../assets/project27.png"],
    type: ["Empresarial", "Blog"],
    url: null,
    featured: false,
  },

  {
    id: 15,
    name: "Blog de Receitas",
    description:
      "Aplicação de conteúdo culinário com organização por categorias, navegação simples e estrutura desenvolvida para facilitar a leitura das receitas.",
    image: projectImages["../assets/project12.png"],
    type: ["Blog"],
    url: "https://receitasdajulia.vercel.app/",
    featured: true,
  },

  {
    id: 16,
    name: "Serviços de Limpeza",
    description:
      "Landing page comercial para serviços de limpeza residencial e empresarial, desenvolvida com foco em apresentação dos serviços e geração de contatos.",
    image: projectImages["../assets/project4.png"],
    type: ["Landing Page"],
    url: "https://limpapro.onrender.com",
    featured: true,
  },

  {
    id: 17,
    name: "Portfólio Técnico",
    description:
      "Portfólio profissional para área de tecnologia, organizado para apresentar experiência, competências e projetos de forma clara e objetiva.",
    image: projectImages["../assets/project11.png"],
    type: ["Portfólio"],
    url: "https://johnmillerportfolio.netlify.app/",
    featured: true,
  },

  {
    id: 18,
    name: "Portfólio Criativo",
    description:
      "Portfólio digital desenvolvido para profissional de design, utilizando uma identidade visual marcante e uma apresentação focada nos trabalhos.",
    image: projectImages["../assets/project10.png"],
    type: ["Portfólio"],
    url: "https://portfoliomariemancini.netlify.app/",
    featured: true,
  },

  {
    id: 19,
    name: "Estúdio de Tatuagem",
    description:
      "Site institucional com identidade visual dark, apresentação do estúdio e estrutura direcionada para facilitar o contato e agendamento.",
    image: projectImages["../assets/project5.png"],
    type: ["Empresarial"],
    url: "https://skulltattoostudio.netlify.app/",
    featured: true,
  },

  {
    id: 20,
    name: "Portfólio de Fotografia",
    description:
      "Galeria digital desenvolvida para apresentar trabalhos fotográficos com destaque para as imagens e uma navegação visual fluida.",
    image: projectImages["../assets/project9.png"],
    type: ["Portfólio"],
    url: "https://portfolio-photography-coral.vercel.app/",
    featured: true,
  },

  {
    id: 21,
    name: "Clínica Veterinária",
    description:
      "Site institucional para clínica veterinária, com apresentação dos serviços, informações para tutores e acesso facilitado aos canais de contato.",
    image: projectImages["../assets/project8.png"],
    type: ["Empresarial"],
    url: "https://petcareclinicavet.netlify.app/",
    featured: true,
  },

  {
    id: 22,
    name: "Plataforma SaaS",
    description:
      "Landing page para produto digital voltado ao mercado de inteligência artificial, com foco na apresentação da solução e de seus principais recursos.",
    image: projectImages["../assets/project31.png"],
    type: ["Landing Page"],
    url: "https://syntrixai.onrender.com",
    featured: true,
  },

  {
    id: 23,
    name: "Portfólio de Desenvolvedor",
    description:
      "Portfólio profissional desenvolvido para apresentar projetos, competências técnicas e experiência na área de desenvolvimento.",
    image: projectImages["../assets/project7.png"],
    type: ["Portfólio"],
    url: "https://jaspereverettportfolio.netlify.app/",
    featured: true,
  },

  {
    id: 24,
    name: "E-commerce de Cadeiras",
    description:
      "Conceito de loja virtual para mobiliário, estruturado para apresentar produtos, categorias e informações de compra de forma organizada.",
    image: projectImages["../assets/project1.png"],
    type: ["E-commerce"],
    url: "https://ecommerce-chair.onrender.com/",
    featured: true,
  },

  {
    id: 25,
    name: "Consultoria Estratégica",
    description:
      "Site institucional voltado ao mercado B2B, desenvolvido para apresentar serviços de consultoria e fortalecer a presença digital da empresa.",
    image: projectImages["../assets/project17.png"],
    type: ["Empresarial", "Blog"],
    url: "https://omatic.com.br/",
    featured: false,
  },

  {
    id: 26,
    name: "E-commerce de Acessórios",
    description:
      "Loja virtual desenvolvida para comercialização de acessórios e vestuário para motociclistas, com estrutura voltada para navegação e produtos.",
    image: projectImages["../assets/project19.png"],
    type: ["E-commerce", "Blog"],
    url: "https://ibamegastore.com/",
    featured: true,
  },

  {
    id: 27,
    name: "Gestão de Tráfego",
    description:
      "Landing page comercial desenvolvida para apresentação de serviços de gestão de tráfego e captação de novos clientes.",
    image: projectImages["../assets/project25.png"],
    type: ["Landing Page"],
    url: null,
    featured: false,
  },

  {
    id: 28,
    name: "Escritório de Advocacia",
    description:
      "Site institucional para escritório de advocacia, com comunicação profissional, organização clara das informações e apresentação dos serviços.",
    image: projectImages["../assets/project16.png"],
    type: ["Empresarial"],
    url: null,
    featured: false,
  },

  {
    id: 29,
    name: "Consultoria de Agronegócio",
    description:
      "Site corporativo para empresa do setor de agronegócio e sustentabilidade, desenvolvido para apresentar soluções, serviços e informações institucionais.",
    image: projectImages["../assets/project22.png"],
    type: ["Empresarial", "Blog"],
    url: "https://bioexecut.com.br/",
    featured: false,
  },

  {
    id: 30,
    name: "Portal Jornalístico",
    description:
      "Portal de notícias estruturado para organizar grande volume de conteúdo em uma experiência responsiva e fácil de navegar.",
    image: projectImages["../assets/project23.png"],
    type: ["Blog"],
    url: null,
    featured: false,
  },

  {
    id: 31,
    name: "Página de Vendas",
    description:
      "Landing page desenvolvida para apresentação e venda de um produto digital, com estrutura focada em clareza, navegação e conversão.",
    image: projectImages["../assets/project24.png"],
    type: ["Landing Page"],
    url: null,
    featured: false,
  },

  {
    id: 32,
    name: "Escritório de Advocacia",
    description:
      "Site institucional para advocacia, desenvolvido com uma identidade visual sóbria e foco em transmitir profissionalismo, confiança e credibilidade.",
    image: projectImages["../assets/project14.png"],
    type: ["Empresarial"],
    url: null,
    featured: false,
  },
];

export default projectsData;
