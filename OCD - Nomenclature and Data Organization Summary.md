# OCD — Nomenclature and Data Organization
> Knowledge Base: All findings, decisions, research, and recommendations
> Created: May 2026
> Sources: All project files + Local Nomenclature Playbook (v0.2) + External research
> Status: LIVING DOCUMENT — append, never delete

---

**Contents**
- [Part I: What OCD Has Already Decided](#part-i-what-ocd-has-already-decided) — Internal naming decisions extracted from the codebase and design docs
- [Part II: The Local Nomenclature Playbook](#part-ii-the-local-nomenclature-playbook) — Summary and full state of the external naming system (v0.2)
- [Part III: External Research — Naming Systems](#part-iii-external-research--naming-systems) — What the world has learned about naming things
- [Part IV: Synthesis and Insights](#part-iv-synthesis-and-insights) — Where OCD and the Playbook intersect, tensions, and recommendations
- [Part V: Pending Decisions](#part-v-pending-decisions) — Open questions that require a decision before action

---

## Part I: What OCD Has Already Decided

*This section extracts every naming decision already embedded in the OCD project — schemas, enums, field names, entity names, status vocabularies. These are NOT proposals. They are existing commitments recorded here for the first time in a single place.*

---

## Part II: The Local Nomenclature Playbook

*This section summarizes the state of the nomenclature playbook as of v0.2 (May 5, 2026). The playbook governs how ALL external entities are named — companies, projects, applications, infrastructure, and meta artifacts.*

### 2.1 The Core Principle

> **Deterministic Clarity.** Names must be immediately obvious to any human who reads them for the first time, with zero context, in any decade.

**The Cold Open Test:** If someone sees this name for the first time with zero context, can they determine: (a) what kind of thing it is, (b) which entity it belongs to, (c) what it does? If any answer is no, the name fails.

### 2.2 The Nine Rules

| # | Rule | In One Line |
|---|---|---|
| 1 | **All lowercase, hyphens only, ASCII only** | `puerta-abierta` not `PuertaAbierta` or `puerta_abierta` |
| 2 | **Composable atoms, not creative names** | Assemble from the registry vocabulary. Never invent. |
| 3 | **Bigger taxons first** | `comp-orion-tech` not `tech-orion-comp`. What-it-is comes before what-it-belongs-to. |
| 4 | **Max 4 segments** | `[prefix]-[entity]-[scope]-[qualifier]`. More specificity goes in registry metadata. |
| 5 | **Never put version in the name** | `app-refill` forever. Version lives in branches and env vars. |
| 6 | **Immutable identifiers, mutable display names** | `comp-hcs` never changes even if Hope Coffee Source rebrands. |
| 7 | **Cross-system consistency** | Same slug works in GitHub, Supabase, Vercel, Plane.so, Odoo, DNS, ENV vars. |
| 8 | **Never Null** | No entity can be created without a slug from the Registry. |
| 9 | **Date-forwarding for time-bound entities** | `proj-benestare-2026` only if multiple Benestares will exist. Permanent entities: no date. |

### 2.3 The Prefix Vocabulary (v0.2)

| Prefix | Meaning | Examples |
|---|---|---|
| `comp-` | Company / legal entity | `comp-orion`, `comp-puerta-abierta`, `comp-aid` |
| `proj-` | Project / bounded initiative | `proj-benestare`, `proj-boulevard-5` |
| `app-` | Deployed software application | `app-pai`, `app-refill`, `app-ingepro` |
| `mod-` | Module within a larger application | `mod-pai-comisiones`, `mod-pai-asesores` |
| `infra-` | DevOps, deployment, CI/CD, shared services | `infra-orion-monorepo`, `infra-orion-odoo` |
| `meta-` | Tooling, docs, playbooks — things about the system | `meta-nomenclature-playbook`, `meta-portfolio` |
| `exp-` | Experiment / throwaway / spike | `exp-auth-test`, `exp-jl-poc` |
| `data-` | Dataset, data pipeline, data source | `data-pai-exports`, `data-refill-forecast` |
| `content-` | Content outlet, channel, publication | `content-linkedin`, `content-youtube` |

**Known gap:** Prefixes do not yet cover learning/education, health, finance, or personal life domains. See Part V (Pending Decisions).

### 2.4 Registry Entry Structure

Every entity in the registry has these fields:

| Field | Required? | Purpose |
|---|---|---|
| `display_name` | YES | Human-readable. Mutable. |
| `legal_name` | YES | Human-readable. Mutable. |
| `type` | YES | Entity kind (holding, company, client, real-estate, etc.) |
| `description` | YES | One sentence, written for a reader with zero context. |
| `parent` | If applicable | Hierarchical (tree) relationship — who this belongs to |
| `related` | RECOMMENDED | Lateral links (web) — not parent-child but contextually connected. Inspired by Zettelkasten. |
| `tags` | RECOMMENDED | Cross-cutting concerns that don't fit the tree. Queryable across all entries. |
| `status` | YES | Current state |
| `notes` | If needed | Additional context |
| `created` | YES | Date slug was added to registry |

**Key design decision:** The registry stores both **tree relationships** (`parent`) and **web relationships** (`related`). This is a deliberate architectural choice inspired by the Zettelkasten method — the links between things are as valuable as the things themselves.

### 2.5 Status Vocabulary (Registry)

| Status | Meaning |
|---|---|
| `active` | Live and in use |
| `production` | Deployed, serving users |
| `production-degraded` | Deployed but with known issues |
| `planned` | Decided, not yet started |
| `in-progress` | Under active development |
| `scaffolded` | Structure created, not yet functional |
| `standby` | Built, paused, not yet deployed |
| `blocked` | Cannot progress — external dependency |
| `dormant` | Inactive but not deprecated |
| `deprecated` | Superseded — scheduled for retirement |
| `draft` | Document/plan under review |
| `incomplete` | Partially built, unclear path forward |
| `unknown` | Status unknown — needs investigation |

### 2.6 Plane.so Identifier Convention

Plane.so identifiers are derived from the slug: last meaningful segment(s), max 5 chars, UPPERCASE.

| Slug | Plane.so ID |
|---|---|
| `app-pai` | `PAI` |
| `app-anatomos` | `ANA` |
| `app-refill` | `REF` |
| `infra-orion-monorepo` | `ORM` |
| `infra-orion-odoo` | `ODO` |
| `meta-nomenclature` | `NOM` |

### 2.7 The 7-Step Naming Procedure

```
Step 1: What kind of thing is it?         → Pick a prefix from §2.3
Step 2: Which entity does it belong to?   → Find or create the entity slug in the Registry
Step 3: What specifically does it do?     → Pick a scope word (short, obvious, English)
Step 4: Assemble: [prefix]-[entity]-[scope]
Step 5: Run the Cold Open Test
Step 6: Add the slug to the Registry with all metadata fields
Step 7: Use the slug everywhere — GitHub, Supabase, Vercel, Plane.so, Odoo, DNS, ENV
```

---

## Part III: External Research — Naming Systems

*This section synthesizes what the world has learned about naming and organizing information systems, specifically as it applies to this user's situation.*

### 3.1 The Three Sources Referenced in the Playbook Conversation

**Source 1 — Enterprise Cloud Naming (Azure CAF / AWS)**
- Azure Cloud Adoption Framework and AWS naming guides are the most rigorous real-world naming systems for multi-entity environments
- Their three core principles: composable atoms, bigger taxons first, registry as SSOT
- 82% of GitHub repos created post-2016 use kebab-case
- Key lesson: version never goes in the name — it goes in branches, env vars, or tags

**Source 2 — Vesta Playbook (alternative approach)**
- Proposes a numeric VPK (Vesta Primary Key) prefix system inspired by the Dewey Decimal Classification
- DDC assigns numeric ranges to knowledge domains (100s=Philosophy, 600s=Technology, 690s=Construction)
- Advantage: extremely compact, machine-sortable, language-agnostic
- Disadvantage: cryptic to anyone who hasn't memorized the range map. Fails the Cold Open Test for new team members.
- Conclusion (already made in the conversation): **kebab-case text prefixes win** because they pass the ethical duty test — readable by any human, in any decade, with zero training. Numeric systems are clever for the creator and cryptic for the successor.

**Source 3 — Zettelkasten Principle**
- The insight that "the links between things are as valuable as the things themselves" — what inspired the `related` field in the registry
- Niklas Luhmann's system: atomic notes with unique IDs, connected through bidirectional links. The connections form an emergent knowledge graph.
- Applied to the registry: `related` captures lateral connections that the parent-child tree cannot express. `app-refill` and `app-anatomos` are siblings in the tree but closely related by function — that relationship is captured in `related`, not `parent`.

### 3.2 Personal Knowledge Management Systems

**PARA (Tiago Forte, 2017)**
Organizes all information by actionability:
- **Projects** — has a deadline, has tasks, will end
- **Areas** — ongoing responsibility, no end date (health, finances, relationships)
- **Resources** — topics of interest, reference material
- **Archives** — inactive items from the above

*Relevance to OCD:* PARA is philosophically aligned with OCD's Item → Opus pipeline. OCD's Kanban (Projects), On Hold (Areas), Compendium (Resources), and Cold Storage (Archives) map loosely to PARA's four categories. But OCD is more opinionated: it has rules about what moves where and enforces WIP limits. PARA is a filing framework; OCD is an operating system.

**GTD — Getting Things Done (David Allen, 2001)**
Organizes by action state:
- Inbox → Next Actions → Waiting For → Projects → Someday/Maybe → Reference

*Relevance to OCD:* GTD is the philosophical ancestor of OCD's workflow. The six C-steps (Capture → Clean → Choose → Create → Curate → Critique) are a domain-specific evolution of GTD's five steps (Capture → Clarify → Organize → Reflect → Engage). OCD adds the Corpus integration step (Curate) which GTD lacks — GTD has no concept of a knowledge asset that compounds over time.

**Johnny.Decimal**
Assigns every piece of information a two-part numeric code: `AC.ID` where `A` is the area (10-90), `C` is the category (11-19 within that area), and `ID` is the item.
- Maximum 10 areas, 10 categories per area, theoretically unlimited items
- "Johnny Vigesimal" variant: 20 areas instead of 10 — discussed but not decided for this system

*Relevance to OCD:* Johnny.Decimal is excellent for file system organization. It is too rigid for a corpus that needs to grow organically. The OCD Corpus grows by adding new Opuses; Johnny.Decimal would require pre-allocating a fixed namespace. *Verdict: useful for thinking about hierarchy depth, not useful as the primary system.*

**Library of Congress Classification**
21 top-level classes for ALL human knowledge, developed by the U.S. Congress library system:
- A: General Works, B: Philosophy/Psychology/Religion, C-D: History, G: Geography/Recreation, H: Social Sciences, J: Political Science, K: Law, L: Education, M: Music, N: Fine Arts, P: Language/Literature, Q: Science, R: Medicine, S: Agriculture, T: Technology, U-V: Military/Naval, Z: Bibliography

*Relevance to OCD:* The LoC is the most comprehensive attempt to classify all human knowledge. Its top-level categories reveal which life domains are actually distinct. For a user who is simultaneously an AI developer, a business consultant, an Odoo implementer, and a member of a family with diverse interests, the LoC suggests that domain breadth alone is not a sufficient reason to create separate prefix categories — the structural relationship (what kind of entity) matters more.

### 3.3 Enterprise Naming Conventions

**The ISO 17442 / LEI (Legal Entity Identifier)**
- The international standard for identifying legal entities
- 20-character alphanumeric code: 4-char prefix (issuer) + 14-char entity-specific + 2 check digits
- Immutable once assigned. Entity can die; LEI persists for historical record-keeping.
- *Relevance:* This is the most rigorous implementation of "immutable identifiers, mutable display names." The slug-as-permanent-identifier principle in the playbook is directly inspired by this approach.

**DNS Naming (IETF RFC 1035)**
- Hierarchical: `subdomain.domain.tld` — bigger taxons (TLD) on the right
- Label rules: lowercase, hyphens only (no underscores), ASCII, max 63 chars per label
- *Relevance:* The playbook's format rules (`all lowercase, hyphens only, ASCII only`) are directly derived from DNS naming conventions, which have been proven at internet scale.

**Semantic Versioning (SemVer)**
- Version numbers (`2.1.0`) encode meaning: MAJOR.MINOR.PATCH
- The major version is the only signal of breaking change
- *Relevance:* The playbook's "never put version in the name" rule is aligned with SemVer's philosophy that version is metadata, not identity. `app-refill` is the identity; `2.1.0` is the metadata.

### 3.4 The Prefix Length Question

The conversation surfaced a preference for uniform prefix length. The tradeoff analysis:

| Length | Pros | Cons | Examples |
|---|---|---|---|
| 2-char | Ultra-compact, minimal visual noise | Cryptic, fails Cold Open Test | `co-`, `pj-`, `ap-` |
| 3-char | Compact, still readable, most English abbreviations fit | Some abbreviations feel forced | `cmp-`, `prj-`, `app-` |
| 4-char | Most readable, natural English | Some need padding, harder to enforce uniformity | `comp-`, `proj-`, `apps-` |
| Variable | No constraints, maximum clarity | Unequal visual alignment, harder to scan alphabetically | `comp-`, `app-`, `infrastructure-` |

*Current playbook status:* **Variable length** (comp- is 5 chars including hyphen, app- is 4). The user expressed dissatisfaction with this. See Part V, Pending Decision #1.

### 3.5 Activity Theory and Life Domain Classification

ISO 9241 and Activity Theory classify human activity at four levels:
- **Operations** — automatic, habitual actions
- **Actions** — goal-directed steps
- **Activities** — motivated sequences of actions
- **Life Domains** — the areas of life activities belong to (Work, Home, Health, Social, Creative, Civic)

*Relevance to OCD:* The swimlane system (EXPEDITE, PROJECT, HABIT, HOME) maps partially to these life domains. HOME is a life domain. PROJECT and HABIT are activity types. This inconsistency is worth noting — the swimlanes mix domain and type as organizational axes. This may or may not be a problem depending on how filtering is implemented.

---

## Part IV: Synthesis and Insights

*This section contains original analysis and recommendations — where the two naming systems intersect, where they conflict, and what the ideal unified approach looks like.*

### 4.1 The Two Naming Problems Are Different

OCD faces two distinct naming challenges that must not be conflated:

**Problem A: Internal Schema Naming** (code-level, technical)
How OCD names its own data model: fields, enums, status values, agent names. This follows programming conventions (camelCase for fields, UPPERCASE for enums, noun-form for names). Already well-decided — see Part I.

**Problem B: External Entity Naming** (corpus-level, human-facing)
How Opuses and the things they represent are named in the Corpus. This is the nomenclature playbook's domain. Follows the kebab-case, prefix-first convention.

These two problems coexist. `isStrategic` (schema) and `meta-strategy-doc` (slug) can both be valid at the same time because they solve different problems at different abstraction levels.

**Risk:** Confusing these two levels produces systems where the technical identifier and the human-readable identifier fight each other. Keep them separate.

### 4.2 The Recursive Insight

The playbook notes it; it deserves amplification: **this system is recursive**. OCD is a knowledge management system. Its own design, rules, and decisions are knowledge that belongs in the Corpus. The nomenclature playbook is itself an Opus — specifically `meta-nomenclature-playbook`. This document is an Opus — `meta-nomenclature-knowledge-base`.

This means: the moment OCD is running, the first opuses to exist should be the meta opuses — the system's own documentation, filed under its own rules. The system that names things should name itself first.

### 4.3 The Unified Corpus Naming Gap

The nomenclature playbook covers external entities (companies, apps, projects). The OCD Conceptual Foundation defines asset classes (boilerplate, prompts, docs, strategy). But neither document addresses the question: **how are individual Opuses named?**

This is the missing link. A boilerplate Opus for Next.js auth — what is its slug? `tmpl-nextjs-auth`? `app-nextjs-auth-boilerplate`? The playbook's prefix vocabulary doesn't have a `tmpl-` prefix. Neither `app-` nor `meta-` quite fits.

**Recommendation:** Add a `tmpl-` prefix to the vocabulary for reusable templates (boilerplate code, prompt templates, documentation skeletons). This aligns with the three strategic asset classes:
- Boilerplate → `tmpl-[tech]-[function]` (e.g., `tmpl-nextjs-auth`, `tmpl-nextjs-prisma`)
- Prompt templates → `tmpl-[function]-prompt` (e.g., `tmpl-rag-expert-prompt`, `tmpl-agent-filer-prompt`)
- Documentation → `tmpl-[doc-type]` (e.g., `tmpl-handoff-doc`, `tmpl-readme-saas`)

### 4.4 Status Vocabulary Proliferation Problem

Three different status vocabularies currently exist across the project:

1. **Item statuses** (OCD schema): `TODO`, `ON_HOLD`, `COMPENDIUM`, `TRASH`, `CREATING`, `DONE`, `COLD_STORAGE`
2. **Application statuses** (Mid Level Strategy doc): `PROD`, `POC`, `DEV`, `PLANNING`, `V1`, `PROTOTYPE`, `STANDBY`
3. **Registry statuses** (Playbook): `active`, `production`, `planned`, `blocked`, `scaffolded`, `dormant`, `deprecated`, `draft`, `incomplete`, `unclear`, `standby`, `production-degraded`

These three vocabularies partially overlap and use inconsistent casing and terminology (`PROD` vs `production`, `STANDBY` vs `standby`). As OCD grows, these will create confusion when trying to sync the Kanban state of a project with its registry entry.

**Recommendation:** Standardize to two vocabularies with a clear mapping:
- **Corpus/Registry status** (lowercase kebab): the lifecycle state of an external entity — aligned with the playbook
- **Item workflow status** (UPPERCASE): the state of an OCD Item moving through the Kanban — internal to OCD

Create an explicit mapping table between the two so that when an Item transitions to `DONE` and is integrated into a Corpus Opus about an app, the app's registry status can be automatically suggested.

### 4.5 The "Prefix as Swimlane" Parallel

The playbook's prefix system and OCD's swimlane system serve the same cognitive function: they answer "what kind of thing is this?" before the user reads the full name.

- Prefix: `comp-orion` → I know immediately this is a company
- Swimlane: `EXPEDITE` → I know immediately this is urgent

Both are classification systems at the point of intake. Both exist to reduce cognitive overhead. Both need to be exhaustive (covering all possible cases) and mutually exclusive (each thing fits in exactly one category).

This parallel suggests that the same completeness analysis that applies to prefixes also applies to swimlanes. If the prefix vocabulary needs to expand to cover learning, health, and personal life domains, the swimlane vocabulary may need to expand similarly. Currently `HOME` is the catch-all for personal life — but personal life has enough diversity (health, family, finance, learning, creative) that a single swimlane may be too coarse.

### 4.6 The "Never Null" Principle in Both Systems

The playbook's Rule 8 ("No entity can be created without a slug") and OCD's design principle ("Every Item must be assigned to an Opus") are the same principle at different levels. Both prevent orphan records that can never be found or queried against.

This structural parallel suggests a deeper truth: **both systems are fundamentally anti-entropy mechanisms**. Entropy in information systems means things drifting into states where they can't be found, can't be acted on, or can't be understood. Every rule in both systems is a specific countermeasure against a specific form of drift.

### 4.7 The Opus-Registry Synchronization Opportunity

Looking ahead: when OCD is running and managing Opuses, and the Nomenclature Registry is being maintained as a YAML file, these two data stores will drift apart unless there's a mechanism to keep them in sync.

**Near-term (manual):** When a new entity is added to the Registry, the user should also create a corresponding Opus in the Corpus. The Registry slug becomes the Opus name.

**Long-term (automated):** The AI Storer could watch for Registry updates and automatically create blank Opuses for new registry entries. The AI Retriever, when asked about `comp-puerta-abierta`, would pull from the corresponding Opus in the Corpus rather than just the Registry YAML.

This turns the Registry from a static reference file into a living index of the Corpus — which is exactly what the Registry is supposed to be.

---

## Part V: Pending Decisions

*These are open questions that require a decision before action can be taken. Each is documented with the options considered and the relevant tradeoffs.*

### Decision #1: Uniform Prefix Length

**Status:** Open
**Context:** The current playbook uses variable-length prefixes (`comp-` = 5 chars, `app-` = 4 chars, `meta-` = 5 chars, `infra-` = 6 chars, `content-` = 8 chars). The user expressed dissatisfaction with this.

**Options:**
| Option | Pros | Cons |
|---|---|---|
| 3-char all (`cmp-`, `prj-`, `app-`, `mod-`, `inf-`, `met-`, `exp-`, `dat-`, `cnt-`) | Maximum uniformity, easy to scan | Some are cryptic (`cmp-` for company is less obvious than `comp-`) |
| 4-char all (`comp-`, `proj-`, `apps-`, `mods-`, `data-`, `meta-`, `expr-`, `cont-`) | More readable, still uniform | Some plurals or truncations are awkward (`apps-`) |
| Accept variable length | Natural English, maximum clarity | Non-uniform visual scanning, harder to enforce |

**Recommendation:** 4-char standardization is the sweet spot. Change `infra-` to `infr-` and `content-` to `cont-`. `comp-`, `proj-`, `app-`, `mod-`, `data-`, `meta-`, `exp-`, `cont-`, and any new prefixes should all be 4-char. *Exception allowed for `exp-` (3-char) since it is clearly readable.*

**Decide:** Which format do you prefer?

---

### Decision #2: Extended Prefix Vocabulary for Life Domains

**Status:** Open
**Context:** The current prefix vocabulary covers entities common to business/technology work (companies, projects, apps, infrastructure). It does not cover personal life domains that the user may want to track in OCD: education/learning, health/wellness, finance/admin, personal/family.

**Options under consideration:**
- `edu-` / `educ` — education, courses, certifications, learning
- `hlt-` / `hlth-` — health, wellness, medical
- `fin-` / `finc-` — finance, subscriptions, taxes, admin
- `per-` / `pers-` — personal, family, home, life admin
- `tmpl-` / `tpl-` — templates (boilerplate, prompt templates, doc templates) — see §4.3

**The axis question (unresolved):** Is the prefix about "what kind of THING is this" (functional type) or "what DOMAIN of LIFE does this belong to" (domain)? These are different axes. A skin care project is both a `proj-` (type: project) and `hlt-` (domain: health). The playbook must pick one axis and stick with it. Currently the prefix represents **type**, not **domain**. Changing this would require rethinking the entire vocabulary.

**Recommendation:** Keep the prefix as **type**. Add domain as a `tags` field. `proj-benestare` is a project that also has `tags: [real-estate, grupo-orion]`. `proj-health-annual-checkup` is a project that has `tags: [personal, health]`. This way the prefix stays clean and the tags carry the domain signal.

**Decide:** Confirm the type-over-domain axis. Then decide which new type prefixes to add.

---

### Decision #3: Opus Naming Convention

**Status:** Open (not yet addressed in any document)
**Context:** The OCD Corpus contains Opuses. How should individual Opuses be named? The playbook governs external entities; OCD's schema governs internal fields. But the Opus name — the string the user sees and types — has no documented convention.

**Options:**
- **Natural language name** (current implied approach): "IngePro Project Documentation," "My Resume," "Next.js Auth Boilerplate." Easy to create, hard to retrieve programmatically.
- **Slug-first name** (playbook-derived): `app-ingepro` as the Opus slug, "IngePro Project Documentation" as the display name. Consistent with the playbook; requires discipline.
- **Hybrid:** Display names are natural language; Opuses also have a `slug` field derived from the playbook's vocabulary. The Corpus is queried by slug; the UI shows the display name.

**Recommendation:** Hybrid. Add a `slug` field to the Opus schema. The slug follows the playbook convention. The `name` field remains the human-readable display name. The AI Filer and AI Storer use the slug to link Items to Opuses programmatically; the user sees the display name.

**Decide:** Add `slug` field to Opus schema? Yes/No.

---

### Decision #4: Resolve Status Vocabulary Proliferation

**Status:** Open
**Context:** Three different status vocabularies exist — see §4.4.

**Recommendation:** Standardize to two:
1. **Registry status** (lowercase kebab) for external entities
2. **Workflow status** (UPPERCASE) for OCD Items

Create a mapping table between the two (e.g., `DONE` → `active/production`; `ON_HOLD` → `planned`). Retire the ad-hoc app statuses from Mid Level Strategy and replace with Registry statuses.

**Decide:** Approve the two-vocabulary approach?

---

*This document is a living knowledge base. Add findings here. Never delete — mark as superseded if outdated. Each section is a Corpus asset in its own right.*

*Named under the playbook's own rules: this document's slug would be `meta-nomenclature-knowledge-base`.*
