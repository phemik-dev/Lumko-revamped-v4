# LumkoMDX Offline Handoff

This package is intended for environments that cannot access the npm registry.

## Run Locally

```powershell
npm.cmd run dev
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

- `node_modules` is included in the offline archive so `npm install` is not required.
- If the preview shows a stale chunk error, stop the dev server, remove `.next`, and start again.
- Do not run `npm run build` while the dev server is running.
