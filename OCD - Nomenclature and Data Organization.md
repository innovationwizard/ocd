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
- [Part V: Decisions Log](#part-v-decisions-log) — All open decisions, now closed: RESOLVED or DEFERRED
- [Part VI: Deferred Items](#part-vi-deferred-items) — Known questions deliberately postponed, with triggers to revisit

---

## Part I: What OCD Has Already Decided

*This section extracts every naming decision already embedded in the OCD project — schemas, enums, field names, entity names, status vocabularies. These are NOT proposals. They are existing commitments recorded here for the first time in a single place.*

### 1.1 Primary Entities (The Ontology)

| Entity | Definition | Why This Name |
|---|---|---|
| **Item** | The atomic unit of input — any idea, task, request, interruption, artifact | Neutral, atomic. Not "task" (implies action), not "note" (implies passivity). An Item can become either. |
| **Opus** (pl. Opuses) | A living knowledge asset — a named document that accumulates content as Items are integrated | Latin for "a work." Intentional: each Opus is authored, bounded, and significant — not a folder or tag. |
| **Corpus** | The complete collection of all Opuses — the institutional memory | Latin for "body." The body of all works. Evokes completeness and organic growth. |
| **Agent** | An AI function that operates on Items and Opuses on behalf of the user | Borrowed from multi-agent AI systems. Emphasizes autonomy and specialization. |

### 1.2 Agent Names

| Slug | Full Name | Cognitive Function |
|---|---|---|
| `FILER` | AI Filer | Intake triage — classifies incoming Items |
| `LIBRARIAN` | AI Librarian | Strategic alignment — evaluates Items against the Corpus and strategy |
| `PRIORITIZER` | AI Prioritizer | Selection — recommends the next Item to work on |
| `STORER` | AI Storer | Corpus integration — decides how to integrate completed Items into Opuses |
| `RETRIEVER` | AI Retriever | Knowledge retrieval — surfaces relevant content from the Corpus on demand |

**Decision:** Agent names use the agent's cognitive role as a noun (a job title), not a verb. FILER not FILING. STORER not STORING. This makes them feel like specialists, not processes.

### 1.3 Workflow Status Values (Items)

These are the valid states an Item can be in, as defined in the RL architecture:

| Status | Meaning |
|---|---|
| `TODO` | Approved and ready — in the Kanban queue |
| `ON_HOLD` | Actionable but not timely — parked intentionally |
| `COMPENDIUM` | Reference information — not actionable, not trash, kept for lookup |
| `TRASH` | Soft deleted — can be restored |
| `CREATING` | Actively being worked on (WIP=1) |
| `DONE` | Completed — pending Corpus integration decision |
| `COLD_STORAGE` | Completed but not integrated into Corpus — archived |

**Decision:** Status names are UPPERCASE, noun-form. They describe a state, not an action. This mirrors the convention of state machines in software (think HTTP status codes, Redux state).

### 1.4 Swimlane Names — Life Domains

**Decision (May 2026):** Swimlanes are replaced by Life Domains. The old set (EXPEDITE, PROJECT, HABIT, HOME) conflated three unrelated axes — urgency, activity type, and life domain — in a single flat list. Life Domains separate the "where in my life does this belong" question cleanly.

**Urgency handling (EXPEDITE retirement):** EXPEDITE is retired as a swimlane. Urgency is now expressed through the Priority field — `HIGH` priority in any Life Domain is functionally equivalent to the old EXPEDITE treatment. The reward system's time multipliers (0.8x for HIGH) absorb this.

**Life Domain vocabulary — PRELIMINARY / PENDING FINAL DECISION:**

| Domain | Meaning |
|---|---|
| `WORK` | Professional, client, and income-generating activities |
| `HOME` | Personal life, family, domestic administration |
| `HEALTH` | Physical and mental wellness, medical |
| `SOCIAL` | Relationships, community, networking |
| `CREATIVE` | Creative pursuits, learning, content, R&D |
| `CIVIC` | Legal, civic, administrative obligations |

> **Note:** These candidates are derived from the prior ISO 9241 / Activity Theory framing. They have NOT been formally confirmed as the final enum values. Mark as PRELIMINARY until explicitly approved.

### 1.5 Activity Level / Recurrence Type

**Context:** The old `HABIT` swimlane carried a concept — recurring activities — that must now live elsewhere. The user's pragmatic model distinguishes three types:

| Type | Definition | Examples |
|---|---|---|
| `SCHEDULED` | Fixed-frequency recurring — calendar-based cadence | Take medicine every 8 hours; pay rent every month |
| `TRIGGERED` | Condition-based recurring — fires when a state is met | Buy toilet paper when stock runs out |
| `ONETIME` | Non-recurring — bounded, one-time effort | Do the legal paperwork to buy a car |

**Leontiev's Activity Theory — reconciliation PENDING:** Leontiev's three levels (Activities / Actions / Operations) are philosophically related to this classification but do not map cleanly to it. `SCHEDULED` is close to Operations (automated, habitual); `ONETIME` is close to Activities (motivated, purposeful). `TRIGGERED` has no direct Leontiev equivalent. This reconciliation is documented here as unresolved — the pragmatic model above is operative until a better framework is adopted.

**Schema status:** Whether `recurrenceType` becomes an explicit required field on Items, an optional field, or is inferred from other properties is not yet decided. The conceptual distinction is confirmed; the implementation detail is pending.

### 1.6 Priority Values

| Value | Meaning |
|---|---|
| `HIGH` | Time multiplier: 0.8x (higher urgency = less expected time) |
| `MEDIUM` | Time multiplier: 1.0x (baseline) |
| `LOW` | Time multiplier: 1.2x (lower urgency = more slack allowed) |

### 1.7 Opus Field Names (Schema)

| Field | Type | Required? | Meaning |
|---|---|---|---|
| `id` | UUIDv7 | YES | Immutable internal identifier |
| `name` | string | YES | Human-readable display name. Mutable. Free natural language. |
| `slug` | string | NO | Machine-readable identifier following the playbook's 4-taxon convention. Optional — AI agents use it for programmatic linking; the user sees `name`. |
| `content` | text | YES | The body of the Opus. Grows over time. |
| `isStrategic` | boolean | YES | Marks Opuses containing guiding principles. Used by AI Librarian as reference. |
| `isDynamic` | boolean | YES | Marks Opuses requiring on-demand customization at retrieval time (e.g., Resume). |
| `opusType` | enum | NO | Category of opus (not fully defined yet — pending) |

**Decision:** Boolean flags use the `is` prefix (`isStrategic`, `isDynamic`), which is the standard JavaScript/TypeScript convention for boolean properties. This is a code convention, not a naming convention.

**Decision (May 2026):** Opus `name` is free natural language — no naming convention enforced. The user trusts agents' semantic interpretation. `slug` is optional — follows the playbook's 4-taxon convention when provided, enabling programmatic linkage between the Corpus and the Registry.

### 1.8 Agent Finding Types (AI Librarian)

When the AI Librarian annotates an Item, it uses these finding types:

| Type | Meaning |
|---|---|
| `CONFLICT` | The Item contradicts something in the Corpus or Strategic Documents |
| `DEPENDENCY` | The Item depends on another Item or Opus being completed first |
| `REDUNDANCY` | The Item duplicates work that already exists in the Corpus |
| `RELATED` | The Item is connected to existing content — not conflicting, but worth noting |
| `SUGGESTION` | The Librarian has a recommendation for the user (e.g., where to file this) |

### 1.9 AI Storer — Integration Methods

When the AI Storer integrates content into an Opus:

| Method | Meaning |
|---|---|
| `APPEND` | Add content at the end of the Opus or a section |
| `MERGE` | Combine with existing content at the same location |
| `REPLACE` | Overwrite existing content at a specific location |
| `NEW_SECTION` | Create a new section in the Opus for this content |

### 1.10 AI Storer — Integration Decision

| Decision | Meaning |
|---|---|
| `INTEGRATE` | The completed Item should be added to the Corpus |
| `COLD_STORAGE` | The completed Item should be archived without Corpus integration |

### 1.11 AI Retriever — Request Types

| Type | Meaning |
|---|---|
| `GENERATE_DOCUMENT` | Assemble a full document from the Corpus (e.g., Resume, handoff doc) |
| `ANSWER_QUESTION` | Answer a specific question using Corpus content |
| `FIND_CONTENT` | Locate and surface existing content from the Corpus |

### 1.12 Strategic Asset Classes (Corpus Taxonomy)

The Corpus is not flat. The AI Storer and Retriever use these asset classes to prioritize:

| Class | What It Contains | Reuse Model |
|---|---|---|
| **Architectural Boilerplate** | Project scaffolding, folder structures, auth setup, DB schemas, CI/CD templates | Template-based: surface most-refined version for the tech stack |
| **Prompt Templates** | LLM system messages, RAG chain configs, agent role definitions, output formats | Pattern-based: structural template stripped of domain content |
| **Documentation Artifacts** | README structures, handoff templates, API doc formats, user manual patterns | Structure-based: skeleton for the user to fill with project content |
| **Strategic Documents** | Mission, goals, constraints, priority rules, professional identity | Reference standard: AI Librarian reads these to evaluate alignment |

**Explicitly excluded:** Domain-specific business logic (does not transfer across the user's diverse project domains).

---

## Part II: The Local Nomenclature Playbook

*This section summarizes the state of the nomenclature playbook as of v0.2 (May 5, 2026). The playbook governs how ALL external entities are named — companies, projects, applications, infrastructure, and meta artifacts.*

### 2.1 The Core Principle

> **Deterministic Clarity.** Names must be immediately obvious to any human who reads them for the first time, with zero context, in any decade.

**The Cold Open Test:** If someone sees this name for the first time with zero context, can they determine: (a) what kind of thing it is, (b) which entity it belongs to, (c) what it does? If any answer is no, the name fails.

### 2.2 The Nine Rules

| # | Rule | In One Line |
|---|---|---|
| 1 | **All lowercase, hyphens only, ASCII only** | `vesta-puerta-cdb5-app` not `Vesta_Puerta_CDB5_App` |
| 2 | **One taxon = one word. No multi-word tokens.** | Concatenate if needed: `bosquetapias` not `bosque-las-tapias`. Use the shortest natural form humans already use. |
| 3 | **Entity before Kind** | Where it belongs comes before what it is. `vesta-puert-cdb5-app` not `app-vesta-puert-cdb5`. |
| 4 | **Four taxons: Holding → Company → Project → Kind** | Mirrors Odoo's hierarchy. Every named thing has all four. Everything belongs to a project. |
| 5 | **Never put version in the name** | `vesta-puert-pai-app` forever. Version lives in branches and env vars. |
| 6 | **Immutable identifiers, mutable display names** | `vesta-puert-pai-app` never changes even if PAI is rebranded. The registry maps slug to current name. |
| 7 | **Cross-system consistency** | Same slug works in GitHub, Supabase, Vercel, Plane.so, Odoo, DNS, ENV vars. |
| 8 | **Never Null** | No entity can be created without a slug from the Registry. |
| 9 | **Date-forwarding for time-bound entities** | Add year only if the same project name will recur: `vesta-puert-benestare2026-app`. Permanent entities: no date. |

**On taxon length (Rules 1–4 combined):** Taxons 1–3 (Holding, Company, Project) have a soft guideline of ~5 characters. Human readability overrides the guideline: use the complete natural word when truncation would make it cryptic. `puerta` (6 chars) is correct; `puert` is not — because `puerta` is an immediately recognizable Spanish word and `puert` is not. `vesta`, `orion`, `tapias` are all at or near 5 chars and immediately clear. Taxon 4 (Kind) has no character limit.

### 2.3 The Four-Taxon Structure (supersedes prefix vocabulary)

**Decision (May 2026):** The old prefix-first vocabulary (`comp-`, `proj-`, `app-`, etc.) is retired. It put KIND before ENTITY, which violated the principle that a thing's address in the world (where it belongs) is more fundamental than its type (what kind of thing it is). The new structure reverses this.

**Structure:**

```
[holding] - [company] - [project] - [kind]
```

| Taxon | Position | Meaning | Examples |
|---|---|---|---|
| **Holding** | 1 | The top-level legal or organizational holder | `vesta` |
| **Company** | 2 | The subsidiary, brand, or operating entity | `orion`, `puerta`, `aid` |
| **Project** | 3 | The bounded initiative, product, or work stream | `odoo`, `cdb5`, `pai`, `benestare` |
| **Kind** | 4 | What kind of artifact this is — free-form, no controlled list | `app`, `implementation`, `module`, `doc`, `infra` |

**The old prefix vocabulary is not deleted — it is absorbed.** Holding and Company now have their own dedicated taxons (1 and 2). The old prefixes that described artifact type (`app-`, `mod-`, `infra-`, `meta-`, `data-`, `content-`) become valid values for taxon 4 (Kind), stripped of their trailing hyphen. `app-pai` → `vesta-puerta-pai-app`. `infra-orion-monorepo` → `vesta-orion-monorepo-infra`.

**Kind (Taxon 4) is free-form:** There is no controlled list. The word should be immediately obvious to a reader with zero context. English is the default but not required. Examples of valid Kind values: `app`, `module`, `doc`, `implementation`, `infra`, `experiment`, `template`, `playbook`, `registry`, `pipeline`.

**Worked examples:**

| Thing | Slug | Notes |
|---|---|---|
| Grupo Orión's Odoo implementation | `vesta-orion-odoo-implementation` | Full natural words; `implementation` is immediately clear |
| CDB5 client-facing app at Puerta Abierta | `vesta-puerta-cdb5-app` | `puerta` preferred over `puert` — complete Spanish word |
| PAI app (commissions tool) | `vesta-puerta-pai-app` | `pai` is the project abbreviation, already known |
| Benestare 2026 real-estate project | `vesta-puerta-benestare2026-app` | Year appended only because the project name recurs annually |
| This nomenclature playbook | `vesta-aid-ocd-playbook` | `aid` = the company that owns OCD; `ocd` = the project |

**Taxon 4 for special cases:** When an entity IS the holding or IS the company (no parent project to reference), the missing taxon is either omitted or filled with a conventional placeholder (`self`, the entity name repeated, or simply absent if the slug is unambiguous). This edge case is rare and handled in the registry on a case-by-case basis.

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

Plane.so identifiers are derived from the **project taxon** (taxon 3) of the slug: the project name, max 5 chars, UPPERCASE. For multi-part project names, use initials or the most recognizable fragment.

| Slug | Project Taxon | Plane.so ID |
|---|---|---|
| `vesta-puerta-pai-app` | `pai` | `PAI` |
| `vesta-puerta-anatomos-app` | `anatomos` | `ANA` |
| `vesta-puerta-refill-app` | `refill` | `REF` |
| `vesta-orion-monorepo-infra` | `monorepo` | `ORM` |
| `vesta-orion-odoo-implementation` | `odoo` | `ODO` |
| `vesta-aid-ocd-playbook` | `ocd` | `OCD` |

**Rule:** When two projects produce the same 3-letter abbreviation, disambiguate with the Company taxon initial: `PAI` → `VPAI` (Vesta Puerta PAI).

### 2.7 The 5-Step Naming Procedure

```
Step 1: Identify the Holding   → Which top-level legal entity owns this? (Taxon 1)
Step 2: Identify the Company   → Which subsidiary or brand does it belong to? (Taxon 2)
Step 3: Identify the Project   → Which bounded initiative or product is this part of? (Taxon 3)
                                 If no project exists, create one in the Registry first.
Step 4: Identify the Kind      → What type of artifact is this? Free-form word. (Taxon 4)
Step 5: Assemble and validate
         → [holding]-[company]-[project]-[kind]
         → Run the Cold Open Test
         → Register in meta-nomenclature-registry.yaml with all metadata fields
         → Use the slug everywhere: GitHub, Supabase, Vercel, Plane.so, Odoo, DNS, ENV
```

**Invariant:** Everything belongs to a project. If you cannot identify a project for something, that is a signal you need to create a project entry in the Registry before creating this artifact's slug.

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

**Status: RESOLVED (superseded by the 4-taxon structure — May 2026)**

The prefix length question was predicated on the existence of a controlled prefix vocabulary where all artifacts began with a categorical prefix (`comp-`, `app-`, `proj-`). The 4-taxon structure retired this vocabulary. Since Holding and Company are now explicit taxons (not derived from a prefix), and Kind (taxon 4) is free-form with no controlled list, the prefix length question is no longer applicable.

The tradeoff analysis below is preserved for historical reference and because the reasoning generalizes to any future controlled-vocabulary decisions:

| Length | Pros | Cons |
|---|---|---|
| 2-char | Ultra-compact, minimal visual noise | Cryptic, fails Cold Open Test |
| 3-char | Compact, still readable | Some abbreviations feel forced |
| 4-char | Most readable, natural English | Harder to enforce uniformity across all types |
| Variable | Maximum clarity | Unequal visual alignment, harder to scan |

*Resolution:* The 4-taxon structure dissolves the problem by relocating entity classification from a prefix vocabulary into the taxon hierarchy itself. Taxon 4 (Kind) is free-form because the Holding → Company → Project context already narrows the artifact's identity to the point where a plain English word (`app`, `implementation`, `playbook`) is unambiguous without needing a controlled list.

### 3.5 Activity Theory and Life Domain Classification

**Leontiev's Activity Theory** (Alexei Nikolaevich Leontiev, 1978) is the foundational framework here — not ISO 9241, which describes ergonomic usability standards and was referenced earlier in error. Activity Theory describes the structure of human purposeful behavior at three levels:

| Level | Definition | Characteristic | OCD Parallel |
|---|---|---|---|
| **Operations** | Automated, habitual — executed without conscious attention | Triggered by conditions, not goals | `TRIGGERED` recurrence type |
| **Actions** | Goal-directed steps — conscious, purposeful | Has a clear intended outcome | Individual Items |
| **Activities** | Motivated sequences of actions — driven by a motive | Connected to a broader human need or domain | Life Domain context |

**Why this matters for OCD:** The old swimlane system (EXPEDITE, PROJECT, HABIT, HOME) mixed two different axes in a flat list:
- **Domain** (where in life): HOME was a life domain
- **Activity type** (what kind of thing): HABIT was an activity type, EXPEDITE was urgency

This conflation created coarse, overlapping categories. Leontiev's theory gives the theoretical grounding for the separation: domain and recurrence type are genuinely orthogonal axes and should be modeled independently.

**The Life Domains** (Work, Home, Health, Social, Creative, Civic) correspond to Leontiev's concept of Activity at the highest level — the macro contexts in which all human purposeful behavior takes place.

**The pragmatic recurrence model** (see §1.5) maps onto Leontiev's levels:
- `SCHEDULED` ↔ Operations (habitual, calendar-automated)
- `ONETIME` ↔ Actions/Activities (goal-directed, bounded)
- `TRIGGERED` ↔ Operations (condition-fired, automatic) — no clean Leontiev equivalent; this is the unresolved gap

**Reconciliation status: PENDING.** The pragmatic model in §1.5 is operative. The philosophical alignment with Leontiev is partially confirmed but not fully reconciled. `TRIGGERED` is the outstanding case — it behaves like an Operation but fires on state conditions rather than habits or schedule.

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

This is the missing link. A boilerplate Opus for Next.js auth — what is its slug?

**Resolution under the 4-taxon structure (May 2026):** The question is now answerable. Every Opus that is a reusable template is a kind of artifact owned by a holding, company, and project — like everything else. The Kind taxon (taxon 4) carries the semantic weight:

- A Next.js auth boilerplate owned by AID's OCD project: `vesta-aid-ocd-template` or `vesta-aid-nextjs-template`
- A RAG prompt template: `vesta-aid-ocd-prompt`
- A handoff document skeleton: `vesta-aid-ocd-doc`

The old `tmpl-` prefix recommendation is superseded. `template`, `prompt`, `doc`, `boilerplate`, `skeleton` are all valid free-form Kind values. The asset class (Architectural Boilerplate, Prompt Template, Documentation Artifact) is captured in the Opus's `opusType` field (once that enum is finalized), not in the slug.

**Remaining gap:** The `opusType` enum is still PENDING. Once finalized, each asset class should correspond to one or more valid `opusType` values. The slug carries the identity; `opusType` carries the strategic classification.

### 4.4 Status Vocabulary Proliferation Problem

**Resolution (May 2026):** Three vocabularies appeared to exist — closer examination showed only two were real.

**The two authoritative vocabularies:**

1. **Item workflow statuses** (OCD schema, UPPERCASE) — the state of an OCD Item moving through the system
   `TODO`, `ON_HOLD`, `COMPENDIUM`, `TRASH`, `CREATING`, `DONE`, `COLD_STORAGE`
   These are final. Do not change.

2. **Registry entity statuses** (Playbook, lowercase-kebab) — the lifecycle state of an external named entity
   `active`, `production`, `production-degraded`, `planned`, `in-progress`, `scaffolded`, `standby`, `blocked`, `dormant`, `deprecated`, `draft`, `incomplete`, `unknown`
   These belong to the Playbook. Governed there.

**The third vocabulary was not a third system — it was brainstorming.** The application statuses from the Mid Level Strategy doc (`PROD`, `POC`, `DEV`, `PLANNING`, `V1`, `PROTOTYPE`, `STANDBY`) were a working draft, not a committed schema. They are superseded by the Registry vocabulary above. `PROD` = `production`. `STANDBY` = `standby`. No new vocabulary needed.

**Going forward:** Two vocabularies, two domains, zero overlap. Item statuses are OCD-internal and UPPERCASE. Registry statuses are entity-external and lowercase-kebab. The cases make them visually distinct even when they appear in the same document.

### 4.5 The "Kind as Swimlane" Parallel

**Updated (May 2026):** The prefix-as-swimlane parallel is superseded but the structural insight remains valid and deepens under the new model.

Both the old prefix system and the old swimlane system served the same cognitive function: **immediate classification at the point of intake**. Both answered "what kind of thing is this?" before the user read the full name.

- Old prefix: `comp-orion` → immediately a company
- Old swimlane: `EXPEDITE` → immediately urgent

Both were flat classification systems at intake. Both had the same failure mode: too coarse, mixing domain with type.

**What replaced them, and why the replacements are better:**

| Old System | Problem | Replacement | Improvement |
|---|---|---|---|
| Prefix vocabulary | Mixed type and domain in a flat list | 4-taxon structure — Kind is taxon 4, context comes from taxons 1–3 | Kind is now disambiguated by its full address, not just a prefix |
| Swimlanes (EXPEDITE, PROJECT, HABIT, HOME) | Mixed urgency, activity type, and life domain | Life Domains (Work, Home, Health, Social, Creative, Civic) + Priority field for urgency | Three axes separated into three fields; no conflation |

**The structural lesson:** Both failures were caused by collapsing multiple orthogonal axes into a single classification dimension. The fix in both cases was to decompose the single dimension into its constituent axes and model each independently. Entity classification needs at least 4 dimensions (Holding, Company, Project, Kind). Activity classification needs at least 3 (Life Domain, Priority, Recurrence Type).

**Implication for OCD design:** When a new classification need arises, ask which axis it belongs to — rather than adding a new enum value to an existing field.

### 4.6 The "Never Null" Principle in Both Systems

The playbook's Rule 8 ("No entity can be created without a slug") and OCD's design principle ("Every Item must be assigned to an Opus") are the same principle at different levels. Both prevent orphan records that can never be found or queried against.

This structural parallel suggests a deeper truth: **both systems are fundamentally anti-entropy mechanisms**. Entropy in information systems means things drifting into states where they can't be found, can't be acted on, or can't be understood. Every rule in both systems is a specific countermeasure against a specific form of drift.

### 4.7 The Opus-Registry Synchronization Opportunity

Looking ahead: when OCD is running and managing Opuses, and the Nomenclature Registry is being maintained as a YAML file, these two data stores will drift apart unless there's a mechanism to keep them in sync.

**Near-term (manual):** When a new entity is added to the Registry, the user should also create a corresponding Opus in the Corpus. The Registry slug becomes the Opus name.

**Long-term (automated):** The AI Storer could watch for Registry updates and automatically create blank Opuses for new registry entries. The AI Retriever, when asked about `comp-puerta-abierta`, would pull from the corresponding Opus in the Corpus rather than just the Registry YAML.

This turns the Registry from a static reference file into a living index of the Corpus — which is exactly what the Registry is supposed to be.

---

## Part V: Decisions Log

*All decisions that were open at the time of writing. RESOLVED = decided and applied. DEFERRED = deliberately postponed. Each section records what was decided and why.*

### Decision #1: Uniform Prefix Length

**Status: RESOLVED — superseded**
**Resolution (May 2026):** The prefix length question was dissolved by the adoption of the 4-taxon structure. There is no longer a controlled prefix vocabulary to standardize. Taxon 4 (Kind) is free-form; the length question does not apply to free-form values.
**See:** §3.4 for the full reasoning.

---

### Decision #2: Extended Prefix Vocabulary for Life Domains

**Status: RESOLVED — superseded**
**Resolution (May 2026):** Two things happened simultaneously:
1. The prefix vocabulary itself was retired. Life domain classification is no longer carried by a prefix — it is carried by the Life Domain field on Items (§1.4).
2. The axis question (type vs. domain) is answered: **the 4-taxon slug is always about type/identity (what this artifact is and where it belongs in the org hierarchy)**. Life domain is a separate field on the Item, not encoded in the slug.

The specific prefix candidates (`edu-`, `hlt-`, `fin-`, `per-`, `tmpl-`) are not needed in the new structure. Templates, education assets, and health-related artifacts all get standard 4-taxon slugs with an appropriate Kind value (`template`, `course`, `protocol`, etc.).

---

### Decision #3: Opus Naming Convention

**Status: RESOLVED**
**Resolution (May 2026):** The hybrid model was adopted.
- `name` — free natural language, human-facing, mutable
- `slug` — optional, follows 4-taxon playbook convention, used by agents for programmatic linking
- `slug` added to Opus schema as an optional field (§1.7)

This was the only option that satisfied both the human readability requirement and the machine queryability requirement without sacrificing either.

---

### Decision #4: Resolve Status Vocabulary Proliferation

**Status: RESOLVED**
**Resolution (May 2026):** Standardized to exactly two vocabularies.
1. **Item workflow statuses** (UPPERCASE) — OCD-internal, describes where an Item is in the system
2. **Registry entity statuses** (lowercase-kebab) — Playbook-governed, describes an external entity's lifecycle

The third vocabulary (ad-hoc app statuses from Mid Level Strategy: `PROD`, `POC`, `DEV`, etc.) was brainstorming, not a committed schema, and is retired. See §4.4 for the full resolution.

---

## Part VI: Deferred Items

*Decisions and questions that are known but deliberately not pursued now. Each has a reason for deferral. Revisit when the blocker is removed.*

### Deferred #1: AID / Own-Companies Holding Slug

**Context:** AID is the user's vehicle for own-company work (including OCD). The question arose: what is the slug for the AID holding entity itself?
**Reason for deferral:** Odoo v19 is not being implemented in the user's own companies yet. The 4-taxon structure requires Odoo's hierarchy to be in place before slugs for own-company entities can be finalized.
**Trigger to revisit:** When Odoo v19 implementation for own companies begins.

### Deferred #2: Life Domain Enum Finalization

**Context:** The Life Domain vocabulary (Work, Home, Health, Social, Creative, Civic) is marked PRELIMINARY (§1.4). It has not been formally approved as the final enum.
**Reason for deferral:** Not enough time allocated for definitive enum decisions in the May 2026 session.
**Trigger to revisit:** When the OCD schema is being implemented in code and the enum must be committed.

### Deferred #3: Leontiev Reconciliation

**Context:** The pragmatic SCHEDULED / TRIGGERED / ONETIME model (§1.5) is operative but not fully reconciled with Leontiev's Activity Theory. `TRIGGERED` has no clean Leontiev equivalent.
**Reason for deferral:** The pragmatic model is sufficient for current use. The philosophical reconciliation is interesting but not blocking.
**Trigger to revisit:** When recurrence type is being formalized as a required schema field.

### Deferred #4: `opusType` Enum

**Context:** The `opusType` field on the Opus schema (§1.7) is placeholder — the enum values are not yet defined.
**Reason for deferral:** The strategic asset classes (Boilerplate, Prompt Templates, Documentation, Strategic Documents) from the Conceptual Foundation are the candidates, but the exact enum values need a dedicated decision session.
**Trigger to revisit:** When the Corpus is being implemented and the AI Storer needs to classify Opuses.

---

*This document is a living knowledge base. Add findings here. Never delete — mark as superseded if outdated. Each section is a Corpus asset in its own right.*

*Named under the playbook's own rules: this document's slug is `vesta-aid-ocd-nomenclature`.*
