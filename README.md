# Ganesh: personal site (GitHub + Netlify)

1. Create a new GitHub repository and upload every file in this folder (keep the `netlify/functions` folder).
2. On Netlify: Add new site → Import from Git → pick the repository → Deploy. No build settings are needed.
3. Netlify → Site configuration → Environment variables → add `ADMIN_PASSWORD` = a long password only you know. Then redeploy.
4. Open your site, tap the 🔒 button, enter the password, then tap ✎ Edit.

Music: add your song to the repository as `music.mp3`, then in the Owner panel set the music field to `/music.mp3`.
Notes: photos are compressed and stored with your site data; videos are added by link. The visitor count is unique browsers.

Share card: after the first deploy, open `index.html` and replace `YOUR-SITE.netlify.app` (3 places in the meta tags) with your real Netlify address or custom domain, then commit. `share.png` is the preview image; replace it with any 1200x630 image.
