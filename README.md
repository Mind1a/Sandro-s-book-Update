Branch Structure

main branch: development test branch: pre-development

development - stable branch pre-development - working branch

pull request

All the pull requests create from pre-development and send pull requests on the same branch.

When creating new branch, always use the structure of the branch anatomy.

branch anatomy: type/title

type: core | feature | bugfix

pre-development branch is synced to the development branch once a week.

Deployment Notes

Vercel
- Language routes are mapped to language HTML entries:
	- /en and /en/* -> /en.html
	- /it and /it/* -> /it.html
	- /ka and /ka/* -> /ka.html

Netlify
- Matching redirects are configured in netlify.toml for /en, /it, /ka and their nested paths.

cPanel (Apache)
- Rewrite rules are configured in .htaccess.
- The same rules are also in public/.htaccess so Vite emits dist/.htaccess during build.
- Upload dist/ contents to public_html/ and keep .htaccess at the same level as index.html.
