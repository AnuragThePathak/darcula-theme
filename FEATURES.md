# Features

A breakdown of what **Darcula Theme by Anurag** offers for VS Code developers.

---

## Language Support

### Primary Languages

| Language       | Support Level | Highlights                                      |
|----------------|---------------|--------------------------------------------------|
| **Go**         | First-class   | Full semantic tokens, structs/interfaces/packages |
| **Java**       | Strong        | Primitives, classes, interfaces, annotations     |
| **TypeScript** | Strong        | Types, decorators, primitives, keywords          |
| **JavaScript** | Strong        | Variables, functions, type primitives            |
| **C / C++**    | Good          | Safe inherited defaults                          |
| **Python**     | Baseline      | Decorators, built-in types, classes              |

---

## Go-Specific Features

This theme was built **Go-first** with full semantic token support via gopls.

### Visual Differentiation

- **Structs vs Interfaces** — Distinct colors for clear type identification
- **Exported vs Unexported** — Brighter tones for exported symbols
- **Types vs Variables** — No confusion between type names and variable names
- **Packages vs Fields** — Clear separation in method chains
- **Constants vs Variables** — Constants are bold and stand out
- **Built-in vs User-defined** — Different shades for built-in types like `int`, `string`

### Special Highlighting

- **`nil`, `true`, `false`** — Bold italic styling to catch your eye
- **Control flow keywords** — Emphasized for quick scanning
- **String escape sequences** — Distinct color for `\n`, `\t`, etc.
- **Function parameters** — Subtle differentiation from local variables

---

## Java Features

- Primitive types (`int`, `void`, `boolean`) styled distinctly from classes
- Clear separation between classes and interfaces
- Annotations rendered in italic with unique coloring
- Support types properly highlighted

---

## TypeScript & JavaScript Features

- Primitive types distinguished from user-defined types
- Decorators styled consistently with annotations
- Declaration keywords properly emphasized
- Clear type vs value context separation

---

## Python Features

- `def` and `class` keywords bold and prominent
- Built-in types styled separately from user types
- Decorator support with italic styling
- Readable defaults for dynamic typing

---

## Editor UI

### Background & Contrast

- Warm, muted dark background — not pure black
- Three-tier depth: Activity Bar → Sidebar → Editor
- Subtle line highlighting for cursor context

### Bracket Matching

- Six-level bracket colorization for deep nesting
- Graduated colors that maintain readability
- Bracket pair guides for visual alignment

### Selection & Highlighting

- Soft selection colors that don't overwhelm
- Word highlighting on cursor position
- Inactive selection remains visible but muted

---

## Design Philosophy

### Low Eye Strain

- No neon or overly saturated colors
- Warm undertones throughout the palette
- Comfortable for 8+ hour coding sessions

### Semantic Correctness

- Colors chosen for meaning, not decoration
- Similar concepts have related colors
- Different concepts have distinct colors

### Backend Developer Focus

- Optimized for service-heavy codebases
- Prioritizes code comprehension over aesthetics
- Go-first with safe fallbacks for other languages

---

## Recommended Setup

### Semantic Highlighting (Required for Go)

```json
{
  "editor.semanticHighlighting.enabled": true,
  "gopls": {
    "ui.semanticTokens": true
  }
}
```

### Font (Strongly Recommended)

```json
{
  "editor.fontFamily": "JetBrains Mono",
  "editor.fontLigatures": true,
  "workbench.fontAliasing": "antialiased"
}
```

---

## What This Theme Prioritizes

| Priority                  | Status |
|---------------------------|--------|
| Long coding session comfort | ✅      |
| Go semantic correctness    | ✅      |
| Backend language support   | ✅      |
| JetBrains Darcula feel     | ✅      |
| Minimal visual noise       | ✅      |

---

## Compatibility

- **VS Code**: 1.85.0 or later
- **Gopls**: Latest version recommended for full Go support
