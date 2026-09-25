# PYTHIA — UI Specification

**Version:** 0.1
**Status:** Initial UI Definition

---

## 1. Design Principle

Pythia follows a minimalist visual language.

> **Design is artistic speech.**

Every visible element should communicate a specific meaning.
Nothing should be added only because it is conventional UI.

The interface is built around four visual signs:

```text
PYTHIA⚙
ASK
◯
YES / NO / UNDEFINED
```

---

# 2. Visual Modes

Pythia has two visual modes.

## Oracle Mode

The Oracle experience is the primary visual state.

* Neutral grey background in the basic version.
* All interface elements are white.
* Text and controls may be placed directly over images or video.
* Visual content may eventually become the main element of the screen.
* UI elements should not compete with the visual scene.

The interface may therefore partially merge with the image or video.

## Menu Mode

The menu is a functional interface.

* Light background.
* Black text.
* High readability.
* No decorative visual effects are required.

The menu deliberately separates the user from the visual Oracle experience.

---

# 3. Screen 01 — Splash

The Splash screen is the entry point for every new session.

```text
                    PYTHIA⚙


                       ASK


                        ◯
```

This is primarily an artistic splash screen, not a conventional application screen.

### Meaning

**PYTHIA⚙**
The identity of the Oracle and the symbol of the instrument.

**ASK**
The only appropriate first invitation.

Pythia does not know the user's question.
It only knows why the user has come.

**◯**
A visual indicator of the interaction zone.

---

# 4. Splash Interaction

The splash screen is interactive.

```text
◯
↓
FLIP
↓
Working Screen
```

The user formulates the question privately and activates the Oracle by interacting with the circle.

`ASK` itself is not generated dynamically. It is part of the visual composition.

Every new session begins with `ASK`.

---

# 5. Screen 02 — Working

The Working screen displays the Oracle result.

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

or:

```text
                    PYTHIA⚙


                    UNDEFINED


                        ◯
```

There is no additional word such as `RESULT`.

The result itself is the content of the screen.

---

# 6. Working Screen Interaction

The circle remains visible after every result.

```text
◯
↓
FLIP
↓
new result
```

The user may therefore continue indefinitely:

```text
YES
 ↓
FLIP
 ↓
NO
 ↓
FLIP
 ↓
UNDEFINED
 ↓
...
```

The Oracle interaction remains visually minimal throughout.

---

# 7. Universal Navigation

Two symbols define the navigation system:

```text
⚙  →  MENU
◯  →  WORKING / FLIP
```

The system does not require conventional:

* Back buttons
* Home buttons
* Bottom navigation
* Navigation bars

The circle has dual meaning:

* in the Working screen: **FLIP**
* in secondary screens: **return to Working**

This keeps navigation consistent with the visual language of the product.

---

# 8. Screen 03 — Menu

The menu is opened through the gear:

```text
⚙ → MENU
```

Structure:

```text
MY ORACLE


ANIMATION      ON / OFF
HAPTIC         ON / OFF
SOUND          ON / OFF
HELP           →


────────────────

PREMIUM        →
```

### Menu Structure

**MY ORACLE**
Section heading. Not an interactive item.

**ANIMATION**
Single ON/OFF control.

**HAPTIC**
Single ON/OFF control.

**SOUND**
Single ON/OFF control.

**HELP**
Opens a separate Help page.

**PREMIUM**
Opens the Premium page.

---

# 9. Animation

Animation is not a collection of interface animations.

It represents the visual presence of Pythia.

The initial implementation contains a single animated character:

* simple smiley-like form;
* minimal graphic design;
* slight head movement;
* facial expression / mimicry;
* visual style related to the typography of Pythia.

Because there is only one animation concept at this stage, the menu contains only:

```text
ANIMATION   ON / OFF
```

No separate animation selection screen is required.

---

# 10. Haptic

Haptic feedback contains only one setting:

```text
HAPTIC   ON / OFF
```

No additional configuration is required in the initial version.

---

# 11. Sound

Sound contains only one setting:

```text
SOUND   ON / OFF
```

No additional configuration is required in the initial version.

---

# 12. Screen 04 — Help

`HELP` opens a separate page.

The page contains the main explanatory text about Pythia and how the Oracle works.

The menu itself should not contain long explanations.

Navigation back to the Working screen uses:

```text
◯
```

---

# 13. Screen 05 — Premium

The Premium page presents the personalized visual world of Pythia.

```text
PREMIUM


Personalize your Pythia.

Characters
Themes
Animations
Sounds
Collections


DISCOVER →

────────────────

SUBSCRIBE →
```

### Page Logic

**DISCOVER**
Leads to the Pythia website.

The website is not merely a product page. It represents a larger visual world containing, for example:

* characters;
* images;
* collections;
* visual concepts;
* future artistic content.

**SUBSCRIBE**
Leads to the subscription flow.

`SUBSCRIBE` remains at the very bottom of the page.

The visual logic is intentional:

```text
DISCOVER → curiosity
SUBSCRIBE → decision
```

---

# 14. Navigation Map

The initial UI flow is:

```text
                    ┌─────────────┐
                    │   SPLASH    │
                    │             │
                    │ PYTHIA⚙     │
                    │ ASK         │
                    │ ◯           │
                    └──────┬──────┘
                           │
                          FLIP
                           ↓
                    ┌─────────────┐
                    │   WORKING   │
                    │             │
                    │ PYTHIA⚙     │
                    │ YES / NO /  │
                    │ UNDEFINED   │
                    │ ◯           │
                    └──────┬──────┘
                           │
                          ⚙
                           ↓
                    ┌─────────────┐
                    │    MENU     │
                    │             │
                    │ MY ORACLE   │
                    │ ANIMATION   │
                    │ HAPTIC      │
                    │ SOUND       │
                    │ HELP        │
                    │ PREMIUM     │
                    └─────────────┘
```

---

# 15. Core Interaction Loop

The entire basic Oracle experience can be reduced to:

```text
ASK
 ↓
FLIP
 ↓
RESULT
 ↓
FLIP
 ↓
RESULT
 ↓
...
```

The user never needs to enter the question into the application.

The question exists in the user's mind.

The Oracle provides the event.

---

# 16. UI Rules

### Rule 1 — Minimalism

Every element must justify its existence.

### Rule 2 — No Conventional UI Without a Reason

Do not add standard interface elements simply because other applications use them.

### Rule 3 — Visual Scene First

Images, animation, and video may become the primary visual environment of Pythia.

### Rule 4 — UI as Part of the Scene

White typography and controls may overlap and partially merge with visual content.

### Rule 5 — Menu Is Functional

The menu is intentionally more conventional and readable.

### Rule 6 — Navigation Through Symbols

The gear and circle provide the basic navigation language.

---

# 17. Initial Screen Set

The first Figma prototype should contain:

```text
01  SPLASH
02  WORKING — YES
03  WORKING — NO
04  WORKING — UNDEFINED
05  MENU
06  HELP
07  PREMIUM
```

No additional screens are required for the initial UI prototype.

---

# 18. Design Identity

The essential visual identity can be expressed as:

```text
PYTHIA⚙
     ↓
    ASK
     ↓
     ◯
     ↓
YES / NO / UNDEFINED
```

The interface should remain recognizable even when the visual shell later expands to include:

* animated characters;
* video;
* sound;
* haptic feedback;
* richer visual environments.

The outer form may change.

The interaction language remains the same.

---

# 19. Core UI Principle

> **The interface should say no more than the user needs to understand what happens next.**

For Pythia, that may be enough:

```text
PYTHIA⚙

ASK

◯
```

And after the interaction:

```text
PYTHIA⚙

YES

◯
```

This is the basic visual grammar of the product.
