import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Bird, Leaf, MessageCircle, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import ringNeckVerde from "@/assets/ring-neck-verde.jpg";
import ringNeckAzul from "@/assets/ring-neck-azul.jpg";
import ringNeckAmarelo from "@/assets/ring-neck-amarelo.jpg";
import calopsita from "@/assets/calopsita.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ninho do Chico — Criação de aves" },
      {
        name: "description",
        content:
          "Ninho do Chico: conheça nossos Ring Necks e Calopsitas e adquira a sua ave pelo WhatsApp.",
      },
      { property: "og:title", content: "Ninho do Chico" },
      {
        property: "og:description",
        content: "Criação responsável de Ring Necks e Calopsitas.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "5516991993911";
const WHATSAPP_DISPLAY = "(16) 99199-3911";

type BirdItem = {
  name: string;
  scientific: string;
  price: string;
  image: string;
  size: string;
  diet: string;
  description: string;
};

const birds: BirdItem[] = [
  {
    name: "Ring Neck Verde",
    scientific: "Psittacula krameri",
    price: "R$ 1.200",
    image: ringNeckVerde,
    size: "40 cm",
    diet: "Sementes, frutas e legumes",
    description:
      "O Ring Neck verde é a coloração clássica da espécie. Inteligente, sociável e capaz de aprender a falar, é uma das aves mais procuradas para companhia.",
  },
  {
    name: "Ring Neck Azul",
    scientific: "Psittacula krameri",
    price: "R$ 1.800",
    image: ringNeckAzul,
    size: "40 cm",
    diet: "Sementes, frutas e legumes",
    description:
      "Mutação azul do Ring Neck, com plumagem suave e elegante. Mesma personalidade brincalhona e curiosa do tradicional, com um visual exclusivo.",
  },
  {
    name: "Ring Neck Amarelo",
    scientific: "Psittacula krameri",
    price: "R$ 2.000",
    image: ringNeckAmarelo,
    size: "40 cm",
    diet: "Sementes, frutas e legumes",
    description:
      "Conhecido como Lutino, o Ring Neck amarelo encanta pela cor vibrante. Dócil quando bem socializado e ótimo companheiro do dia a dia.",
  },
  {
    name: "Calopsita",
    scientific: "Nymphicus hollandicus",
    price: "R$ 280",
    image: calopsita,
    size: "32 cm",
    diet: "Sementes, frutas e legumes",
    description:
      "Dócil, sociável e fácil de domesticar. Aprende a assobiar músicas e imitar pequenos sons — ideal para quem está começando.",
  },
];

function Index() {
  const [selected, setSelected] = useState<BirdItem | null>(null);

  const buyLink = (bird: BirdItem) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      `Olá! Tenho interesse em comprar a ave: ${bird.name} (${bird.price}).`,
    )}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Bird className="h-5 w-5" />
            </div>
            <p className="text-xl font-extrabold tracking-tight">Ninho do Chico</p>
          </div>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#aves" className="hover:text-primary">Aves</a>
            <a href="#sobre" className="hover:text-primary">Sobre</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
            <Button size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary via-background to-accent/40" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Leaf className="h-3.5 w-3.5" /> Criação responsável e legalizada
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              O ninho certo para a sua nova{" "}
              <span className="text-primary">companhia</span>.
            </h1>
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              Ring Necks nas cores verde, azul e amarelo e Calopsitas criadas com
              carinho. Cada ave é entregue saudável, anilhada e pronta para alegrar
              o seu lar.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#aves">
                <Button size="lg" className="gap-2">
                  <Bird className="h-4 w-4" /> Ver aves disponíveis
                </Button>
              </a>
              <a href="#sobre">
                <Button size="lg" variant="outline">
                  Saiba mais
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-3xl border border-border shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1200&q=80"
                alt="Ave colorida em galho"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card p-4 shadow-lg md:block">
              <p className="text-xs text-muted-foreground">Espécies disponíveis</p>
              <p className="text-2xl font-bold text-primary">{birds.length}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Birds */}
      <section id="aves" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl font-bold md:text-4xl">Nossas aves</h2>
          <p className="mt-2 text-muted-foreground">
            Clique em qualquer ave para ver detalhes e comprar.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {birds.map((bird) => (
            <button
              key={bird.name}
              onClick={() => setSelected(bird)}
              className="group overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={bird.image}
                  alt={bird.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{bird.name}</h3>
                    <p className="text-xs italic text-muted-foreground">
                      {bird.scientific}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm font-semibold text-primary">
                  {bird.price}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-secondary/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="aspect-video overflow-hidden rounded-3xl border border-border">
            <img
              src="https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80"
              alt="Aves no viveiro"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Sobre o Ninho</h2>
            <p className="mt-4 text-muted-foreground">
              O Ninho do Chico nasceu do amor pelas aves. Cuidamos da criação
              ética com viveiros espaçosos, alimentação natural e acompanhamento
              veterinário, para que cada ave chegue saudável e feliz na sua casa.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Leaf className="h-4 w-4 text-primary" /> Aves anilhadas e legalizadas
              </li>
              <li className="flex items-center gap-3">
                <Leaf className="h-4 w-4 text-primary" /> Alimentação natural e balanceada
              </li>
              <li className="flex items-center gap-3">
                <Leaf className="h-4 w-4 text-primary" /> Entrega em mãos na região
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Fale com a gente</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Tire dúvidas, agende uma visita ao viveiro ou peça orientações sobre
          a ave ideal para você.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">
            <Button size="lg" className="gap-2">
              <MessageCircle className="h-4 w-4" /> Chamar no WhatsApp
            </Button>
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" /> {WHATSAPP_DISPLAY}
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Ribeirão Preto - SP
          </span>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-2">
          <Bird className="h-4 w-4 text-primary" />
          Ninho do Chico © {new Date().getFullYear()}
        </div>
      </footer>

      {/* Modal */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-3xl overflow-hidden p-0">
          {selected && (
            <>
              <div className="aspect-[4/3] w-full overflow-hidden bg-muted sm:aspect-[16/10]">
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selected.name}</DialogTitle>
                  <DialogDescription className="italic">
                    {selected.scientific}
                  </DialogDescription>
                </DialogHeader>

                <p className="mt-3 text-sm text-muted-foreground">
                  {selected.description}
                </p>

                <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-lg bg-secondary p-3">
                    <dt className="text-xs text-muted-foreground">Tamanho</dt>
                    <dd className="font-medium">{selected.size}</dd>
                  </div>
                  <div className="rounded-lg bg-secondary p-3">
                    <dt className="text-xs text-muted-foreground">Dieta</dt>
                    <dd className="font-medium">{selected.diet}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {selected.price}
                  </span>
                  <a
                    href={buyLink(selected)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button size="lg" className="gap-2">
                      <MessageCircle className="h-4 w-4" /> Comprar no WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
