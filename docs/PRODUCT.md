# PYTHIA

## Product Specification

**Version:** 0.2
**Status:** Product Definition
**Project:** Pythia — Flip & Resonance

---

# 1. Product Concept

**Pythia** is a minimal ritual interface for unresolved questions.

It does not make decisions for the user.

It introduces a small external event and gives the user something to react to.

The fundamental mechanism is:

```text
ASK
 ↓
FLIP
 ↓
ANSWER
 ↓
ASK
```

The event belongs to Pythia.

The meaning belongs to the human.

> **Pythia doesn't know. That's the point.**

Pythia is not primarily a prediction system.

It is a mechanism for moving a thought off dead center.

---

# 2. Design Philosophy

## 2.1 Minimal intervention

Pythia should interfere with the user's thinking as little as possible.

The application does not require the user to enter the question.

The question exists in the user's mind.

Pythia only creates an external event.

---

## 2.2 Human interpretation

Pythia produces an event, not an interpretation.

The user decides what the event means.

The application should not present the result as objective truth, advice, or instruction.

---

## 2.3 Movement of thought

The purpose of `ASK` is not simply to request input.

It creates a small state of incompleteness:

```text
ASK
 ↓
What should I ask?
 ↓
What is actually bothering me?
 ↓
What am I trying to decide?
 ↓
What could I do?
```

Pythia does not have to formulate these questions.

The interaction itself can trigger the internal dialogue.

The product therefore works as a minimal mechanism for making a thought move.

---

# 3. Pythia as an Accessible Tool

Pythia should be usable by anyone.

The basic experience should require:

* no registration;
* no account;
* no Internet connection;
* no explanation before first use;
* no physical coin.

The smartphone replaces the physical coin.

The result is a **digital coin that is always available**.

A useful conceptual description is:

> **The coin you never spend.**

---

# 4. Two Basic Pythia Modes

Pythia has two basic interface modes.

```text
TEXT
↕
COIN
```

They represent the same Oracle mechanism.

Only the form of the interaction changes.

---

## 4.1 TEXT Mode

The minimal text interface uses:

```text
PYTHIA⚙


ASK


◯
```

The circle is not presented as a conventional button.

It is a visual indicator of the interaction zone.

The user interacts directly with the circle.

After FLIP, the result is displayed as text.

For the binary version:

```text
PYTHIA⚙


YES


◯
```

or:

```text
PYTHIA⚙


NO


◯
```

The answer is displayed briefly and then the interface returns to:

```text
PYTHIA⚙


ASK


◯
```

The complete interaction is therefore:

```text
ASK
 ↓
FLIP
 ↓
YES / NO
 ↓
ASK
```

---

# 5. COIN Mode

COIN mode transforms the same mechanism into a digital version of tossing a coin.

The coin itself becomes the main interface object.

The user does not press a separate FLIP button.

The user interacts directly with the coin.

---

## 5.1 Neutral State

The neutral state is a coin containing the word:

```text
ASK
```

Conceptually:

```text
PYTHIA⚙


      [ ASK ]

```

The coin is therefore simultaneously:

* interface;
* visual object;
* prompt;
* interaction zone.

---

## 5.2 Coin Interaction

The basic cycle is:

```text
ASK
 ↓
tap coin
 ↓
FLIP
 ↓
coin rotation
 ↓
HEADS / TAILS
 ↓
ASK
```

The physical metaphor is deliberately familiar:

> Think → toss the coin → see the side → react.

---

## 5.3 Result

The coin produces two physical sides:

```text
HEADS
TAILS
```

Pythia does not assign a meaning to either side.

The user may assign any meaning they choose.

For example:

```text
HEADS = YES
TAILS = NO
```

or:

```text
HEADS = GO
TAILS = STOP
```

or any other personal mapping.

The application itself does not decide what the result means.

---

# 6. No Artificial Third Side

The coin has two sides.

There is no need to invent a third visible result.

If the system does not produce a meaningful result, the interaction simply returns to the neutral state:

```text
ASK
 ↓
FLIP
 ↓
ASK
```

The undefined condition therefore does not need a separate symbol.

It is represented by the return to neutrality.

---

# 7. Temporary Answer State

The answer is an event, not a permanent interface state.

After the result appears, it remains visible only briefly.

Target duration:

**approximately 2–3 seconds.**

Then the interface returns to:

```text
ASK
```

The principle is:

```text
QUESTION
 ↓
ANSWER
 ↓
NEUTRAL
```

The purpose is to prevent the application from holding the user's attention.

The answer should redirect attention back to the user's own thoughts.

> **Pythia gives the event.
> The user continues the dialogue.**

---

# 8. Psychological Interaction Model

The intended interaction pattern is:

```text
ASK
 ↓
internal question
 ↓
FLIP
 ↓
external event
 ↓
reaction
 ↓
internal dialogue
 ↓
ASK
```

The application does not need to explain this process.

The user experiences it.

The role of `ASK` is particularly important.

When `ASK` returns after every answer, it creates a repeated invitation to formulate the next question.

Pythia therefore does not attempt to occupy the user's attention for long periods.

It repeatedly hands the attention back to the user.

---

# 9. Core Oracle Logic

The Oracle mechanism should remain extremely small.

At the conceptual level:

```text
FLIP → binary event
```

For the coin interface:

```text
FLIP → HEADS / TAILS
```

For the text interface:

```text
FLIP → YES / NO
```

The mapping between the internal binary event and its visual representation belongs to the client.

The Core should not contain presentation logic.

---

# 10. Separation of Core and Client

The architecture is deliberately divided:

```text
CORE
↓
What happened?

CLIENT
↓
How should it be shown?
```

The Core generates the Oracle event.

The client decides how to represent it.

For example:

```text
CORE
→ HEADS

TEXT CLIENT
→ YES

COIN CLIENT
→ coin rotates and lands on HEADS

Animated client
→ character reacts

Haptic client
→ vibration
```

This allows multiple interfaces to share the same Oracle mechanism.

---

# 11. Native Application Architecture

The native application should be extremely lightweight.

Its basic responsibility is:

```text
receive event
 ↓
recognize event
 ↓
present event
 ↓
return to ASK
```

Optional local functions include:

* animation;
* sound;
* haptic feedback;
* visual themes;
* coin collections.

The application should not require a permanent server connection for the basic experience.

---

# 12. Offline-First Architecture

Pythia should be designed as an **offline-first application**.

## FREE

The Free version can operate completely offline.

```text
DEVICE
   ↓
Pythia
   ↓
FLIP
   ↓
RESULT
```

No server is required.

---

## PREMIUM

Premium can also operate offline after the required assets have been downloaded.

Internet access is used primarily for:

* subscription management;
* downloading visual packages;
* downloading new coin collections;
* content updates.

After download, the selected assets are stored locally.

```text
ONLINE
 ↓
DOWNLOAD PACKAGE
 ↓
LOCAL STORAGE
 ↓
OFFLINE USE
```

---

## SUPER PREMIUM

Super Premium may store history and calculate statistics locally.

The Internet is primarily required when the user activates AI functionality.

```text
LOCAL HISTORY
 ↓
LOCAL ANALYTICS
 ↓
AI REQUEST
 ↓
SERVER
 ↓
AI RESPONSE
 ↓
LOCAL APPLICATION
```

Therefore Super Premium does not necessarily require continuous Internet access.

---

# 13. Telegram

Telegram remains a separate server-dependent client.

Telegram requires server infrastructure because communication takes place through the Telegram Bot API.

The Telegram client may implement the same interaction rhythm:

```text
ASK
 ↓
FLIP
 ↓
ANSWER
 ↓
ASK
```

The Telegram implementation is therefore a remote interface to the Oracle mechanism.

---

# 14. Telegram Visual Timing

Telegram has one special requirement.

The answer must not remain on screen indefinitely.

A complete interaction should behave approximately as:

```text
NEUTRAL
 ↓
ANSWER
 ↓
2–3 seconds
 ↓
NEUTRAL
```

The neutral state itself separates one answer from the next.

A separate `PROCESSING` state is not required.

---

# 15. UI Identity

The visual identity is deliberately minimal.

## Main identity

```text
PYTHIA⚙
```

The gear is both:

* a functional control;
* a visual sign suggesting Pythia as an instrument.

The gear should visually belong to the wordmark rather than look like a conventional detached settings icon.

---

# 16. Splash Screen

The Splash screen is the entry point for every new session.

```text
PYTHIA⚙


ASK


◯
```

The Splash is an artistic interface state.

`ASK` is permanently part of the composition.

It does not need to be generated by the application.

The user can interact directly with the circle.

---

# 17. Working Screen — Text Mode

The working state contains the result and the persistent interaction zone.

```text
PYTHIA⚙


YES


◯
```

or:

```text
PYTHIA⚙


NO


◯
```

After the short display:

```text
PYTHIA⚙


ASK


◯
```

---

# 18. Working Screen — Coin Mode

The working state contains the coin itself.

```text
PYTHIA⚙


     [ ASK ]


```

During FLIP:

```text
coin rotation
```

Result:

```text
     [ HEADS ]
```

or:

```text
     [ TAILS ]
```

Then:

```text
     [ ASK ]
```

The coin itself is the interaction object.

There is no separate FLIP button.

---

# 19. Universal Navigation

The application uses two primary symbols:

```text
⚙ → Menu
◯ → Working / FLIP
```

The circle is primarily the interaction zone.

On secondary screens it may also serve as the return mechanism to the Working state.

This avoids unnecessary navigation controls.

---

# 20. Menu

The menu is a functional interface rather than an artistic Oracle scene.

```text
MY ORACLE

LANGUAGE      →
ANIMATION     ON / OFF
HAPTIC        ON / OFF
SOUND         ON / OFF
HELP          →


──────────────

PREMIUM       →
```

**MY ORACLE** is a section heading.

---

# 21. Language

Language is a basic application function.

The interface should use language packages rather than hard-coded text.

Initial localization targets may include the major global languages.

The language layer should cover all user-facing text, including:

* ASK;
* YES;
* NO;
* HEADS;
* TAILS;
* HELP;
* menu items;
* Premium text;
* subscription interface.

A language package may be represented as:

```text
locales/
├── en.json
├── uk.json
├── ru.json
├── de.json
├── fr.json
├── es.json
└── ...
```

The exact language list may evolve according to actual users and market needs.

---

# 22. Animation

Animation is the visual presence of Pythia.

The initial concept is a single minimal animated character:

* simple smiley-like form;
* light facial expression;
* small head movement;
* style related to the typography and visual language of Pythia.

Because there is initially only one animation concept, the setting is simply:

```text
ANIMATION   ON / OFF
```

---

# 23. Haptic

The haptic setting is:

```text
HAPTIC   ON / OFF
```

No additional configuration is required initially.

---

# 24. Sound

The sound setting is:

```text
SOUND   ON / OFF
```

Sound may be used for:

* coin rotation;
* coin landing;
* other future Oracle events.

The basic product remains fully usable without sound.

---

# 25. Help

`HELP` opens a separate page containing the main explanatory text.

The Menu itself remains minimal.

The Help page explains:

* what Pythia is;
* how ASK works;
* how FLIP works;
* how results should be interpreted;
* available modes;
* basic settings.

---

# 26. Premium — My Oracle

Premium means:

> **I made Oracle mine.**

Premium changes the visual and sensory form of Pythia without changing the core mechanism.

Possible Premium features include:

* themes;
* animated forms;
* sounds;
* coin collections;
* special visual packages;
* personal appearance choices.

Premium does not require behavioral analytics.

It does not require AI.

It does not require persistent personal history.

---

# 27. Coin Collection

The Coin mode creates a natural Premium collection system.

Premium users may collect and use digital coins representing different:

* cultures;
* countries;
* civilizations;
* historical periods;
* artistic traditions.

Potential collections include:

```text
Ancient
Roman
Byzantine
Medieval
Modern
Coins of the World
Special Editions
```

The collection can eventually become a large digital numismatic world.

The selected coin becomes the user's active Pythia interface.

---

# 28. Digital Numismatic Experience

A digital coin may include:

* obverse;
* reverse;
* historical identification;
* period;
* issuing state or region;
* short description;
* animated flip;
* optional sound.

These elements enrich the experience without changing the underlying Oracle mechanism.

The coin remains an interface object first.

---

# 29. Premium Website

The Premium page contains:

```text
PREMIUM

Personalize your Pythia.

Characters
Themes
Animations
Sounds
Collections


DISCOVER →

────────────

SUBSCRIBE →
```

`DISCOVER` leads to the Pythia website.

The website represents a broader visual world:

* coins;
* characters;
* images;
* collections;
* historical material;
* future visual experiences.

`SUBSCRIBE` leads to subscription.

---

# 30. Super Premium — My ORACLE

Super Premium represents a different scale of product.

The original Pythia remains primarily as the interface and ritual shell.

The internal system becomes personalized and intelligent.

```text
PYTHIA
 ↓
history
 ↓
analytics
 ↓
patterns
 ↓
AI Companion
 ↓
personal interaction
```

This layer includes:

* personal history;
* analytics;
* behavioral patterns;
* profiles;
* scenarios;
* AI Companion;
* AI Mental Guide.

---

# 31. Progressive Product Structure

The product develops in layers:

```text
FREE
↓
PYTHIA
```

```text
PREMIUM
↓
MY ORACLE
```

```text
SUPER PREMIUM
↓
MY ORACLE
```

The first two levels preserve the simple Pythia experience.

Super Premium introduces a larger personalized system around it.

---

# 32. Privacy Architecture

## Free

```text
No account
No personal history
No behavioral analytics
No AI
Offline
```

## Premium

```text
Account for subscription
Local personalization
Downloaded assets
No behavioral analytics
No AI
Offline after download
```

## Super Premium

```text
Account
Local history
Local analytics
Behavioral patterns
AI when requested
```

The product should not silently backfill historical data from earlier levels.

---

# 33. Product Principle

The basic Oracle does not become more complicated simply because more expensive layers are added.

The foundational experience remains:

```text
ASK
 ↓
FLIP
 ↓
ANSWER
 ↓
ASK
```

The difference is the richness of the surrounding experience.

---

# 34. Core Philosophy

Pythia does not attempt to replace human decision-making.

It creates a minimal disturbance in a moment of uncertainty.

The user supplies:

* the question;
* the meaning;
* the interpretation;
* the decision.

Pythia supplies:

* the event.

> **The event belongs to Pythia.
> The meaning belongs to the human.**

---

# 35. Guiding Development Rule

Every feature should answer one question:

> **Does this make Pythia more useful without destroying the simplicity of Pythia?**

The product should grow around the basic mechanism.

It should never lose the ability to function as the smallest possible Pythia:

```text
ASK
 ↓
FLIP
 ↓
ANSWER
 ↓
ASK
```

That is the core.
