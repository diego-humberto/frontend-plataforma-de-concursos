import Header from "@/components/header";
import CoursePage from "@/pages/course";

import HomeScreen from "@/pages/home";

import SettingsPage from "@/pages/settings";
import { ThemeProvider } from "@/components/theme-provider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import CoursesPage from "@/pages/courses";
import Footer from "@/components/footer";
import PosEditalPage from "@/pages/pos-edital";

type Props = {};

export default function Router({}: Props) {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <Header />
        <Toaster
          position="bottom-right"
          richColors
          expand={false}
          visibleToasts={1}
        />
      </ThemeProvider>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cursos/:courseId" element={<CoursePage />} />
          <Route path="/configuracoes" element={<SettingsPage />} />
          <Route path="/cursos" element={<CoursesPage />} />
          <Route path="/pos-edital" element={<PosEditalPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
