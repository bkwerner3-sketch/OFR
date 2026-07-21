# OFR (Only Food Runs)

Elevated resort wear for men and women who value craftsmanship and sustainability. Every piece — crochet and chambray camp shirts and shorts — is made from 100% natural fibers with original animal-inspired designs.

## Tech Stack

- **Framework:** TanStack Start (React + Vite)
- **Styling:** Tailwind CSS
- **Runtime:** Bun
- **Payments:** Stripe (managed)
- **Database:** Neon (PostgreSQL), connected via `~/db`

## Collections

### Natural History (Permanent)
- **Open Ocean** — Whale Shark, Wobbegong, and Leopard Shark Chambray
- **Savanna** — Jaguar Crochet

## Getting Started

```bash
bun install
bun run dev
```

Site runs on port 3000. Publish with `bun run publish`.

## Project Structure

```
src/
  routes/        # TanStack Start file-based routes
  components/    # Shared React components
  data/          # Product data and constants
  styles/        # Tailwind CSS
public/          # Static assets (images, logos)
```
