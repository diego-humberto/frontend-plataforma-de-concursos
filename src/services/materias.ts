import axios from "axios";
import { Materia, Assunto } from "@/models/materia";

  const API_BASE = import.meta.env.VITE_API_URL || "/api";

export async function getMaterias(): Promise<Materia[]> {
  const { data } = await axios.get(`${API_BASE}/materias`);
  return data;
}

export async function createMateria(materia: Partial<Materia>): Promise<Materia> {
  const { data } = await axios.post(`${API_BASE}/materias`, materia);
  return data;
}

export async function updateMateria(id: number, materia: Partial<Materia>): Promise<Materia> {
  const { data } = await axios.put(`${API_BASE}/materias/${id}`, materia);
  return data;
}

export async function deleteMateria(id: number): Promise<void> {
  await axios.delete(`${API_BASE}/materias/${id}`);
}

// Assuntos
export async function createAssunto(materiaId: number, assunto: Partial<Assunto>): Promise<Assunto> {
  const { data } = await axios.post(`${API_BASE}/materias/${materiaId}/assuntos`, assunto);
  return data;
}

export async function updateAssunto(materiaId: number, assuntoId: number, assunto: Partial<Assunto>): Promise<Assunto> {
  const { data } = await axios.put(`${API_BASE}/materias/${materiaId}/assuntos/${assuntoId}`, assunto);
  return data;
}

export async function deleteAssunto(materiaId: number, assuntoId: number): Promise<void> {
  await axios.delete(`${API_BASE}/materias/${materiaId}/assuntos/${assuntoId}`);
}

// Upload de PDF
export async function uploadPdf(materiaId: number, assuntoId: number, file: File): Promise<string> {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await axios.post(`${API_BASE}/materias/${materiaId}/assuntos/${assuntoId}/pdfs`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return data.url; // espera-se que o backend retorne a URL do PDF
} 