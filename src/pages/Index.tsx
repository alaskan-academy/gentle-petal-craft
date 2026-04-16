import { useState } from "react";
import { Check, X, Lock, Zap, Smartphone, ChevronDown, Flame } from "lucide-react";
import heroImg from "@/assets/hero-buque.webp";
import lauraImg from "@/assets/laura.webp";
import processoImg from "@/assets/processo.webp";
import workshopVideoImg from "@/assets/workshop-video.webp";

const CHECKOUT_URL = "#checkout";

const CTA = ({ children = "Quero meu lugar agora →" }: { children?: React.ReactNode }) => (
  <a href={CHECKOUT_URL} className="btn-cta">
    {children}
  </a>
);

const Faq = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-semibold text-foreground">{q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="mt-3 text-muted-foreground leading-relaxed animate-fade-in">{a}</p>}
    </div>
  );
};

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="section pt-10 sm:pt-16" style={{ background: "var(--gradient-soft)" }}>
        <div className="container-narrow text-center animate-fade-in">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Flame className="h-4 w-4" /> Workshop de Velas
          </span>
          <h1 className="mt-6 font-serif text-3xl sm:text-5xl font-bold leading-tight">
            Como montar um buquê de velas em menos de 2 horas — mesmo sem nunca ter feito uma vela
          </h1>
          <p className="mt-5 text-lg text-muted-foreground">
            A maior professora do Brasil mostra o passo a passo completo pra você criar, vender e faturar de R$100 a R$300/dia
          </p>

          <div className="mt-8 overflow-hidden rounded-3xl shadow-soft">
            <img
              src={heroImg}
              alt="Buquê de velas artesanais em formato de flores"
              width={1024}
              height={1024}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-8 flex flex-col items-center gap-3">
            <CTA />
            <p className="text-sm text-muted-foreground">
              Apenas <span className="font-semibold text-foreground">R$37</span> — acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="section">
        <div className="container-narrow space-y-5 text-lg leading-relaxed reveal">
          <p>
            Você já viu buquês de velas florais por aí e pensou:{" "}
            <em className="text-primary font-medium">"Eu queria saber fazer isso."</em>
          </p>
          <p className="text-muted-foreground">
            Mas toda vez que tentou entender como, ou achou explicação incompleta, ou ficou com medo de desperdiçar material, ou simplesmente não sabia por onde começar.
          </p>
          <p className="text-muted-foreground">
            E fica adiando. Enquanto isso, outras pessoas vendem esses buquês por <strong className="text-foreground">R$120, R$180, R$250</strong> — em datas como Dia das Mães e Namorados, mal conseguem atender os pedidos.
          </p>
          <p>
            Não é porque elas são mais talentosas. É porque alguém mostrou o caminho certo pra elas.
          </p>
        </div>
      </section>

      {/* QUEM */}
      <section className="section bg-accent/40">
        <div className="container-narrow">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Quem vai te ensinar
          </p>
          <h2 className="mt-2 text-center font-serif text-3xl sm:text-4xl font-bold">
            Laura Martins
          </h2>

          <div className="mt-8 overflow-hidden rounded-3xl shadow-soft">
            <img
              src={lauraImg}
              alt="Laura Martins, professora de velas artesanais"
              loading="lazy"
              width={768}
              height={896}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-8 space-y-4 text-lg leading-relaxed text-muted-foreground reveal">
            <p>
              Laura é reconhecida como a maior professora de artes em velas do Brasil. Ao longo dos anos, ela já ensinou milhares de pessoas — de donas de casa sem nenhuma experiência a empreendedoras que hoje vivem exclusivamente da venda de velas artesanais.
            </p>
            <p>
              O método dela é simples por design. Ela não ensina "arte pela arte" — ela ensina como fazer uma vela que encanta quem vê e que tem alto valor percebido pra vender.
            </p>
            <p className="text-foreground font-medium">
              Esse workshop é a forma mais direta de ter acesso ao que ela sabe.
            </p>
          </div>
        </div>
      </section>

      {/* O QUE VAI APRENDER */}
      <section className="section">
        <div className="container-narrow">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            O que você vai aprender
          </p>
          <h2 className="mt-2 text-center font-serif text-3xl sm:text-4xl font-bold">
            Tudo que você precisa saber pra sair com um buquê pronto
          </h2>

          <div className="mt-8">
            <img
              src={workshopVideoImg}
              alt="Prévia do workshop de buquê de velas"
              loading="lazy"
              className="h-auto w-full"
            />
          </div>

          <ul className="mt-10 space-y-4 reveal">
            {[
              "Como fazer velas em formato de flor que parecem de verdade — mesmo começando do zero",
              "O passo a passo pra criar um buquê completo, bonito e vendável",
              "A técnica exata pra deixar suas velas com acabamento profissional — sem rachaduras ou falhas",
              "O controle de temperatura que faz a diferença entre uma vela comum e uma que encanta à primeira vista",
              "Como criar efeito de margarida com centro realista e rosas com degradê natural",
              "O jeito certo de inserir o palito sem afundar, rachar ou perder a peça",
              "Como montar o buquê com estrutura firme e visual de presente caro",
              "Os erros mais comuns que fazem iniciantes desperdiçarem material — e como evitar todos eles",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 card-soft">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="text-foreground leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <CTA>Quero garantir minha vaga →</CTA>
          </div>
        </div>
      </section>

      {/* BÔNUS / PDF */}
      <section className="section bg-accent/40">
        <div className="container-narrow text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Além da aula</p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold">
            Você também recebe um guia completo pra usar pra sempre
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Um PDF pronto pra imprimir com tudo organizado — pra você nunca mais precisar depender de memória ou tentar adivinhar as medidas certas.
          </p>

          <ul className="mt-8 space-y-3 text-left card-soft reveal">
            {[
              "Passo a passo completo organizado",
              "Lista de materiais com quantidades exatas",
              "Temperaturas certas pra cada etapa",
              "Dicas que evitam bolhas, manchas e acabamento amador",
              "Espaço pra anotar suas próprias combinações",
              "Guia de consulta rápida pra toda produção",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="text-lg leading-none" style={{ color: "hsl(var(--gold))" }}>✦</span>
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RESULTADO */}
      <section className="section">
        <div className="container-narrow">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Resultado prático
          </p>
          <h2 className="mt-2 text-center font-serif text-3xl sm:text-4xl font-bold">
            No final do workshop, você vai ter:
          </h2>

          <div className="mt-8 overflow-hidden rounded-3xl shadow-soft">
            <img
              src={processoImg}
              alt="Mãos modelando uma vela em formato de rosa"
              loading="lazy"
              width={1024}
              height={768}
              className="h-auto w-full object-cover"
            />
          </div>

          <div className="mt-8 grid gap-4 reveal">
            {[
              { e: "🌸", t: "Um buquê pronto", d: "feito por você, com suas mãos, em menos de 2 horas" },
              { e: "💰", t: "Um produto pra vender", d: "alto valor percebido, chama atenção, justifica preço premium" },
              { e: "📅", t: "Uma habilidade pra datas", d: "Dia das Mães, Namorados, Natal — você estará pronta" },
            ].map((b) => (
              <div key={b.t} className="card-soft flex items-start gap-4">
                <span className="text-3xl">{b.e}</span>
                <p className="text-foreground leading-relaxed">
                  <strong>{b.t}</strong> — {b.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* URGÊNCIA */}
      <section className="section bg-primary/5">
        <div className="container-narrow text-center reveal">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            O Dia das Mães está chegando
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Quem aprende hoje ainda tem tempo de produzir, criar estoque e começar a receber pedidos antes das datas mais lucrativas do ano.
          </p>
          <p className="mt-3 text-lg text-foreground font-medium">
            Quem deixar pra depois vai assistir outras pessoas faturando — de novo.
          </p>
          <div className="mt-8 flex justify-center">
            <CTA />
          </div>
        </div>
      </section>

      {/* PRA QUEM É */}
      <section className="section">
        <div className="container-narrow">
          <h2 className="text-center font-serif text-3xl sm:text-4xl font-bold">
            Esse workshop é pra você?
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="card-soft">
              <p className="font-semibold text-primary">✅ Você é a pessoa certa se:</p>
              <ul className="mt-4 space-y-3">
                {[
                  "Nunca fez uma vela na vida e quer começar do jeito certo",
                  "Quer uma habilidade que pode virar renda",
                  "Tem interesse em artesanato com visual profissional",
                  "Quer estar pronta pra Dia das Mães e Namorados",
                  "Está disposta a seguir o passo a passo",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-foreground">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-soft">
              <p className="font-semibold text-destructive">❌ Não é pra você se:</p>
              <ul className="mt-4 space-y-3">
                {[
                  'Você busca um "esquema" pra enriquecer rápido sem fazer nada',
                  "Não tem interesse em aprender uma habilidade manual",
                  "Espera resultados sem colocar a mão na massa",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2 text-muted-foreground">
                    <X className="mt-1 h-4 w-4 shrink-0 text-destructive" strokeWidth={3} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="section bg-accent/40" id="checkout">
        <div className="container-narrow">
          <div className="card-soft text-center" style={{ boxShadow: "var(--shadow-soft)" }}>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold">
              Workshop Buquê de Velas com Laura Martins
            </h2>

            <div className="mt-6 flex items-end justify-center gap-3">
              <span className="text-lg text-muted-foreground line-through">De R$97</span>
              <span className="font-serif text-5xl sm:text-6xl font-bold text-primary">R$37</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Pagamento único · Acesso imediato
            </p>

            <div className="mt-8 rounded-2xl bg-primary/5 p-5 text-left">
              <p className="font-semibold text-foreground">Inclui tudo isso:</p>
              <ul className="mt-3 space-y-2 text-foreground">
                {[
                  "🌸 Aula completa com Laura Martins",
                  "🌸 PDF com passo a passo pra imprimir",
                  "🌸 Lista de materiais com quantidades exatas",
                  "🌸 Guia de temperaturas pra cada etapa",
                  "🌸 Dicas que evitam os erros de iniciante",
                ].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex justify-center">
              <CTA>Garantir minha vaga por R$37 →</CTA>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5"><Lock className="h-4 w-4" /> Pagamento seguro</span>
              <span className="inline-flex items-center gap-1.5"><Zap className="h-4 w-4" /> Acesso imediato</span>
              <span className="inline-flex items-center gap-1.5"><Smartphone className="h-4 w-4" /> Assiste no celular</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-narrow">
          <h2 className="text-center font-serif text-3xl sm:text-4xl font-bold">
            Dúvidas frequentes
          </h2>
          <div className="mt-8">
            {[
              { q: "Precisa ter experiência com velas?", a: "Não. O workshop foi pensado exatamente pra quem nunca fez uma vela na vida. Laura explica cada etapa do zero, com o cuidado de não presumir que você já sabe nada." },
              { q: "Vou precisar de materiais especiais?", a: "Você recebe a lista completa de materiais com quantidades exatas — sem achismo. A maioria dos itens é encontrada em lojas de artesanato comuns ou online." },
              { q: "Quanto tempo leva pra fazer um buquê?", a: "Menos de 2 horas. Esse é um dos diferenciais do método da Laura — ela otimizou o processo pra ser rápido sem perder qualidade." },
              { q: "Consigo mesmo vender esses buquês?", a: "Sim. Buquês de velas artesanais têm altíssimo valor percebido e são muito procurados em datas comemorativas. Quem aprende o acabamento certo consegue cobrar de R$80 a R$250 por unidade." },
              { q: "Por quanto tempo tenho acesso?", a: "Você recebe acesso ao conteúdo do workshop. Além disso, o PDF é seu pra sempre — você pode imprimir e usar em todas as produções futuras." },
              { q: "Posso assistir pelo celular?", a: "Sim. O acesso funciona em qualquer dispositivo — celular, tablet ou computador." },
            ].map((f) => (
              <Faq key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="section" style={{ background: "var(--gradient-soft)" }}>
        <div className="container-narrow text-center reveal">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Em menos de 2 horas, você pode ter um buquê de velas nas mãos.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Por apenas <span className="font-semibold text-foreground">R$37</span>. Uma vez.
          </p>
          <div className="mt-8 flex justify-center">
            <CTA>Quero aprender agora →</CTA>
          </div>
          <p className="mt-5 text-sm text-muted-foreground inline-flex items-center gap-2">
            <Lock className="h-4 w-4" /> Pagamento 100% seguro · Acesso imediato
          </p>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Workshop Buquê de Velas — Laura Martins
      </footer>
    </main>
  );
};

export default Index;
