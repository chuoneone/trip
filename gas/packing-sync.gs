const PROPERTY_KEY = "fukuokaPackingState";

function doGet(e) {
  const raw = PropertiesService.getScriptProperties().getProperty(PROPERTY_KEY);
  const payload = raw || JSON.stringify({ items: {}, updatedAt: null });
  const callback = sanitizeCallback_(e && e.parameter && e.parameter.callback);

  if (callback) {
    return ContentService
      .createTextOutput(`${callback}(${payload});`)
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }

  return ContentService
    .createTextOutput(payload)
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  const raw = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
  let payload;

  try {
    payload = JSON.parse(raw);
  } catch (error) {
    payload = { items: {}, updatedAt: new Date().toISOString() };
  }

  if (!payload.items || typeof payload.items !== "object" || Array.isArray(payload.items)) {
    payload = { items: payload, updatedAt: new Date().toISOString() };
  }

  if (!payload.updatedAt) {
    payload.updatedAt = new Date().toISOString();
  }

  PropertiesService.getScriptProperties().setProperty(PROPERTY_KEY, JSON.stringify(payload));

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function sanitizeCallback_(value) {
  return value && /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(value) ? value : "";
}
