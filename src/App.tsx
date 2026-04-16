import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Ecossistema from "./pages/Ecossistema.tsx";
import Eventos from "./pages/Eventos.tsx";
import Varejo from "./pages/Varejo.tsx";
import Tecnologia from "./pages/Tecnologia.tsx";
import Investidor from "./pages/Investidor.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ecossistema" element={<Ecossistema />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/varejo" element={<Varejo />} />
          <Route path="/tecnologia" element={<Tecnologia />} />
          <Route path="/investidor" element={<Investidor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
