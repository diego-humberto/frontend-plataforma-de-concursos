import { Button } from "@/components/ui/button";

interface AssuntoCardProps {
  nome: string;
  linksLeis: string[];
  linksQuestoes: string[];
  pdfs: string[];
  onEdit: () => void;
  onDelete: () => void;
}

export default function AssuntoCard({ nome, linksLeis, linksQuestoes, pdfs, onEdit, onDelete }: AssuntoCardProps) {
  return (
    <div className="bg-neutral-100 dark:bg-neutral-800 rounded p-4 mb-2">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-base">{nome}</span>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={onEdit}>Editar</Button>
          <Button variant="destructive" size="sm" onClick={onDelete}>Remover</Button>
        </div>
      </div>
      <div className="mb-2">
        <span className="font-semibold">Links de Leis:</span>
        <ul className="list-disc ml-6">
          {linksLeis.map((link, i) => (
            <li key={i}><a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{link}</a></li>
          ))}
        </ul>
      </div>
      <div className="mb-2">
        <span className="font-semibold">Links de Questões:</span>
        <ul className="list-disc ml-6">
          {linksQuestoes.map((link, i) => (
            <li key={i}><a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{link}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <span className="font-semibold">PDFs:</span>
        <ul className="list-disc ml-6">
          {pdfs.map((pdf, i) => (
            <li key={i}><a href={pdf} target="_blank" rel="noopener noreferrer" className="text-green-700 underline">PDF {i + 1}</a></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
