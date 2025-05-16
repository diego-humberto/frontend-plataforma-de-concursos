import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Gavel, BookOpen, BadgeCheck, UserCheck } from "lucide-react";
import { useState } from "react";

const ICONES = [
  { nome: "Shield", componente: Shield },
  { nome: "Gavel", componente: Gavel },
  { nome: "BookOpen", componente: BookOpen },
  { nome: "BadgeCheck", componente: BadgeCheck },
  { nome: "UserCheck", componente: UserCheck },
];

interface FormData {
  nome: string;
  icone: string;
}

interface AddMateriaFormProps {
  onSubmit: (data: FormData) => void;
  loading?: boolean;
}

export default function AddMateriaForm({ onSubmit, loading }: AddMateriaFormProps) {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [iconeSelecionado, setIconeSelecionado] = useState("Shield");

  function handleFormSubmit(data: FormData) {
    onSubmit({ ...data, icone: iconeSelecionado });
    reset();
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-4 p-4 bg-white dark:bg-neutral-900 rounded shadow mb-4">
      <label className="font-semibold">Nome da Matéria</label>
      <Input {...register("nome", { required: true })} placeholder="Ex: Direito Penal" />
      <label className="font-semibold">Ícone</label>
      <div className="flex gap-3 mb-2">
        {ICONES.map((icone) => {
          const IconeComp = icone.componente;
          return (
            <button
              type="button"
              key={icone.nome}
              className={`p-2 rounded border ${iconeSelecionado === icone.nome ? "border-blue-600 bg-blue-100 dark:bg-blue-900" : "border-gray-300"}`}
              onClick={() => setIconeSelecionado(icone.nome)}
            >
              <IconeComp className="w-6 h-6" />
            </button>
          );
        })}
      </div>
      <Button type="submit" disabled={loading}>
        {loading ? "Adicionando..." : "Adicionar Matéria"}
      </Button>
    </form>
  );
}
