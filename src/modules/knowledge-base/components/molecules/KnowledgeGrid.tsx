import { knowledgeCards } from "../../data/knowledge";
import KnowledgeCard from "./KnowledgeCard";

export default function KnowledgeGrid() {
  return (
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
      {knowledgeCards.map((card) => (
        <KnowledgeCard key={card.id} {...card} />
      ))}
    </div>
  );
}
