#!/bin/bash
# Push to GitHub using GitHub API - Phone friendly
# Usage: ./scripts/push-via-api.sh YOUR_GITHUB_USERNAME YOUR_GITHUB_TOKEN

set -e

USERNAME=$1
TOKEN=$2
REPO_NAME="for-meitcy"

if [ -z "$USERNAME" ] || [ -z "$TOKEN" ]; then
  echo "Usage: $0 YOUR_GITHUB_USERNAME YOUR_GITHUB_TOKEN"
  echo "Example: $0 johndoe ghp_xxxxxxxxxxxx"
  exit 1
fi

echo "Creating repository $REPO_NAME for $USERNAME via GitHub API..."

# Create repo
curl -X POST \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/user/repos \
  -d "{
    \"name\": \"$REPO_NAME\",
    \"description\": \"For Meitcy - Two years since Sept 23 2024 - Personal interactive confession website\",
    \"private\": false,
    \"auto_init\": false
  }"

echo ""
echo "Repo created! Now initializing git and pushing..."

# Check if git repo exists
if [ ! -d ".git" ]; then
  git init
fi

# Create .gitignore if not exists
if [ ! -f ".gitignore" ]; then
  echo "node_modules" > .gitignore
  echo ".next" >> .gitignore
  echo ".env" >> .gitignore
fi

git add .
git commit -m "for Meitcy - Sept 23 2026 - initial commit" || echo "Already committed"

git branch -M main

# Remove existing remote if any
git remote remove origin 2>/dev/null || true

git remote add origin https://${TOKEN}@github.com/${USERNAME}/${REPO_NAME}.git

echo "Pushing to https://github.com/${USERNAME}/${REPO_NAME}.git ..."
git push -u origin main

echo ""
echo "Done! Your repo is at: https://github.com/${USERNAME}/${REPO_NAME}"
echo ""
echo "Next: Go to vercel.com -> Add New Project -> Import $REPO_NAME -> Deploy"
echo "Don't forget to set ADMIN_TOKEN env var in Vercel!"
