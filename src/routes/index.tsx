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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ninho do Chico — Criação de aves ornamentais" },
      {
        name: "description",
        content:
          "Ninho do Chico: criação responsável de aves ornamentais. Conheça nossas espécies e adquira a sua pelo WhatsApp.",
      },
      { property: "og:title", content: "Ninho do Chico" },
      {
        property: "og:description",
        content: "Criação responsável de aves ornamentais.",
      },
    ],
  }),
  component: Index,
});

const WHATSAPP = "5511999999999";

type BirdItem = {
  name: string;
  scientific: string;
  price: string;
  image: string;
  origin: string;
  size: string;
  diet: string;
  description: string;
};

const birds: BirdItem[] = [
  {
    name: "Canário-belga",
    scientific: "Serinus canaria domestica",
    price: "R$ 350",
    image:
      "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=900&q=80",
    origin: "Bélgica",
    size: "14 cm",
    diet: "Sementes e frutas",
    description:
      "Conhecido pelo canto melodioso e penas amareladas vibrantes, é uma das aves mais queridas para criação doméstica.",
  },
  {
    name: "Calopsita",
    scientific: "Nymphicus hollandicus",
    price: "R$ 280",
    image:
      "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&w=900&q=80",
    origin: "Austrália",
    size: "32 cm",
    diet: "Sementes, frutas e legumes",
    description:
      "Dócil, sociável e fácil de domesticar. Aprende a assobiar músicas e imitar pequenos sons.",
  },
  {
    name: "Periquito Australiano",
    scientific: "Melopsittacus undulatus",
    price: "R$ 90",
    image:
      "https://images.unsplash.com/photo-1606225838393-fa92ed742fcc?auto=format&fit=crop&w=900&q=80",
    origin: "Austrália",
    size: "18 cm",
    diet: "Sementes e folhas verdes",
    description:
      "Colorido e ativo, ótimo para iniciantes. Vive bem em casal e tem grande variedade de cores.",
  },
  {
    name: "Diamante-mandarim",
    scientific: "Taeniopygia guttata",
    price: "R$ 120",
    image:
      "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?auto=format&fit=crop&w=900&q=80",
    origin: "Austrália",
    size: "10 cm",
    diet: "Sementes pequenas",
    description:
      "Pequeno, alegre e de canto suave. Ideal para viveiros comunitários com outras aves pacíficas.",
  },
  {
    name: "Agapornis",
    scientific: "Agapornis roseicollis",
    price: "R$ 320",
    image:
      "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=900&q=80",
    origin: "África",
    size: "16 cm",
    diet: "Sementes, frutas e vegetais",
    description:
      "Conhecido como 'pássaro do amor' pela forte ligação com o parceiro. Inteligente e brincalhão.",
  },
  {
    name: "Trinca-ferro",
    scientific: "Saltator similis",
    price: "R$ 600",
    image:
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=900&q=80",
    origin: "Brasil",
    size: "20 cm",
    diet: "Frutas, sementes e insetos",
    description:
      "Ave nativa brasileira famosa pelo canto forte e variado. Criação com anilha e documentação IBAMA.",
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
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Bird className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-semibold">Ninho do Chico</p>
              <p className="text-xs text-muted-foreground">Aves ornamentais</p>
            </div>
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
              Conheça as aves ornamentais criadas com carinho no Ninho do Chico.
              Cada ave é entregue saudável, anilhada e pronta para alegrar o seu lar.
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
              <p className="text-2xl font-bold text-primary">{birds.length}+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Birds */}
      <section id="aves" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Nossas aves</h2>
            <p className="mt-2 text-muted-foreground">
              Clique em qualquer ave para ver detalhes e comprar.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {birds.map((bird) => (
            <button
              key={bird.name}
              onClick={() => setSelected(bird)}
              className="group overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
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
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                    {bird.price}
                  </span>
                </div>
                <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">
                  {bird.description}
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
              O Ninho do Chico nasceu do amor pelas aves. Há mais de 15 anos
              cuidamos da criação ética de espécies ornamentais, com viveiros
              espaçosos, alimentação natural e acompanhamento veterinário.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Leaf className="h-4 w-4 text-primary" /> Aves anilhadas e legalizadas
              </li>
              <li className="flex items-center gap-3">
                <Leaf className="h-4 w-4 text-primary" /> Garantia de saúde de 30 dias
              </li>
              <li className="flex items-center gap-3">
                <Leaf className="h-4 w-4 text-primary" /> Suporte para iniciantes
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
            <Phone className="h-4 w-4" /> (11) 99999-9999
          </span>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Interior de SP
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
        <DialogContent className="max-w-lg overflow-hidden p-0">
          {selected && (
            <>
              <div className="aspect-[16/10] w-full overflow-hidden">
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

                <dl className="mt-5 grid grid-cols-3 gap-3 text-sm">
                  <div className="rounded-lg bg-secondary p-3">
                    <dt className="text-xs text-muted-foreground">Origem</dt>
                    <dd className="font-medium">{selected.origin}</dd>
                  </div>
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
