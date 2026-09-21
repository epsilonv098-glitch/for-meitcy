# Deploy For Meitcy to GitHub + Vercel - Phone Friendly Guide

You have 2 days until September 23, 2026. Here is the fastest way from phone.

---

## OPTION 1: FASTEST FROM PHONE (No terminal needed)

This is the easiest if you are on phone.

### Step 1: Create GitHub repo
1. Open github.com on your phone browser (Desktop mode)
2. Tap + → New repository
3. Name: `for-meitcy`
4. Set Public
5. Do NOT add README, .gitignore
6. Create repository

### Step 2: Upload files
1. In your new repo page, tap `Add file` → `Upload files`
2. On your phone, you need the project files:
   - If you downloaded this project as zip, unzip it
   - Or use the GitHub mobile app to upload
3. Drag all files from this project:
   - `src/`
   - `public/`
   - `package.json`
   - `next.config.js`
   - `tailwind.config.ts`
   - `tsconfig.json`
   - etc.
4. Important: Do NOT upload `node_modules` or `.next`
5. Commit directly to main

If upload fails due to many files, use Option 2 with API.

### Step 3: Deploy to Vercel
1. Go to vercel.com → Sign in with GitHub
2. Tap `Add New...` → `Project`
3. Import `for-meitcy` repo
4. Vercel will auto-detect Next.js
5. Add Environment Variable (optional but recommended):
   - Name: `ADMIN_TOKEN`
   - Value: `meitcy2026` (change to your own secret)
6. Tap Deploy
7. Wait 2 minutes → You get a link like `for-meitcy.vercel.app`
8. Test it on your phone
9. Check `/admin` → enter password `meitcy2026`

Done! Save the link for Sept 23.

---

## OPTION 2: USING GITHUB API (From phone with Termux or browser console)

This is what you asked for - using GitHub API.

### Step 1: Create GitHub Personal Access Token
1. github.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Note: `for-meitcy-deploy`
4. Expiration: 7 days
5. Scopes: Check `repo` (all repo permissions)
6. Generate → COPY THE TOKEN (you only see it once)

Save it somewhere, like notes. Looks like `ghp_xxxxxxxxxxxx`

### Step 2: Create repository via GitHub API

You can do this from your phone browser console or Termux.

**Using curl (Termux on Android, or iSH on iPhone):**

```bash
curl -X POST \
  -H "Authorization: token YOUR_GITHUB_TOKEN_HERE" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d '{
    "name": "for-meitcy",
    "description": "For Meitcy - Two years since Sept 23 2024",
    "private": false,
    "auto_init": false
  }'
```

Replace `YOUR_GITHUB_TOKEN_HERE` with your token.

If success, you get JSON with `clone_url`: `https://github.com/YOUR_USERNAME/for-meitcy.git`

**Alternative: Using browser fetch (no app needed):**

Open github.com, open browser console (on mobile Chrome: menu → Desktop site → then console via inspect), paste:

```javascript
const token = "YOUR_TOKEN_HERE";
fetch("https://api.github.com/user/repos", {
  method: "POST",
  headers: {
    "Authorization": `token ${token}`,
    "Accept": "application/vnd.github.v3+json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "for-meitcy",
    description: "For Meitcy - Two years since Sept 23 2024",
    private: false
  })
}).then(r => r.json()).then(d => console.log(d));
```

### Step 3: Push code to GitHub

**If you have Termux / computer:**

```bash
# Inside project folder
git init
git add .
git commit -m "for Meitcy - Sept 23 2026"
git branch -M main
git remote add origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/for-meitcy.git
git push -u origin main
```

Replace YOUR_USERNAME and YOUR_TOKEN.

**Example with your token in URL (so it doesn't ask password):**
```
https://ghp_xxxxxxxx@github.com/john/for-meitcy.git
```

**If you are purely on phone without git:**

Use GitHub API to upload files one by one (tedious but works). Better to use the Upload button from Option 1.

I made a helper script for you: `scripts/push-via-api.sh`

### Step 4: Deploy to Vercel

**Method A: Via Vercel Dashboard (Easiest)**
1. vercel.com → Login with GitHub
2. Add New Project → Import `for-meitcy`
3. Framework Preset: Next.js (auto)
4. Environment Variables:
   - `ADMIN_TOKEN` = `meitcy2026`
5. Deploy

**Method B: Via Vercel API (Fully API-driven)**

1. Get Vercel Token: vercel.com → Settings → Tokens → Create
2. Deploy:

```bash
curl -X POST https://api.vercel.com/v13/deployments \
  -H "Authorization: Bearer YOUR_VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "for-meitcy",
    "gitSource": {
      "type": "github",
      "repo": "YOUR_USERNAME/for-meitcy",
      "ref": "main"
    },
    "projectSettings": {
      "framework": "nextjs"
    }
  }'
```

Or use Vercel CLI if you have Termux:

```bash
npm i -g vercel
vercel --prod
# login, link project, deploy
```

---

## AFTER DEPLOY - CHECKLIST

1. Open your vercel link on phone: `https://for-meitcy.vercel.app`
2. Test full flow: Open envelope → Read chapters → Letter → YES/NO
3. Click YES once to test tracking
4. Go to `https://for-meitcy.vercel.app/admin`
5. Enter password `meitcy2026` → You should see 1 YES
6. Delete test entry if you want (go to Vercel → Storage or just leave it)
7. Copy final link, save it for Sept 23
8. On Sept 23, send her the link with a simple message like: "Meitcy, I made something for you."

---

## TROUBLESHOOTING

**Upload fails - file too many?**
- Upload in batches: first `src/`, then `public/`, then config files
- Or zip, but GitHub web doesn't support zip extract, so use git

**Vercel build fails?**
- Make sure you didn't upload `node_modules`
- Check build logs in Vercel dashboard
- This project builds fine with Next 14.2.5

**Admin page says wrong password?**
- Default is `meitcy2026`
- If you set ADMIN_TOKEN env in Vercel, use that value
- You can also edit `src/app/admin/page.tsx` line with password and redeploy

**Response tracking not working?**
- File storage is ephemeral on Vercel. For permanent storage, upgrade to Vercel KV:
  - Vercel Dashboard → Storage → Create KV Database
  - Connect to project
  - Update `src/app/api/response/route.ts` to use KV (I can help)

---

## QUICK COMMANDS COPY-PASTE

Replace YOUR_USERNAME and YOUR_TOKEN

```bash
# 1. Create repo via API
curl -X POST -H "Authorization: token YOUR_TOKEN" -H "Accept: application/vnd.github.v3+json" https://api.github.com/user/repos -d '{"name":"for-meitcy","private":false}'

# 2. Init and push
git init
git add .
git commit -m "for Meitcy"
git branch -M main
git remote add origin https://YOUR_TOKEN@github.com/YOUR_USERNAME/for-meitcy.git
git push -u origin main

# 3. Deploy via Vercel CLI (optional)
npm i -g vercel
vercel --prod
```

---

Need help? Tell me your GitHub username and I can generate the exact commands for you.
