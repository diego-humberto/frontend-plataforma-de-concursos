export interface Assunto {
  id: number;
  nome: string;
  linksLeis: string[];
  linksQuestoes: string[];
  pdfs: string[];
}

export interface Materia {
  id: number;
  nome: string;
  icone: string; // nome do ícone Lucide
  assuntos: Assunto[];
} 