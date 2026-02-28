export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'requisitos' | 'diseno' | 'implementacion' | 'pruebas' | 'despliegue' | 'mantenimiento';
  url: string;
  logo: string;
}

function favicon(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

export const tools: Tool[] = [
  // 1. Requisitos
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Análisis y generación de requisitos a partir de descripciones en lenguaje natural.',
    category: 'requisitos',
    url: 'https://chat.openai.com',
    logo: favicon('chat.openai.com'),
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Asistente para redactar historias de usuario y documentar requisitos funcionales eficientemente.',
    category: 'requisitos',
    url: 'https://notion.so',
    logo: favicon('notion.so'),
  },
  {
    id: 'jira-ai',
    name: 'Jira con IA',
    description: 'Gestión ágil de proyectos con asistente inteligente para crear y refinar historias de usuario.',
    category: 'requisitos',
    url: 'https://www.atlassian.com/software/jira',
    logo: favicon('atlassian.com'),
  },
  {
    id: 'miro-ai',
    name: 'Miro AI',
    description: 'Pizarra colaborativa con IA para lluvia de ideas, mapas mentales y diagramas de flujo de requisitos.',
    category: 'requisitos',
    url: 'https://miro.com',
    logo: favicon('miro.com'),
  },

  // 2. Diseño
  {
    id: 'v0-dev',
    name: 'v0.dev',
    description: 'Generación de componentes de UI y prototipado rápido a partir de lenguaje natural.',
    category: 'diseno',
    url: 'https://v0.dev',
    logo: favicon('v0.dev'),
  },
  {
    id: 'eraser-io',
    name: 'Eraser.io',
    description: 'Generación de diagramas de arquitectura, flujos y modelos de datos con IA.',
    category: 'diseno',
    url: 'https://eraser.io',
    logo: favicon('eraser.io'),
  },
  {
    id: 'bolt-new',
    name: 'Bolt.new',
    description: 'Prototipado full-stack en el navegador con IA que genera aplicaciones completas desde un prompt.',
    category: 'diseno',
    url: 'https://bolt.new',
    logo: favicon('bolt.new'),
  },
  {
    id: 'dbdiagram',
    name: 'dbdiagram.io',
    description: 'Diseño visual de esquemas de base de datos con DBML, ideal para modelado relacional rápido.',
    category: 'diseno',
    url: 'https://dbdiagram.io',
    logo: favicon('dbdiagram.io'),
  },

  // 3. Implementación
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'Compañero de programación en tiempo real que sugiere bloques completos de código y lógica.',
    category: 'implementacion',
    url: 'https://github.com/features/copilot',
    logo: favicon('github.com'),
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    description: 'Agente de codificación de Anthropic para terminal, ideal para refactorización y resolución de bugs complejos.',
    category: 'implementacion',
    url: 'https://anthropic.com',
    logo: favicon('anthropic.com'),
  },
  {
    id: 'codex',
    name: 'Codex',
    description: 'Agente de codificación de OpenAI que ejecuta tareas de desarrollo de forma autónoma en un entorno seguro.',
    category: 'implementacion',
    url: 'https://openai.com/index/codex',
    logo: favicon('openai.com'),
  },
  {
    id: 'antigravity',
    name: 'Antigravity',
    description: 'IDE agent-first de Google que permite delegar tareas de codificación a agentes autónomos con Gemini.',
    category: 'implementacion',
    url: 'https://antigravityai.org',
    logo: favicon('google.com'),
  },

  // 4. Pruebas
  {
    id: 'codium-ai',
    name: 'Qodo (CodiumAI)',
    description: 'Generación automática de tests unitarios y análisis de comportamiento para asegurar la calidad.',
    category: 'pruebas',
    url: 'https://qodo.ai',
    logo: favicon('qodo.ai'),
  },
  {
    id: 'katalon',
    name: 'Katalon',
    description: 'Suite completa de automatización de pruebas con asistente de IA para generación de scripts.',
    category: 'pruebas',
    url: 'https://katalon.com',
    logo: favicon('katalon.com'),
  },
  {
    id: 'copilot-testing',
    name: 'Copilot para Tests',
    description: 'Genera tests unitarios, de integración y edge cases directamente desde tu editor con GitHub Copilot.',
    category: 'pruebas',
    url: 'https://github.com/features/copilot',
    logo: favicon('github.com'),
  },
  {
    id: 'applitools',
    name: 'Applitools',
    description: 'Testing visual con IA que detecta regresiones de interfaz comparando capturas píxel a píxel.',
    category: 'pruebas',
    url: 'https://applitools.com',
    logo: favicon('applitools.com'),
  },

  // 5. Despliegue
  {
    id: 'vercel',
    name: 'Vercel',
    description: 'Plataforma de despliegue con previews automáticos, analytics con IA y optimización de rendimiento.',
    category: 'despliegue',
    url: 'https://vercel.com',
    logo: favicon('vercel.com'),
  },
  {
    id: 'netlify',
    name: 'Netlify',
    description: 'Despliegue continuo con builds inteligentes, edge functions y optimización automática de assets.',
    category: 'despliegue',
    url: 'https://netlify.com',
    logo: favicon('netlify.com'),
  },
  {
    id: 'railway',
    name: 'Railway',
    description: 'Plataforma de despliegue simplificada con detección automática de stack y configuración inteligente.',
    category: 'despliegue',
    url: 'https://railway.app',
    logo: favicon('railway.app'),
  },
  {
    id: 'supabase',
    name: 'Supabase',
    description: 'Backend como servicio con base de datos PostgreSQL, autenticación y funciones serverless listas para producción.',
    category: 'despliegue',
    url: 'https://supabase.com',
    logo: favicon('supabase.com'),
  },

  // 6. Mantenimiento
  {
    id: 'sentry-ai',
    name: 'Sentry AI',
    description: 'Monitoreo de errores en producción con agrupación inteligente y sugerencias de corrección automáticas.',
    category: 'mantenimiento',
    url: 'https://sentry.io',
    logo: favicon('sentry.io'),
  },
  {
    id: 'snyk',
    name: 'Snyk',
    description: 'Detección de vulnerabilidades con IA en dependencias, contenedores y código en tiempo real.',
    category: 'mantenimiento',
    url: 'https://snyk.io',
    logo: favicon('snyk.io'),
  },
  {
    id: 'sonarqube-ai',
    name: 'SonarQube AI',
    description: 'Análisis estático de código con sugerencias de IA para deuda técnica, bugs y vulnerabilidades.',
    category: 'mantenimiento',
    url: 'https://sonarqube.org',
    logo: favicon('sonarqube.org'),
  },
  {
    id: 'mintlify',
    name: 'Mintlify',
    description: 'Documentación técnica inteligente que evoluciona automáticamente con los cambios en el código.',
    category: 'mantenimiento',
    url: 'https://mintlify.com',
    logo: favicon('mintlify.com'),
  },
];
