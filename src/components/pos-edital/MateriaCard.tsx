import React from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MateriaCardProps {
  nome: string;
  Icone: LucideIcon;
  onEdit: () => void;
  onDelete: () => void;
  onExpand: () => void;
}

export default function MateriaCard({ nome, Icone, onEdit, onDelete, onExpand }: MateriaCardProps) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-neutral-900 rounded-lg shadow p-4 mb-4">
      <div className="flex items-center gap-3 cursor-pointer" onClick={onExpand}>
        <Icone className="w-8 h-8 text-blue-600" />
        <span className="font-semibold text-lg">{nome}</span>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" size="sm" onClick={onEdit}>Editar</Button>
        <Button variant="destructive" size="sm" onClick={onDelete}>Remover</Button>
      </div>
    </div>
  );
}
