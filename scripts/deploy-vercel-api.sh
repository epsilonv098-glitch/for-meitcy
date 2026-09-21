#!/bin/bash
# Deploy to Vercel via Vercel API
# Usage: ./scripts/deploy-vercel-api.sh YOUR_VERCEL_TOKEN YOUR_GITHUB_USERNAME

VERCEL_TOKEN=$1
GITHUB_USER=$2
REPO="for-meitcy"

if [ -z "$VERCEL_TOKEN" ] || [ -z "$GITHUB_USER" ]; then
  echo "Usage: $0 YOUR_VERCEL_TOKEN YOUR_GITHUB_USERNAME"
  echo "Get Vercel token from: https://vercel.com/account/tokens"
  exit 1
fi

echo "Deploying $GITHUB_USER/$REPO to Vercel via API..."

curl -X POST https://api.vercel.com/v13/deployments \
  -H "Authorization: Bearer $VERCEL_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{
    \"name\": \"$REPO\",
    \"gitSource\": {
      \"type\": \"github\",
      \"repo\": \"$GITHUB_USER/$REPO\",
      \"ref\": \"main\"
    },
    \"projectSettings\": {
      \"framework\": \"nextjs\",
      \"buildCommand\": \"npm run build\",
      \"outputDirectory\": \".next\"
    },
    \"env\": [
      {
        \"key\": \"ADMIN_TOKEN\",
        \"value\": \"meitcy2026\",
        \"type\": \"encrypted\",
        \"target\": [\"production\", \"preview\"]
      }
    ]
  }"

echo ""
echo "Deploy request sent! Check https://vercel.com/dashboard"
