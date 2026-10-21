# Chickkart site — GitHub + Netlify

## Files
- `index.html`: complete responsive ordering page
- `config.js`: shop names, photos, descriptions, addresses, shop-specific menu prices, fees, WhatsApp number, optional order endpoint
- `google-apps-script.gs`: optional Google Sheets save endpoint

## Update shops/prices
Edit `config.js`. Add another object to `shops` with a unique `id`, name, description, address, public image URL, and `menu` array. Each menu item has its own price per kg. Replace sample prices and placeholder shop addresses before real orders.

## Important: choose Sheets or no backend
The default `orderEndpoint` is blank. This is WhatsApp-only mode: a temporary reference is generated in the browser, but the order is NOT saved to a central sheet. Do not treat that reference as verified or searchable.
To save orders in Sheets:
1. Create a Google Sheet.
2. Extensions → Apps Script. Paste `google-apps-script.gs`.
3. Set `SPREADSHEET_ID` to your spreadsheet ID.
4. Deploy → New deployment → Web app; execute as you and choose an access setting that allows your website to call it.
5. Copy the deployed `/exec` URL into `orderEndpoint` in `config.js`.
6. Submit a test order; confirm a row is created and the server-generated order ID appears in WhatsApp.

The endpoint validates submitted price arithmetic and creates the ID in the sheet, but this lightweight public endpoint is not a high-security production backend. Because the browser sends prices, a determined user could manipulate them and submit matching arithmetic. For stronger protection, move the shop/menu/fee catalog to the server and have the server look up prices from trusted data. Do not use this pilot endpoint for payment credentials. Add abuse protection before public marketing.

## WhatsApp
The page opens a prefilled `wa.me` message. The customer must tap Send. Opening WhatsApp does not prove the message was sent.

## Netlify
Commit the files to GitHub, connect the repository in Netlify, publish from the repository root. No build command is required.
