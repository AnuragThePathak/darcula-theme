# Changelog

All notable changes to **Darcula Theme by Anurag** are documented here.

---

## 1.0.0 — 2025-12-25

### 🎉 Stable release

First stable release of the theme after extended iteration and real-world usage.

### Added
- Stable **JetBrains Darcula–inspired color system**
- Strong **Go semantic token support**
- Clear visual distinction for:
  - Structs vs interfaces
  - Exported vs unexported symbols
  - Packages vs fields vs methods
  - Constants vs variables
- Dedicated styling for:
  - Built-in vs user-defined types
  - Default library symbols
- Proper coloring for `nil`, booleans, and language keywords

### Improved
- Go readability for service-heavy and backend-oriented codebases
- Java support:
  - Correct coloring for primitives (`int`, `void`, etc.)
  - Clear differentiation for classes, interfaces, and annotations
- JavaScript / TypeScript:
  - Better separation of types, variables, and keywords
  - Safer defaults that do not interfere with Go
- Python baseline support with conservative, readable defaults

### UI & Editor
- Refined editor background and contrast for Darcula consistency
- Improved bracket pair guides and indent guides
- Cursor and selection colors tuned for long coding sessions

### Notes
- Designed and tested with **JetBrains Mono**
- Antialiased font rendering is strongly recommended
- Semantic highlighting should be enabled for best results

---

## 0.5.0 — Pre-release

### Experimental phase
- Initial public release
- Multiple iterations on token colors
- Exploration of Go semantic token boundaries
- Identified VS Code semantic token limitations

This version is superseded by `1.0.0`.

---

## Versioning

- **Patch**: bug fixes and small adjustments
- **Minor**: safe improvements with no visual breakage
- **Major**: rare, intentional design changes

The theme prioritizes **stability and readability** over frequent visual changes.
