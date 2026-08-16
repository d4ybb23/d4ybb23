/**
 * Signal Room design reminder: preserve the restrained, evidence-first prospect briefing
 * experience. This is an independent Evolve Human research draft, not a BuildOps website.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Epsilon3 from "./pages/Epsilon3";
import Home from "./pages/Home";
import Pirros from "./pages/Pirros";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pirros" component={Pirros} />
      <Route path="/epsilon3" component={Epsilon3} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
