// Chickkart pilot Google Sheets endpoint.
// Setup: set SPREADSHEET_ID, deploy as Web App (execute as you).
// Paste deployment /exec URL into orderEndpoint in config.js.
const SPREADSHEET_ID = "PASTE_GOOGLE_SHEET_ID_HERE";
const SHEET_NAME = "Orders";
function doPost(e) {
  try {
    const o = JSON.parse(e.postData.contents);
    const required = ["name","phone","shopId","shopName","itemId","cut","quantityGrams","unitPrice","chickenPrice","deliveryFee","platformFee","total"];
    required.forEach(k => { if (o[k] === undefined || o[k] === null || o[k] === "") throw new Error("Missing "+k); });
    const grams = Number(o.quantityGrams), unit = Number(o.unitPrice), chicken = Number(o.chickenPrice);
    const delivery = Number(o.deliveryFee), platform = Number(o.platformFee), total = Number(o.total);
    if (grams < 500 || grams > 10000 || ![unit,chicken,delivery,platform,total].every(n => Number.isFinite(n) && n >= 0)) throw new Error("Invalid values");
    if (Math.abs(chicken - unit*grams/1000) > .01 || Math.abs(total - chicken-delivery-platform) > .01) throw new Error("Price mismatch");
    const lock = LockService.getScriptLock(); lock.waitLock(10000);
    try {
      const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
      let sh = ss.getSheetByName(SHEET_NAME);
      if (!sh) { sh=ss.insertSheet(SHEET_NAME); sh.appendRow(["Order ID","Created At","Name","Phone","Shop ID","Shop","Item ID","Cut","Quantity g","Unit price/kg","Chicken price","Delivery","Platform fee","Total","Address","Status"]); sh.setFrozenRows(1); }
      const id = makeId(sh);
      sh.appendRow([id,new Date(),safe(o.name),safe(o.phone),safe(o.shopId),safe(o.shopName),safe(o.itemId),safe(o.cut),grams,unit,chicken,delivery,platform,total,safe(o.address||""),"AWAITING_WHATSAPP"]);
      return output({success:true,orderId:id});
    } finally { lock.releaseLock(); }
  } catch(err) { return output({success:false,error:"Could not save order. Check payload and spreadsheet setup."}); }
}
function makeId(sh) {
  const alphabet="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  for(let attempt=0;attempt<12;attempt++){
    let id="CK-";for(let i=0;i<6;i++)id+=alphabet[Math.floor(Math.random()*alphabet.length)];
    const last=sh.getLastRow();if(last<2)return id;
    if(!sh.getRange(2,1,last-1,1).getDisplayValues().flat().includes(id))return id;
  }
  throw new Error("ID generation failed");
}
function safe(v){const s=String(v==null?"":v);return /^[=+\-@]/.test(s)?"'"+s:s;}
function output(v){return ContentService.createTextOutput(JSON.stringify(v)).setMimeType(ContentService.MimeType.JSON);}
