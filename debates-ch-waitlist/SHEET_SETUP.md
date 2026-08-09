# Connecting the waitlist to your Google Sheet

The site is live, but `/api/waitlist` returns **503** until a destination is
configured. That is deliberate: a waitlist that silently drops signups is worse
than one that visibly says "not ready yet".

A website cannot append rows to a Google Sheet on its own — it needs either a
service account or a small Apps Script web app. The Apps Script route takes
about two minutes and needs no credentials in the codebase.

**Your sheet:** https://docs.google.com/spreadsheets/d/1b90FinmyABHTOErCbungSX1ycfZyGKH8GZ42aW3i3FY/edit

## 1. Add the script

In the sheet: **Extensions → Apps Script**, delete the placeholder, paste this,
and save.

```javascript
const SECRET = 'CHANGE_ME_TO_A_LONG_RANDOM_STRING';

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  if (SECRET && body.secret !== SECRET) {
    return ContentService.createTextOutput('forbidden').setMimeType(ContentService.MimeType.TEXT);
  }
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  sheet.appendRow([
    body.timestamp || new Date().toISOString(),
    body.name || '',
    body.email || '',
    body.phone || '',
    body.consent || '',
    body.source || '',
    body.referrer || '',
    body.notes || '',
  ]);
  return ContentService.createTextOutput('ok').setMimeType(ContentService.MimeType.TEXT);
}
```

## 2. Deploy it

**Deploy → New deployment → Web app**

- Execute as: **Me**
- Who has access: **Anyone**

Google will ask you to authorise it once. Copy the resulting `/exec` URL.

## 3. Tell the site about it

```bash
cd debates-ch-waitlist && npx vercel env add SHEETS_WEBHOOK_URL production
```

Paste the `/exec` URL when prompted, then add the matching secret:

```bash
cd debates-ch-waitlist && npx vercel env add SHEETS_WEBHOOK_SECRET production
```

Redeploy so the new variables are picked up:

```bash
cd debates-ch-waitlist && npx vercel --prod --yes
```

## 4. Check it

```bash
curl -s https://debates-ch-waitlist.vercel.app/api/waitlist
```

`{"configured":true,"sheets":true,...}` means signups are flowing into the
sheet. Submit the form once yourself to confirm a row lands.

## Optional second copy

If `DATABASE_URL` (or `POSTGRES_URL`) is set, every signup is also written to a
`waitlist` table, keyed by email so a repeat signup updates rather than
duplicates. Either destination succeeding counts as a success; the form only
shows an error if both fail.
