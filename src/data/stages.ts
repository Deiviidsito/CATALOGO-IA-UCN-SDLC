import { 
  ClipboardList, 
  Layout, 
  Code2, 
  FlaskConical, 
  Cloud, 
  RefreshCcw,
  LucideIcon
} from "lucide-react";

export interface Stage {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  subcategories: string[];
}

export const stages: Stage[] = [
  {
    id: 'requisitos',
    name: '1. Levantamiento y Análisis de Requisitos',
    description: 'Identificación de necesidades del usuario y definición del alcance del sistema.',
    icon: ClipboardList,
    subcategories: ['Requisitos funcionales', 'Historias de usuario', 'Casos de uso', 'SRS']
  },
  {
    id: 'diseno',
    name: '2. Diseño del Sistema',
    description: 'Definición de la arquitectura técnica, estructural y de interfaces del software.',
    icon: Layout,
    subcategories: ['Arquitectura', 'Modelado DB', 'Diagramas UML', 'UI/UX']
  },
  {
    id: 'implementacion',
    name: '3. Implementación (Codificación)',
    description: 'Desarrollo del software mediante programación y control de versiones.',
    icon: Code2,
    subcategories: ['Desarrollo', 'Git', 'Integración', 'Buenas prácticas']
  },
  {
    id: 'pruebas',
    name: '4. Pruebas (Testing)',
    description: 'Validación del funcionamiento correcto y cumplimiento de los requisitos.',
    icon: FlaskConical,
    subcategories: ['Unit Testing', 'Integración', 'Funcionales', 'Automatización']
  },
  {
    id: 'despliegue',
    name: '5. Despliegue (Deployment)',
    description: 'Publicación del sistema en entornos productivos y configuración de infra.',
    icon: Cloud,
    subcategories: ['Servidores', 'CI/CD', 'Cloud computing']
  },
  {
    id: 'mantenimiento',
    name: '6. Mantenimiento y Evolución',
    description: 'Actualización, corrección y mejora continua del software post-lanzamiento.',
    icon: RefreshCcw,
    subcategories: ['Corrección bugs', 'Nuevas funciones', 'Seguridad', 'Rendimiento']
  }
];
