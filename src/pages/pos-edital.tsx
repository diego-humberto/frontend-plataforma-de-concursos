import { useEffect, useState } from "react";
import { Materia } from "@/models/materia";
import { getMaterias, createMateria } from "@/services/materias";
import AddMateriaForm from "@/components/pos-edital/AddMateriaForm";
import MateriaCard from "@/components/pos-edital/MateriaCard";
import { Shield, Gavel, BookOpen, BadgeCheck, UserCheck } from "lucide-react";

const ICONES = {
  Shield,
  Gavel,
  BookOpen,
  BadgeCheck,
  UserCheck,
};

export default function PosEditalPage() {
  const [materias, setMaterias] = useState<Materia[]>([]);
  const [loading, setLoading] = useState(false);

  async function carregarMaterias() {
    const lista = await getMaterias();
    setMaterias(lista);
  }

  useEffect(() => {
    carregarMaterias();
  }, []);

  async function handleAddMateria(data: { nome: string; icone: string }) {
    setLoading(true);
    await createMateria({ nome: data.nome, icone: data.icone });
    setLoading(false);
    carregarMaterias();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Pós-edital</h1>
      <AddMateriaForm onSubmit={handleAddMateria} loading={loading} />
      <div className="mt-6">
        {materias.map((materia) => {
          const Icone = ICONES[materia.icone as keyof typeof ICONES] || Shield;
          return (
            <MateriaCard
              key={materia.id}
              nome={materia.nome}
              Icone={Icone}
              onEdit={() => {}}
              onDelete={() => {}}
              onExpand={() => {}}
            />
          );
        })}
      </div>
    </div>
  );
} 