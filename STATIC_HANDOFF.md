# LumkoMDX Static Handoff

Use this package when the target environment cannot access npm.

## What to Share

Share the static archive from `handoff/`.

It contains the exported `out/` directory only. It does not need `node_modules`, npm install, Next.js, or SWC.

## Run In A Locked-Down Environment

Extract the archive, then serve the folder with any static file server.

Examples:

```bash
python3 -m http.server 3000
```

or:

```bash
npx serve .
```

Then open:

```text
http://127.0.0.1:3000/
```

Classic palette preview:

```text
http://127.0.0.1:3000/?theme=classic
```

## Notes

- Do not run `npm install`.
- Do not run `npm run dev`.
- The static export is the preferred review artifact for sandboxes without npm registry access.
