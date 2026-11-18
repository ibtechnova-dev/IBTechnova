import { Ruler, Bot, LayoutDashboard, Sparkles, Globe, Cloud } from "lucide-react";

const ICONS = { Ruler, Bot, LayoutDashboard, Sparkles, Globe, Cloud };

export default function ServiceIcon({ name, className }) {
  const Icon = ICONS[name] || Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
