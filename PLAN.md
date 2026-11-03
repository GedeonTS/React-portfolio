# Plan — Nouveau portfolio Ushindi Gedeon

> Statut : **proposition à valider**. Rien n'est encore codé. Relis, corrige, puis je lance la Phase 1.

---

## 0. Ton positionnement (source : ton profil Upwork, lu le 2 nov. 2026)

Ton profil Upwork a changé de cap par rapport à tes anciens portfolios : tu n'es plus « full-stack généraliste » mais **spécialiste identité / authentification pour SaaS**. Le nouveau site doit porter ce message, c'est ce qui te différencie.

- **Titre** : *Auth0 & SSO Engineer for SaaS | OAuth2/OIDC, SAML | React/Node*
- **Accroche** : *« Broken login, failed SSO, unsafe tokens, or permissions that leak across tenants? I fix identity problems that block SaaS launches and enterprise deals. »*
- **Taux** : 30 $/h · **Consultation** : 50 $ / 30 min (Zoom) · Agence : **Afrinovator**
- **Stats** : 2 jobs · 187 h · note 4,6/5 · actif depuis 2020 · équipes US, Canada, Kenya · anglais + français
- **Offre** : Auth0 (setup, Actions, webhooks, migrations) · login Google/Microsoft/social · SSO entreprise (Okta, Entra ID, SAML) · flux OAuth 2.0 / OIDC · multi-tenant RBAC & isolation · JWT, rotation de refresh tokens, sessions · audits d'auth & bugs en prod · **sécurisation d'apps SaaS générées par IA / « vibe-coded »**
- **Références** : SSO entreprise livré pour un SaaS multi-tenant · 50+ incidents de prod résolus chez Torre · contributions aux releases Tiki Wiki CMS et Cypht
- **Stack** : TypeScript, React, Next.js, Node.js, PHP, Laravel, PostgreSQL, MySQL, AWS, Docker, Auth0 (+ Nuxt, React Native, Rails, Firebase, OpenAI API)
- **Projets portfolio Upwork** (9 au total, 4 visibles sans compte) :
  - **GeekForge Cloud** — espace de travail SaaS avec IA (projets, tâches, réunions, chat avec ses documents) · [geekforge.cloud](https://geekforge.cloud)
  - **Rafiki Stock** — caisse et gestion de stock pour boutiques, en français · [rafikistock.com](https://rafikistock.com) · rôle : Lead Software Engineer & Solutions Architect
  - **MleziCare** — plateforme de garde-malades et de téléconsultation (santé) · [mlezicare.org](https://mlezicare.org)
  - **AI-Powered MIS** — système de gestion avec IA pour écoles, universités et entreprises
- **Avis client** (ReactJS App, 5/5, août 2024) : *« Gedeon is an excellent developer and very easy to work with. He understands the requirement clearly and implement an optimal solution. He completed all the tasks as assigned and did an amazing job! »*

### Ce qu'ajoute LinkedIn (PDF du profil, reçu le 3 nov. 2026)

- **Headline** : *Full-Stack Engineer | Identity Platform Specialist*
- **Résumé** : SaaS scalables et authentification sécurisée : IAM, SSO, RBAC, OAuth, fonctionnalités IA, architecture backend
- **La référence SSO entreprise, c'est Solarion AI** (New York, juin 2024 → nov. 2025, *Sr. Software Engineer & SSO Expert*) : plateforme SaaS multi-tenant React/Node, fédération Google / Azure AD / Okta / SAML, Auth0 Actions/Rules/Hooks, rotation de refresh tokens, interface conversationnelle IA pour documents, microservices et API gateway
- **Evoludata** : toujours en poste (depuis fév. 2024, Montréal). Releases Tiki 26–30 et Cypht, QA, Virtualmin, communauté open source dev.tiki.org
- **Formation** : Microverse (certificat 2022) · University of Helsinki Full Stack Open (2023) · ULK Kigali, génie électrique et électronique (2017–2021)
- **Certifications** : Microverse React & Redux, Ruby on Rails, JavaScript · participation à React Summit 2022
- **Articles** (Medium) : *How to Reach Your Local Server from Anywhere* · *Being a software developer* · *What do you need to know about Rails Controllers?*
- **Liens** : linkedin.com/in/ushindi-gedeon · twitter.com/Gedeon191 · angel.co/u/ushindi-gedeon
- **Localisation** : LinkedIn dit **Kinshasa**, Upwork dit **Goma** → à trancher (§7)

---

## 1. Direction artistique retenue

Je ne prends pas un seul des 4 designs : je les **combine**, chacun pour ce qu'il fait le mieux.

| Inspiration | Ce que je reprends | Où |
|---|---|---|
| **Minimalisme sombre & typo forte** (base) | Fond quasi noir, très grands titres, beaucoup d'espace vide, nav simple, rendu premium | Tout le site — c'est l'ADN visuel |
| **Orienté conversion** (structure) | Services, projets, tarifs, témoignages, CTA « Hire me on Upwork » toujours visible | Ordre des sections de la home |
| **Immersif / éditorial** (animations, avec modération) | Scroll fluide, apparitions progressives, titres qui se révèlent mot par mot, transitions de pages | Hero, transitions, révélations au scroll |
| **Dark avec structure complète** (pages) | Pages projets détaillées (case studies), FAQ, contact complet | Pages `/work/:slug`, section FAQ |

Pas de blog pour l'instant (sans articles, une page blog vide fait plus de mal que de bien). On garde un lien vers ton Medium.

**Objectif n°1 du site : décrocher des missions (Upwork + clients directs).** Chaque section doit pousser vers un contact.

### Identité visuelle

- **Couleurs**
  - Fond `#0A0A0B` · Surface `#141416` · Bordures `#232327`
  - Texte `#F2F2F0` · Texte secondaire `#8A8A93`
  - **Accent unique** : un vert acide `#C6FF3D` (rappel discret du vert de ton ancien timeline, mais plus moderne). Utilisé avec parcimonie : CTA, soulignés, curseur, chiffres clés.
- **Typographie**
  - Titres : **Clash Display** ou **Space Grotesk** (grasse, très grande, `clamp(3rem, 10vw, 9rem)` pour le hero)
  - Texte : **Inter**
  - Détails / labels : **JetBrains Mono** (petites étiquettes type `01 — SERVICES`, clin d'œil dev)
- **Texture** : léger grain (noise) en overlay + un halo de lumière accent très flou qui suit la souris dans le hero.
- **Mode clair** : non (le parti pris est dark). Peut s'ajouter plus tard.

---

## 2. Stack technique

On repart **proprement** : l'ancien code CRA (react-scripts) est déprécié et le contenu est surtout du lorem ipsum.

| Besoin | Choix | Pourquoi |
|---|---|---|
| Build | **Vite** + React 18 | CRA est mort, Vite est 10× plus rapide |
| Langage | **TypeScript** | Données projets/expériences typées, moins de bugs |
| Style | **Tailwind CSS** + variables CSS | Rapide, cohérent, tokens de design centralisés |
| Animations UI | **Framer Motion** | Révélations, hover, transitions de pages, layout animations |
| Scroll | **Lenis** | Scroll fluide « cinématographique » |
| Animations scroll avancées | **GSAP + ScrollTrigger** (seulement si nécessaire) | Sections épinglées / scroll narratif |
| Routing | **React Router** | Pages case studies séparées |
| Formulaire | **EmailJS** (déjà utilisé dans ton ancien portfolio) | Pas de backend à gérer |
| Icônes | **react-icons** (déjà installé) / Lucide | |
| Déploiement | Firebase Hosting (comme l'ancien) **ou** Vercel | À toi de choisir |

L'ancien code sera supprimé de `src/` (il reste dans l'historique git). Les assets utiles (`cv.pdf`, photos) sont conservés.

---

## 3. Arborescence du site

```
/                 Home (one-page, sections ci-dessous)
/work             Tous les projets (grille filtrable)
/work/:slug       Case study détaillée d'un projet
/404              Page introuvable stylée
```

### Sections de la Home (dans l'ordre)

**0. Préloader** (≈1,2 s, une seule fois par session)
Compteur 0 → 100 en mono + ton nom qui se révèle, puis rideau qui se lève.

**1. Hero**
- Label mono : `● Available for projects — DR Congo · Remote · EN / FR` (ville à confirmer, §7)
- Titre géant sur 2–3 lignes, révélé mot par mot :
  *« I fix the identity problems that block SaaS launches. »*
- Sous-texte : *Auth0 · SSO · OAuth2/OIDC · SAML — full-stack engineer (React / Node) since 2020.*
- 2 CTA : **Book a 30-min auth review** (accent) · **Hire me on Upwork**
- Petit « terminal » animé à côté du titre qui tape un flux d'auth (`→ /authorize … ✓ id_token verified`) : clin d'œil à ta spécialité
- Photo en noir & blanc avec masque qui s'ouvre, légère parallaxe
- Halo lumineux qui suit la souris, indicateur « scroll » animé

**2. Bandeau défilant (marquee)**
Logos/stack en défilement infini : Auth0 · Okta · Microsoft Entra ID · SAML · OAuth 2.0 · OIDC · React · Next.js · Node.js · TypeScript · Laravel · PostgreSQL · AWS · Docker (ralentit au survol)

**3. Chiffres clés**
Compteurs animés au scroll : **6+ ans** (depuis 2020) · **50+** incidents de prod résolus chez Torre · **3** SaaS construits et exploités · **3 pays** d'équipes clientes (US, Canada, Kenya) · **< quelques heures** de délai de réponse.
*(Je n'affiche pas « 2 jobs Upwork / 4,6 » en gros : c'est vrai mais ça ne vend pas. L'avis 5/5 va dans les témoignages.)*

**4. Services** (`01 — SERVICES`)
4 cartes avec numéro, titre, description, livrables. Au survol : la carte s'éclaire, l'icône tourne, flèche qui glisse.
- **Auth0 & identité** — setup, Actions, webhooks, migrations, login Google / Microsoft / social
- **SSO entreprise** — Okta, Entra ID, SAML, flux OAuth 2.0 / OIDC entre plusieurs apps
- **Multi-tenant & sécurité** — rôles, permissions, isolation des tenants, JWT, rotation de refresh tokens, audits d'auth
- **Full-stack SaaS & « vibe-code rescue »** — rendre prêtes pour la prod les apps générées par IA, bugs en prod, React / Next / Node / Laravel

**5. Projets sélectionnés** (`02 — SELECTED WORK`)
Liste éditoriale grand format (pas une grille de cartes banale) :
- chaque ligne = numéro + titre géant + stack + année
- au survol, une image du projet apparaît et suit le curseur
- clic → page case study avec transition partagée de l'image
- Projets mis en avant : **GeekForge Cloud**, **Rafiki Stock**, **MleziCare**, **Solarion AI — SSO entreprise multi-tenant** (case study phare), **Torre**
- Archives (page `/work` seulement) : AI-Powered MIS, Discourse, Yacht House, Leaderboard

**6. Expérience** (`03 — EXPERIENCE`)
Timeline verticale dont la ligne se « dessine » au scroll, chaque poste apparaît avec le logo :
- **Evoludata** — Software Engineer · fév. 2024 → aujourd'hui · Remote (Montréal) · releases Tiki 26–30 & Cypht, QA, déploiements
- **Solarion AI** — Sr. Software Engineer & SSO Expert · juin 2024 → nov. 2025 · Remote (New York) · SaaS multi-tenant, SSO entreprise, Auth0, IA documentaire
- **Freelance / Afrinovator** — Auth0 & SSO Engineer · GeekForge Cloud, Rafiki Stock, MleziCare
- **Torre** — Software Engineer · avr. → déc. 2023 · Remote (San Francisco) · 50+ bugs de prod, cache, microservices, Docker, tests
- **Microverse** — Mentor & Code Quality Reviewer · nov. 2022 → avr. 2023
- **Co.Lab** — Software Developer · jan. → fév. 2023 · Remote (Seattle) · Node, React, Firebase
- **Uamuzi** — Mobile Software Engineer · sept. 2020 → avr. 2023 · Remote (Nairobi) · React Native, intégrations USSD et messagerie
- Sous la timeline : une ligne **Formation** (Microverse · Helsinki Full Stack Open · ULK) et les **articles Medium** en liens
- Bouton **Télécharger le CV**

**7. Process de travail** (`04 — PROCESS`)
4 étapes épinglées au scroll (scroll narratif) : Découverte → Conception → Développement → Livraison & suivi. Rassure les clients Upwork.

**8. Tarifs / formules** (`05 — PRICING`)
3 cartes, celle du milieu mise en avant :
- **Auth review** — 50 $ / 30 min Zoom (ton offre Upwork actuelle) → idéal premier contact
- **Implémentation** — Auth0 / SSO au forfait, « à partir de… » ou sur devis
- **Taux horaire** — 30 $/h pour bugs, maintenance, renfort d'équipe
*→ À valider : afficher 30 $/h tel quel ? (c'est bas pour une niche SSO ; tu peux vouloir « sur devis »).*

**9. Témoignages** (`06 — TESTIMONIALS`)
Avis clients **réels** uniquement. Pour l'instant un seul public : l'avis 5/5 « ReactJS App » (août 2024). Avec 1 avis, je fais une grande citation éditoriale plutôt qu'un carrousel ; le carrousel arrive dès qu'il y en a 3+.
*→ Les avis actuels du repo sont faux (lorem ipsum + noms inventés) : supprimés. Si tu as des recommandations LinkedIn ou des retours d'anciens collègues (Torre, Evoludata…), envoie-les.*

**10. FAQ** (`07 — FAQ`)
Accordéon animé : disponibilité, fuseau horaire, délais, outils de communication, façon de facturer, révisions…

**11. CTA final + Contact** (`08 — CONTACT`)
- Titre géant : *« Let's build something great. »* avec effet magnétique sur le bouton
- Formulaire (nom, email, budget, type de projet, message) via EmailJS, états chargement / succès / erreur animés (pas d'`alert()`)
- Email, WhatsApp/téléphone, localisation, horaires dispo

**12. Footer**
Liens : LinkedIn, GitHub, Upwork, Medium, Wellfound, Instagram · heure locale de Goma en direct · « back to top ».

### Page case study `/work/:slug`
Hero image plein écran · rôle · client · durée · stack · lien live · **Problème → Solution → Résultat** · galerie d'images · projet suivant (transition).

---

## 4. Catalogue d'animations

Principe : **lentes, douces, au service de la lecture.** Aucune animation ne bloque le contenu.

| Animation | Où | Technique |
|---|---|---|
| Préloader compteur + rideau | Arrivée | Framer Motion |
| Révélation des titres mot par mot / ligne par ligne (masque) | Tous les titres | Framer Motion + `overflow: hidden` |
| Fade + translate au scroll | Paragraphes, cartes | `whileInView` |
| Scroll fluide | Global | Lenis |
| Curseur personnalisé (point + cercle, grossit sur les liens, affiche « View » sur les projets) | Desktop uniquement | Framer Motion springs |
| Boutons magnétiques | CTA | Framer Motion |
| Image qui suit le curseur | Liste projets | Framer Motion |
| Marquee infini | Stack, témoignages | CSS + Framer |
| Compteurs animés | Chiffres clés | Framer `useInView` |
| Ligne de timeline qui se dessine | Expérience | `useScroll` + `scaleY` |
| Section épinglée (process) | Process | GSAP ScrollTrigger ou `position: sticky` |
| Transitions de pages + image partagée | Home ↔ case study | `AnimatePresence` + `layoutId` |
| Halo lumineux suivant la souris | Hero | CSS vars + `pointermove` |
| Nav qui se cache au scroll down / revient au scroll up | Header | Framer |
| Menu mobile plein écran animé | Mobile | Framer |

**Accessibilité / perf :**
- `prefers-reduced-motion` respecté partout (animations remplacées par de simples fondus)
- Curseur custom et halo désactivés sur tactile
- Images en WebP/AVIF, lazy loading, objectif **Lighthouse ≥ 90** partout
- Contrastes AA, navigation clavier, focus visibles

---

## 5. Organisation du code

```
src/
  main.tsx, App.tsx, router.tsx
  styles/          globals.css (tokens, fonts, grain)
  data/            profile.ts, services.ts, projects.ts, experience.ts,
                   testimonials.ts, faq.ts, pricing.ts   ← tout le contenu ici
  components/
    ui/            Button, MagneticButton, SectionLabel, RevealText,
                   Counter, Marquee, Accordion, Cursor, Preloader
    layout/        Navbar, MobileMenu, Footer, SmoothScroll, PageTransition
  sections/        Hero, Stats, Services, SelectedWork, Experience,
                   Process, Pricing, Testimonials, FAQ, Contact
  pages/           Home, Work, CaseStudy, NotFound
  hooks/           useMousePosition, useReducedMotion, useLocalTime
  assets/          images, logos, cv.pdf
```

Tout le texte vit dans `src/data/` → tu pourras modifier ton contenu sans toucher aux composants.

---

## 6. Phases de réalisation

| Phase | Contenu | Livrable |
|---|---|---|
| **1. Fondations** | Migration CRA → Vite + TS + Tailwind, tokens de design, polices, Lenis, layout, navbar, footer, curseur | Squelette navigable |
| **2. Hero & identité** | Préloader, hero animé, marquee, chiffres clés | Première impression finalisée |
| **3. Contenu conversion** | Services, projets sélectionnés, expérience, process, tarifs | Home complète à ~80 % |
| **4. Preuve sociale & contact** | Témoignages, FAQ, formulaire EmailJS | Home complète |
| **5. Pages projets** | `/work`, `/work/:slug`, transitions de pages, 404 | Site multi-pages |
| **6. Finitions** | Responsive mobile, reduced-motion, SEO (meta, Open Graph, sitemap), perf Lighthouse, favicon | Prêt à déployer |
| **7. Déploiement** | Firebase ou Vercel + domaine | Site en ligne |

Je travaillerai sur une branche `redesign` et je te montrerai des captures après chaque phase.

---

## 7. Ce dont j'ai besoin de toi

✅ **Upwork** : lu (voir §0). Il manque les 5 projets du portfolio visibles seulement avec un compte : si tu veux les voir sur le site, donne-moi leurs titres et descriptions.

✅ **LinkedIn** : lu via ton PDF (voir §0).

1. **Solarion AI** : est-ce que je peux nommer l'entreprise et décrire le projet publiquement (NDA) ? Des captures ou un schéma d'architecture ?
2. **Localisation** affichée : Kinshasa ou Goma ? Et quel numéro de téléphone / WhatsApp (le +250 rwandais du PDF) ?
3. **Photo** de bonne qualité (portrait, fond neutre de préférence) — sinon je réutilise `me.png`
4. **Captures d'écran** des projets à mettre en avant (3 à 6) et pour chacun : ton rôle, le problème, ce que tu as fait, un résultat chiffré si possible
5. **Tarifs** : afficher des prix ou non ?
6. **CV** à jour (`cv.pdf` actuel date de 2022)
7. **Langue du site** : anglais seul (recommandé pour Upwork), ou anglais + français ?
8. **Hébergement** : Firebase (comme avant) ou Vercel ?
9. Clés **EmailJS** (je les mettrai dans `.env`, jamais dans le code)
