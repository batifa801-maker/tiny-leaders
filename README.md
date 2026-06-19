# Tiny Leaders Website

## Open The Site

Double-click `OPEN_IN_WEB.cmd`.

That launcher refreshes the exported website when needed, starts a local static server, finds an available local port if 3000 is busy, and opens the browser automatically.

The browser should show a web address like `http://127.0.0.1:3000/`, not `file:///...`.

If Windows blocks command files, open `OPEN_DIRECT_WEBSITE.html`. That is only the fallback file version.

You can also start the same opener from a terminal:

```powershell
npm.cmd start
```

Keep the black server window open while using the site. Closing it stops the local website.

## Edit The Site

For live editing, use:

```powershell
npm.cmd run dev
```

For a clean static export, use:

```powershell
npm.cmd run build
```

The finished website is generated into `out`.

## Deployment

- Push changes to `main` on GitHub.
- Connect the repository in Vercel and set the root directory to the project directory.
- Add a production domain in Vercel Domains after deploy.
