# OPUS CORPUS DOCUMENTER — Conceptual Foundation
> A Personal Information, Knowledge, and Wisdom Operating System
> Version 2.0 — May 2026
> *Distilled from original design intent and the study of the processes and procedures followed during the last 6 months of production app development*

---

**Contents**
- [I. The Problem](#i-the-problem) — Bus factor, time as constraint, three forms of recoverable waste
- [II. The Thesis](#ii-the-thesis) — What OCD is not, what it is, the core metaphor, the mission
- [III. The Core Ontology](#iii-the-core-ontology) — Item, Opus, Corpus, Agent, entity relationships
- [IV. The First Principles](#iv-the-first-principles) — The six inviolable laws of the system
- [V. The Strategic Asset Classes](#v-the-strategic-asset-classes) — The four types of knowledge OCD prioritizes
- [VI. The Agents](#vi-the-agents) — Cognitive function of each AI agent
- [VII. The Progressive Autonomy Model](#vii-the-progressive-autonomy-model) — How the system earns trust and grows
- [VIII. The Definition of Success](#viii-the-definition-of-success) — Operational, compounding, and north star

---

## I. The Problem

### 1.1 The Single Point of Failure

The user of this system is a high-velocity, solo AI developer. In a typical month, two to three production-grade applications are shipped end-to-end. Each application carries with it a body of knowledge: architectural decisions, prompt engineering patterns, client requirements, boilerplate code, documentation artifacts, and the rationale behind every significant choice made.

All of that knowledge currently lives in exactly one place: inside one person's head.

This is the fundamental problem. It is not a productivity problem. It is not a disorganization problem. It is a **single point of failure**.

In systems engineering, the **bus factor** measures how many team members would need to be hit by a bus before the project collapses. A bus factor of 1 means one person carries all critical knowledge. When that person is unavailable — fatigued, distracted, time-constrained, or simply six months removed from a project — the knowledge is effectively gone. Not deleted. Inaccessible.

The user has demonstrated an unusual ability to keep mental track of WHY decisions were made, where files live, what clients asked for, and the current state of every project. This is a genuine competitive advantage. It is also precisely what makes the single point of failure so dangerous: the system appears robust until the one person it depends on becomes the bottleneck.

### 1.2 The Constraint: Time

Per the **Theory of Constraints** (Goldratt, 1984), every system has exactly one binding constraint at any given moment — the one bottleneck that limits the throughput of the entire system. Identifying and optimizing around this constraint is the highest-leverage action available.

The constraint of this system is **time**. Specifically: the number of high-quality creative hours available per day is fixed. Every minute spent on recoverable work — work that was done before and could have been retrieved — is a minute subtracted from genuinely novel, irreplaceable creative work.

This reframes the purpose of OCD entirely. It is not a solution to disorganization. It is a **time multiplier** that converts recoverable waste into reclaimed creative capacity.

### 1.3 The Three Forms of Recoverable Waste

Six months of production app development — across diverse, largely unrelated domains — reveal a consistent pattern. Three categories of work are rebuilt from scratch with each new project, despite being functionally identical across contexts:

**1. Architecture and Boilerplate**
Project scaffolding, folder structures, authentication setup, environment configuration, database schema patterns, deployment pipelines. This work is not creative. It is setup. It is the tax paid at the start of every project, despite having been paid before.

**2. Prompt Templates**
AI system messages, RAG chain designs, agent instructions, output format specifications, role definitions. Each project re-engineers these from scratch, despite strong structural similarity across projects. A prompt is an intellectual artifact — it should be stored, versioned, and retrieved.

**3. Documentation Artifacts**
README patterns, client handoff structures, API documentation templates, user-facing explanation formats. The content changes. The structure does not. Re-authoring the structure each time is pure waste.

Business logic and domain knowledge are explicitly **not** in this list. The user's projects span genuinely diverse domains (construction management, inventory optimization, interior design AI, political forecasting). Domain knowledge does not transfer. These three asset classes do.

### 1.4 The Economic Cost

The cost of recoverable waste is not abstract. It can be expressed directly:

> **Time from idea to delivered value = Creative work + Recoverable waste**

OCD's mandate is to drive the second term toward zero. The first term is irreducible — it is the actual product. The second term is overhead. It compounds negatively: the more projects a person runs simultaneously, the more overhead accumulates, and the less of the constraint resource (time) is available for the work that actually generates value.

## II. The Thesis

### 2.1 What OCD Is Not

The landscape of tools available to knowledge workers is vast. Every one of them fails this system's user for the same fundamental reason: they are **passive**. They are shelves, not systems. They store; they do not think. They wait; they do not act.

- **File systems** are folders with search. They cannot distinguish between an active project and a six-month-old artifact.
- **Note-taking apps** (Notion, Obsidian, Evernote) are excellent libraries. They cannot enforce a focus rule or detect a strategic conflict.
- **Project management tools** (Jira, Linear, Trello) are excellent kanban boards. They have no concept of a knowledge corpus and cannot detect when a task duplicates existing work.
- **Git/GitHub** is an excellent version-control ledger. It is a terrible retrieval interface and has no concept of "what should I reuse from a prior project?"
- **AI assistants** (Claude, ChatGPT) are powerful reasoning tools. They operate on whatever context you provide, which is limited by token windows and manual context-loading. They have no access to the corpus unless explicitly given it.

None of these tools, alone or in combination, solve the bus factor problem. None actively protect the constraint resource (time). None compound — they do not become more valuable the more you use them.

### 2.2 What OCD Is

**OCD is an active personal knowledge operating system.**

The word "operating system" is chosen deliberately. An OS does not store files passively — it orchestrates processes, enforces rules, allocates resources, and manages the interface between the human and the machine. It is the layer of intelligence between the user and the data.

OCD applies this concept to personal knowledge work. It is the layer of intelligence between the user's mind and their body of accumulated intellectual work — the **Corpus**.

Three properties distinguish OCD from passive tools:

**1. Active, not passive.** OCD does things without being asked. It files, it checks, it guards, it stores. Passive tools wait for you. OCD anticipates you.

**2. Opinionated, not neutral.** OCD has rules. It knows your strategy. It knows your goals. It knows your constraint. When a new item enters the system, OCD does not treat all items as equal — it evaluates each one against the rules and signals accordingly.

**3. Compounding, not flat.** Every item that flows through OCD enriches the Corpus. The Corpus becomes more valuable over time. The retrieval system becomes more accurate. The AI agents become better calibrated. The system's return on investment increases with use — the opposite of most tools, which become maintenance burdens over time.

### 2.3 The Core Metaphor

The most precise metaphor for OCD is a **personal institutional memory system with an active curator**.

Large organizations spend significant resources on institutional memory: wikis, knowledge bases, onboarding documentation, decision logs, post-mortems. The goal is to prevent the organization from re-learning what it already knows. When an organization loses institutional memory, it repeats mistakes, rebuilds solved problems, and re-debates settled questions.

Solo practitioners have this problem acutely, because they have no institution to distribute the memory across. Everything lives in one person.

OCD is the institution's memory system, built for one person. The active curator — the AI agents — ensure the system does not drift into passive storage. They enforce structure, detect patterns, surface relevant history, and gradually take on more of the maintenance burden so the human can focus exclusively on the work only a human can do.

### 2.4 The Mission Statement

> **OCD reduces the time from idea to delivered value to the absolute minimum, by externalizing institutional memory, enabling systematic reuse, and protecting the single binding constraint: the user's time.**

## III. The Core Ontology

An ontology is a formal description of the concepts within a domain and the relationships between them. This ontology defines the four primary entities of OCD and their relationships. These definitions are the semantic foundation of the entire system — every feature, every rule, every agent decision traces back to them.

---

### 3.1 Item

**Definition:** The atomic unit of input. An Item is any idea, task, request, interruption, artifact, or observation that enters the system.

**Key properties:**
- An Item has **no intrinsic value** at the moment of capture. Its value is determined through the workflow process, not assigned at intake.
- An Item is **temporary by design.** It exists to be processed. Its end state is either integration into an Opus, assignment to Cold Storage, or deletion. An Item that persists indefinitely is a symptom of a system failure.
- An Item is **not a document.** It is a raw signal — the smallest discrete unit of intention or information worth preserving long enough to evaluate.

**Relationship to other entities:** An Item is the input to the system. Every Opus was seeded by Items. Every Agent acts on Items.

---

### 3.2 Opus *(plural: Opuses)*

**Definition:** A living knowledge asset. An Opus is a named, editable document that accumulates content as Items flow through the system and are integrated into it. It is simultaneously a **living document** (it grows and changes) and a **knowledge asset** (it is mined for reuse).

The word "opus" is borrowed from Latin, where it means "a work" — specifically, a significant, authored intellectual work. The usage here is intentional: each Opus is not a folder or a tag, it is a **work** — a bounded, authored artifact with coherent identity.

**Key properties:**
- An Opus has a **persistent name** that identifies its domain of knowledge. The name is stable; the content evolves.
- An Opus has **two modes:** static (updated only by the workflow) and dynamic (customized at the moment of retrieval based on request context). Most Opuses are static. A Resume is the canonical example of a dynamic Opus: same knowledge base, different presentation per audience.
- An Opus has a **strategic flag** (`isStrategic`). Strategic Opuses contain guiding principles — mission, priorities, constraints. They are the reference against which new Items are evaluated. Only a small number of Opuses are strategic.
- An Opus **does not have substructure requirements.** It begins as a blank document with a name. Structure emerges organically as content is integrated. This is by design: premature structure is a form of waste.
- An Opus **compounds in value.** The longer the system runs and the more Items are integrated, the more complete and reusable each Opus becomes.

**Relationship to other entities:** An Opus is the output of the workflow. Items are integrated into Opuses. The collection of all Opuses is the Corpus. Agents read and write Opuses.

---

### 3.3 Corpus

**Definition:** The complete, living collection of all Opuses. The Corpus is the user's institutional memory — the external brain. It is the single source of truth for all accumulated knowledge.

**Key properties:**
- The Corpus is **additive, never subtractive** under normal operation. Opuses are moved to Cold Storage, not deleted. Cold Storage preserves history without polluting the active working set.
- The Corpus is **the primary context for all AI operations.** An Agent that acts without reading the Corpus first is an Agent operating blind. The Corpus is the ground truth.
- The Corpus has **information quality dimensions** (borrowed from data science): *completeness* (does it capture what it should?), *accuracy* (is what it contains correct?), *timeliness* (is it current?), and *consistency* (are there contradictions?). These dimensions are not managed manually — they are the responsibility of the AI Agents.
- The Corpus is **queryable**, not just searchable. Searching finds documents by keyword. Querying finds documents by semantic relevance, by strategic alignment, by project context. This distinction is fundamental: a powerful corpus system does not need perfect naming or perfect organization — it needs a powerful retrieval layer.

**Relationship to other entities:** The Corpus contains Opuses. The AI Retriever queries the Corpus. The AI Storer populates the Corpus. The AI Librarian evaluates Items against the Corpus.

---

### 3.4 Agent

**Definition:** An AI function that operates on Items and Opuses, performing cognitive work on behalf of the user. An Agent is not a chatbot. It is a **specialist** — it has one job, a defined trigger, and a defined output.

**Key properties:**
- An Agent is **triggered**, not invoked. It runs when conditions are met, not when the user asks. This is what makes OCD active rather than passive.
- An Agent is **calibratable.** Its behavior is tuned over time based on user feedback. An Agent that makes bad decisions is not removed — it is retrained. This is the learning loop.
- An Agent **does not replace human judgment.** It reduces the cognitive overhead of routine decisions, freeing the human to apply judgment only where it is genuinely required.
- An Agent **operates within the Corpus.** It has read and write access to Opuses. Its actions are auditable.

**Relationship to other entities:** Agents operate on Items and Opuses. They are the active, intelligent layer between input (Items) and output (Corpus).

---

### 3.5 Entity Relationship Summary

```
ITEM ──[processed by]──> WORKFLOW ──[produces]──> OPUS
                                                     │
                                                     ▼
                                                  CORPUS
                                                     │
                                                     ▼
                                                  AGENT (reads/writes/evaluates)
                                                     │
                                                     ▼
                                                  ITEM (evaluated, filed, flagged)
```

The system is a **closed loop**. Items enter, are processed, and enrich the Corpus. The Corpus informs how future Items are processed. The longer the loop runs, the smarter the system becomes.

## IV. The First Principles

First principles are the irreducible laws of the system. They are not best practices or guidelines — they are the axioms from which all other design decisions must be derived. Any feature, rule, or agent behavior that contradicts a first principle is wrong by definition, regardless of how compelling the local justification seems.

---

### Principle 1: Capture Without Judgment

*"Capture everything. Judge nothing at capture time."*

Capture is an act of observation, not evaluation. The moment of intake is the worst possible moment to evaluate the value of an idea: context is minimal, priority is unknown, and the cognitive cost of evaluation at intake is disproportionate to its benefit.

An idea that seems trivial today may become the seed of a high-value Opus tomorrow. An idea that seems urgent may turn out to be noise. The system cannot know this at intake — and neither can the user.

**Implication:** The intake mechanism must be frictionless to the point of invisibility. Any friction at capture is a filter that removes signal before the system has a chance to evaluate it. That filter is not the system's job — it is noise.

---

### Principle 2: One Active Task, Always

*"WIP = 1. No exceptions."*

Work-in-progress (WIP) limits are one of the most empirically validated principles in knowledge work management, originating in Toyota's production system and formalized in personal kanban by Jim Benson (2011). The research is unambiguous: context-switching is not free. Every task switch imposes a re-orientation cost — an invisible tax on cognitive performance.

But WIP = 1 in OCD is not primarily a productivity technique. It is a **cognitive protection mechanism**. The user has explicitly identified addictive coding on new projects as a behavioral pattern that sabotages both income and authority goals. WIP = 1 is the external system that enforces the discipline the human cannot reliably enforce on themselves.

**Implication:** The system must physically prevent a second task from entering the active working state. This is not advisory. It is a constraint. The AI Guardrail exists specifically to enforce this principle.

---

### Principle 3: The System Is the Trusted Brain

*"If it's not in the system, it doesn't exist for future-you."*

David Allen's Getting Things Done (2001) identified a fundamental insight: the human mind is designed for **having** ideas, not for **storing** them. A mind burdened with remembering commitments, decisions, and open loops cannot be fully present for creative work. A trusted external system that captures and holds these reliably is what frees the mind.

OCD extends this principle: the system is not just a trusted inbox — it is the trusted institutional memory of the user's entire professional output. When an item, decision, or artifact is not in the system, it does not contribute to the Corpus. It cannot be retrieved. It cannot be reused. It cannot inform future decisions.

**Implication:** The system must be comprehensive enough to make this principle rational. A system that only captures some things is not trusted. Inconsistent capture is worse than no capture, because it creates false confidence.

---

### Principle 4: Every Item Is Either Signal or Noise

*"An Item either contributes to an Opus or it does not. There is no third option."*

Claude Shannon's information theory (1948) established that information has a precise definition: it is the reduction of uncertainty. Noise is what does not reduce uncertainty. In a knowledge system, this translates directly: every piece of information either contributes to the knowledge base (signal) or it occupies space without contributing (noise).

At the point where an Item is evaluated — after capture, before filing — the user must answer one question: "Can this be transformed into a valuable addition to an Opus?" If yes, it is signal. If no, it is noise. There is no third category, no "maybe later if the context changes" holding pattern. On Hold is a legitimate state for Items that are signal but not yet timely. Cold Storage is the destination for Items that were signal but have been superseded. These are transitions, not escape hatches.

**Implication:** The system must force this binary decision. An Item that sits indefinitely in an ambiguous state is a system failure, not a feature.

---

### Principle 5: The Corpus Must Compound

*"The system's value must increase with use."*

Most tools decay with scale. More files means harder navigation. More notes means worse search results. More tasks means more backlog anxiety. This is the fundamental failure mode of passive storage systems — they become maintenance burdens.

OCD inverts this. The more Items are processed, the richer the Corpus. The richer the Corpus, the more context the Agents have. The more context the Agents have, the better their recommendations. The better their recommendations, the more the user trusts the system. The more the user trusts the system, the more consistently they use it. This is the **data flywheel** — a compounding feedback loop where system usage makes the system better, which drives more usage.

**Implication:** Every design decision must ask: does this feature enrich the Corpus over time, or does it create a debt the user must maintain? Features that create maintenance debt without compounding value should not be built.

---

### Principle 6: The Human Is the Irreplaceable Input

*"The system serves the human. The human does not serve the system."*

OCD exists to multiply human creative capacity, not to create a second job maintaining a knowledge management system. The user's time is the binding constraint. Any overhead the system imposes on the user — manual data entry, mandatory categorization, required tagging, ritual curation — is a direct cost against the primary objective.

This principle has a specific implication for AI agent design: agents should be calibrated to require the minimum viable human input to do their job well. The goal is progressive reduction of required human input over time, not progressive increase.

**Implication:** The system should absorb complexity, not expose it. If the user must understand the system's internals to use it correctly, the system has failed.

## V. The Strategic Asset Classes

*This section is derived from empirical observation across 6 months and 12+ production applications. It represents the specific types of intellectual work that OCD should prioritize storing and retrieving.*

---

Not all knowledge is equal. A corpus without prioritization is a library without a catalog — everything is technically present, but nothing is efficiently accessible. Effective knowledge systems define **asset classes**: categories of knowledge that recur with sufficient frequency and sufficiently high reuse value to justify systematic capture and structured retrieval.

This classification matters for two reasons:
1. It tells the AI Storer what to recognize and prioritize when an Item is integrated.
2. It tells the AI Retriever what the user is most likely to want when starting a new project.

---

### Asset Class 1: Architectural Boilerplate

**What it is:** The structural skeleton of every application. This includes project scaffolding, folder and file organization conventions, environment configuration patterns, authentication setup, database schema archetypes, CI/CD pipeline templates, and deployment configurations.

**Why it is an asset class:** This work is not creative. It is necessary but undifferentiated. Its shape is largely determined by the tech stack, not by the domain being served. An application for an interior design firm and an application for a construction company can share 80% of their scaffolding.

**Reuse model:** Template-based retrieval. When a new project starts, the AI Retriever surfaces the most recently refined boilerplate for the relevant tech stack, pre-configured with the user's established conventions. The project starts with a working skeleton, not a blank directory.

**Corpus behavior:** Boilerplate evolves slowly over time. Each new project may refine a convention (better folder structure, improved auth pattern, tighter config). The Storer captures these refinements. The Corpus maintains the current "best version" of each boilerplate template, not a history of every version ever used.

---

### Asset Class 2: Prompt Templates

**What it is:** The AI-layer intellectual work. This includes LLM system messages, RAG chain configurations, agent role definitions, output format specifications, few-shot examples, reasoning scaffolds, and evaluation criteria.

**Why it is an asset class:** Prompt engineering is genuinely skilled work. A well-designed system prompt represents significant intellectual investment — understanding the model's behavior, the domain requirements, the edge cases, and the failure modes. This investment should not be remade for each project that uses a similar AI function.

**Reuse model:** Pattern-based retrieval. Not "give me the exact prompt I used for Project X," but "give me the RAG system prompt pattern for a domain expert assistant" — the structural template that has been refined across multiple applications, stripped of domain-specific content and ready to be specialized.

**Corpus behavior:** Prompts are among the highest-value items in the Corpus. They are the distillation of AI engineering judgment. The Corpus should track both the prompt artifact and, where possible, the reasoning behind key design choices — why a particular instruction was added, what failure mode it prevents.

---

### Asset Class 3: Documentation Artifacts

**What it is:** Client-facing and internal documentation. This includes README structures, client handoff document templates, API documentation formats, user manual patterns, onboarding guide structures, and deployment runbook templates.

**Why it is an asset class:** Documentation structure is largely domain-independent. The information inside a handoff document changes per project; the skeleton — sections, ordering, level of technical detail, communication tone — does not. A client who paid for an AI forecasting system needs the same structural documentation as a client who paid for an interior design tool.

**Reuse model:** Structure-based retrieval. The AI Retriever surfaces the documentation skeleton (sections, headings, required content per section) so the user writes content into a proven structure, not a blank page.

**Corpus behavior:** Documentation templates are relatively stable once established. They are updated when a client or collaborator feedback reveals a structural gap. The Corpus maintains one authoritative template per documentation type.

---

### Asset Class 4: Strategic Documents *(Special Class)*

**What it is:** The user's guiding principles — mission, goals, constraints, priority rules, professional identity. These are the Opuses flagged with `isStrategic = true`.

**Why it is an asset class:** Strategic documents are not reused the way templates are. They are **reference standards** — the baseline against which every new Item is evaluated. They answer the question "does this new work align with or undermine my strategy?" and they must be current to be useful.

**Corpus behavior:** Strategic documents are few in number but carry disproportionate weight. They are the primary input to the AI Librarian's alignment assessment. They must be actively maintained — stale strategy documents are more dangerous than no strategy documents, because they produce false signals.

---

### What Is Explicitly Not an Asset Class

Based on 6 months of evidence: **domain-specific business logic** is not an asset class for this user's work. The user operates across genuinely diverse domains — construction management, inventory optimization, interior design, political forecasting. The business rules of these domains do not transfer. Attempting to systematically capture and retrieve domain-specific logic would create Corpus noise without corresponding retrieval value.

This exclusion is important. A system that tries to capture everything with equal priority captures nothing effectively. The Corpus earns its value through selectivity, not comprehensiveness.

## VI. The Agents

The Agents are the active intelligence of OCD. Each Agent is a specialist with a defined cognitive function — the specific type of thinking it performs on behalf of the user. This section describes *what each Agent does conceptually*, not *how it is implemented*.

The conceptual specification matters because implementations change. An Agent's prompts will be tuned, its triggers will be refined, its architecture will evolve. But its cognitive function — the specific human mental task it replaces — is the stable definition that persists across all implementations.

**Design note:** The Agents listed here are the result of the original design process. They are not final. The names, boundaries, and responsibilities of these Agents should be treated as hypotheses to be validated and refined through use, not as permanent fixtures. What is permanent is the cognitive function each serves.

---

### Agent 1: The AI Filer

**Cognitive function:** *Intake triage.*

The human cognitive task this Agent replaces: reading a raw, unstructured input (an idea captured mid-thought, an interruption received from a stakeholder, a note left for later) and deciding where it belongs — which Opus, which priority level, which workflow state.

This is a high-friction task when done manually, because it requires consulting the entire structure of the Corpus to make a good decision. The AI Filer does this consultation automatically. It knows the existing Opuses, the current priorities, and the user's classification history. It can look at "urgent bug, client texted" and correctly infer: Expedite swimlane, Income-related Opus, high priority — because it has learned the patterns.

**Why it matters:** Intake friction is a filter that removes signal. Every second of friction at capture increases the probability that an idea is lost. A frictionless intake is not a productivity optimization — it is a data quality investment.

**Calibration:** The AI Filer starts by making suggestions that the user confirms, corrects, or overrides. Every correction is a training signal. Over time, its classification accuracy converges toward the user's own judgment.

---

### Agent 2: The AI Librarian

**Cognitive function:** *Strategic alignment assessment.*

The human cognitive task this Agent replaces: reading a newly clarified Item and asking, "Does this align with my strategic goals, or does it undermine them? Have I already done something like this? Does it conflict with an existing commitment?"

These questions require reading the Strategic Documents and the entire active Corpus — a task that is cognitively expensive and easy to skip under time pressure. The Librarian never skips it. It runs automatically when an Item has been processed enough to be meaningfully evaluated, and attaches its findings as a passive annotation.

**Two operating modes:**

1. *Alignment check:* Compares the Item against Strategic Opuses to assess whether the work contributes to or undermines the user's declared goals (income, authority, portfolio). Flags conflicts and highlights strong alignments.

2. *Duplication detection:* Compares the Item against active Opuses to detect whether similar work already exists, preventing the user from investing in something the Corpus already contains.

**Why it matters:** The user has identified addictive coding on new projects as a behavioral risk. The Librarian is the early-warning system: it surfaces the strategic cost of a new commitment before the user is emotionally invested in executing it.

**Output:** Passive annotations, not blockers. The Librarian informs; it does not prevent. The human retains full decision authority.

---

### Agent 3: The AI Guardrail

**Cognitive function:** *Focus enforcement.*

The human cognitive task this Agent replaces: maintaining the discipline to work on only one thing at a time, in the face of novelty, urgency, and the natural pull of new ideas.

This is the only Agent that does **not** primarily work with information. It works with behavior. Its job is to enforce WIP = 1 by making it physically impossible (or at minimum, explicitly acknowledged) when the user attempts to violate the focus rule.

**Why it matters:** The user has self-identified this behavioral pattern as real and consequential. An external system that enforces a rule the human cannot reliably self-enforce is not a crutch — it is a design. Just as a physical environment can be designed to make good behavior the path of least resistance, OCD's Guardrail makes focus the path of least resistance.

**Tone:** Educational, not punitive. When the Guardrail fires, it communicates the rule and the reason. The user may override. The system records the override. This produces two outcomes: the user is reminded of the rule they set for themselves, and the system accumulates data about when overrides happen (useful for the Critique step).

---

### Agent 4: The AI Storer

**Cognitive function:** *Intelligent corpus integration.*

The human cognitive task this Agent replaces: taking a completed Item and deciding exactly where in an Opus it belongs, how it should be written, what existing content it updates or replaces, and how to maintain the coherence of the Opus after the addition.

This is the highest-value Agent from a compounding perspective. It is the mechanism that converts completed work into Corpus equity. A well-functioning AI Storer means the Corpus is always up-to-date without manual maintenance. A malfunctioning AI Storer means the Corpus drifts from the user's actual knowledge state.

**The learning challenge:** The Storer faces the most difficult task of all the Agents because it requires understanding both the content being integrated and the semantic structure of the target Opus. Integration is a judgment call, not a rule-following exercise. It must be learned from human behavior.

**Phase 1 behavior:** The Storer presents a two-pane UI: the completed Item on one side, the target Opus on the other. The human performs the integration manually. The Storer records every action: what was pasted where, what was edited, what was discarded. This is the training data.

**Compounding advantage:** As the Storer accumulates integration history, it develops a model of how the user organizes knowledge within Opuses. Over time, it can propose integrations that the user merely approves, and eventually propose and execute integrations autonomously.

---

### Agent 5: The AI Retriever

**Cognitive function:** *Intelligent knowledge retrieval.*

The human cognitive task this Agent replaces: knowing what exists in the Corpus and finding it efficiently. As the Corpus grows, this becomes an increasingly non-trivial task. A large Corpus without good retrieval is not an asset — it is an archive. An archive and an asset are different things.

**Retrieval types:**

1. *Template retrieval:* "Give me the Next.js auth boilerplate." Surface the most current, refined version of a specific asset class artifact.
2. *Contextual retrieval:* "I'm starting a project for a logistics company. What's relevant?" Surface Opuses and fragments with strategic or structural relevance to the stated context.
3. *Dynamic generation:* For Opuses flagged `isDynamic = true`, the Retriever does not simply return the stored content — it assembles and customizes the output based on request parameters. (Example: Resume customization per company and role.)

**Why it matters:** Retrieval is not a feature — it is the payoff. The entire value proposition of building a Corpus depends on the ability to surface the right knowledge at the right moment with the least possible friction. A Corpus that can only be queried by exact filename is not meaningfully different from a file system. The Retriever is what makes the Corpus intelligent.

**Design standard:** The Retriever should meet this bar: a new project should start with a richer head start than any previous project. If starting a new project feels no different than starting a project before OCD existed, the Retriever has failed.

## VII. The Progressive Autonomy Model

### 7.1 The Core Idea

OCD does not aim to deploy a fully autonomous AI system on day one. It aims to deploy a system that **starts where the human is** and progressively moves cognitive work from human to machine as evidence accumulates that the machine can do it well.

This is not a temporary compromise. It is the correct architecture for a knowledge system that must be trusted. Trust is earned through demonstrated accuracy over time, not granted at installation. An AI Agent that acts autonomously before earning that trust is not helpful — it is a liability, because its errors go undetected and compound.

The Progressive Autonomy Model is a framework for managing this trust accumulation systematically.

---

### 7.2 The Three Phases

Each Agent progresses through three phases at its own pace. No Agent is forced to advance before the evidence supports it.

**Phase 1: Manual (Human Acts, System Records)**

The human performs the cognitive task. The system provides the interface and records every human decision with full fidelity. This phase is not passive for the system — recording decisions accurately and completely is the critical data collection that makes Phase 2 possible.

In Phase 1, the system's primary output is an audit trail of human judgment. This is the training corpus for the Agent.

*Example (AI Storer in Phase 1):* The user performs every integration manually through a two-pane UI. The system records: which Item, which Opus, which location in the Opus, what edits were made, how long it took. No automation. Maximum observation.

**Phase 2: Advisory (AI Suggests, Human Decides)**

The Agent has accumulated enough human decisions to form a model of the user's preferences. It now proposes actions instead of waiting for the human to act. The human reviews, approves, corrects, or overrides.

In Phase 2, every approval is a positive signal. Every correction is a negative signal. Every override is a data point. The Agent's model refines continuously. This phase is where the most learning happens, because the human is most actively engaged with the Agent's proposals.

*Example (AI Storer in Phase 2):* The user completes an Item. The Storer proposes: "Integrate into [Opus Name] under [Section], after [existing paragraph]." The user sees the proposed integration, can edit it, and confirms or rejects. The Storer learns from every outcome.

**Phase 3: Autonomous (AI Acts, Human Reviews Exceptions)**

The Agent has demonstrated sufficient accuracy — measured empirically against the user's historical approvals — to act without prior approval on routine decisions. The human reviews the system's action log periodically and corrects errors. Errors trigger a temporary return to Phase 2 behavior for the decision type that produced the error.

Phase 3 is not a final destination. It is a sustained operating mode maintained by ongoing validation. The system never graduates out of oversight — it graduates out of **per-decision** oversight into **periodic** oversight.

*Example (AI Storer in Phase 3):* When an Item is marked Done, the Storer automatically integrates it into the correct Opus location. The user receives a notification: "I integrated [Item] into [Opus] at [Location]. Review or undo." Most of the time, no action is needed. Occasionally, the user corrects. The correction is a training signal.

---

### 7.3 The Data Flywheel

The three phases are not a straight line — they are a feedback loop:

```
Human decisions → Agent training data → Better agent proposals
      ↑                                          ↓
Fewer required human decisions ←── Higher human trust in agent
```

This is the data flywheel. More use generates better performance. Better performance generates more trust. More trust generates more autonomous operation. More autonomous operation frees human time. Freed human time goes back into creative work — which generates more Items — which generates more data.

The flywheel accelerates with use. The system becomes measurably more valuable the more it is used consistently. This is the inverse of most tools, which become burdens with scale.

---

### 7.4 The Autonomy Contract

Each Agent's autonomy is governed by an explicit contract with the user:

- **The Agent acts within its defined scope.** It does not expand its own authority.
- **Every autonomous action is auditable.** The user can inspect what the Agent did, when, and why.
- **Any action can be undone.** Autonomous actions are reversible. The system does not hard-delete or overwrite without explicit confirmation.
- **The Agent signals uncertainty.** When confidence is below threshold, the Agent falls back to Phase 2 behavior and asks for human review rather than guessing.

This contract is not just ethical design. It is what makes the system trustworthy enough to actually be used. A system the user doesn't trust, they abandon. The Autonomy Contract is the foundation of the sustained engagement that makes the flywheel work.

## VIII. The Definition of Success

A system without a clear success definition cannot be evaluated, and a system that cannot be evaluated cannot be improved. The Definition of Success for OCD is expressed at three levels: the signal that the system is working as intended in daily use, the evidence that the system is compounding over time, and the north star — the fully realized state the system is building toward.

---

### 8.1 Operational Success (Day-to-Day Signals)

The system is working when the following are true:

**Every new project starts with a head start.** The AI Retriever surfaces relevant boilerplate, prompt templates, and documentation artifacts before the user asks. The user does not start from a blank page. The question is not "what do I need to set up?" but "which version of the existing setup fits this project?"

**Completed work is captured without manual effort.** When an Item is marked Done and sent to the Corpus, the user does not need to remember to document it, find the right file, or reconstruct the context. The AI Storer handles integration. The work is preserved.

**Focus is maintained without willpower.** The AI Guardrail fires before a second task enters the active working state. The user is reminded, not surprised, when they are about to violate WIP = 1. The system protects the constraint without requiring the human to enforce it on themselves.

**An AI assistant can be onboarded cold.** When a new conversation with Claude, GPT, or any AI assistant begins, the user can retrieve the relevant Opus or corpus context in minutes. The assistant has a working model of the project, the stack, the decisions made, and the current state — without requiring a 20-minute manual briefing.

---

### 8.2 Compounding Success (Long-Term Evidence)

The system is compounding when the following can be measured:

**The retrieval hit rate increases over time.** When the user or an Agent queries the Corpus, the fraction of results that are genuinely useful increases as the Corpus matures. This is the measurable signal of corpus quality improving with use.

**Project startup time decreases.** The time from "project starts" to "first meaningful work begins" — not counting creative ideation, which is irreducible — should decrease as the boilerplate and prompt corpus mature. This is the measurable signal of recoverable waste being eliminated.

**Agent override rate decreases.** The fraction of Agent proposals that the user corrects or rejects should decrease over time as the Agents' models of user judgment improve. A decreasing override rate is evidence that the progressive autonomy model is working.

**The Corpus grows in quality, not just in volume.** Size is not the metric. A large Corpus of poorly integrated, poorly organized, or stale content is not an asset. The metric is the fraction of the Corpus that is current, accurate, and retrievable on demand. This is maintained by the AI Storer's integration quality and the AI Librarian's consistency checks.

---

### 8.3 The North Star (Fully Realized State)

The fully realized OCD is a system where the user's creative capacity is fully protected, and the institutional memory problem is solved permanently.

In concrete terms, this looks like:

- **The bus factor is no longer 1.** The Corpus holds enough structured knowledge that another developer — or a future AI assistant — could orient themselves to any active project in minutes. The user's knowledge is no longer locked in one person's head.

- **Reuse is the default, not the exception.** When a new project starts, the question is not "how do I build this?" but "how much of this already exists in the Corpus?" The Retriever's answer is meaningful every time.

- **The user's time is spent on genuinely irreplaceable work.** Administrative work, classification work, documentation work, and retrieval work are handled by Agents. The human's time is spent on the decisions that require human judgment: creative architecture, strategic prioritization, client relationships, novel problem-solving.

- **The system is self-improving.** The Critique cycle produces actionable improvements to the system itself. The system has a feedback loop that ensures it gets better at the things that matter to the user, not at the things that are easy to measure.

The north star is not a destination the system reaches and stops. It is a direction of travel — a gradient the system continuously moves along, with each cycle of use making it more capable, more trusted, and more valuable.

---

*This document defines the conceptual foundation of OCD. It is intentionally free of workflow mechanics, implementation details, and technology specifications. Those concerns are addressed in separate documents. This document exists to answer one question, clearly and permanently: what is this system, and why does it exist?*

