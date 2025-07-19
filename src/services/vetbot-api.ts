// vetbot-api.ts

// --------------------
// Types
// --------------------

export type ConseilsStartResponse = {
  session_id: string;
};

export type ConseilsSendRequest = {
  content: string;
};

export type DiagnosticStartRequest = {
  experience: string;
  type_elevage: string;
  quantite: string;
  localisation: string;
  surface_m2: string;
};

export type DiagnosticStartResponse = {
  session_id: string;
};

export type DiagnosticSendRequest = {
  content: string;
};

// --------------------
// API Services
// --------------------

const BASE_URL = "http://localhost:8000/api/vetbot";

// CONSEIL

export async function startConseil(): Promise<ConseilsStartResponse> {
  const res = await fetch(`${BASE_URL}/conseil/start`, {
    method: "POST",
  });
  if (!res.ok) throw new Error("Erreur lors de l'initialisation du conseil.");
  return res.json();
}

export async function sendConseilMessage(
  sessionId: string,
  data: ConseilsSendRequest
): Promise<any> {
  const formData = new FormData();
  formData.append("content", data.content);

  const res = await fetch(`${BASE_URL}/conseil/${sessionId}/send`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formData,
  });

  if (!res.ok) throw new Error("Erreur lors de l'envoi du message conseil.");
  return res.json();
}

// DIAGNOSTIC

export async function startDiagnostic(
  data: DiagnosticStartRequest
): Promise<DiagnosticStartResponse> {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, (data as any)[key]);
  }

  const res = await fetch(`${BASE_URL}/diagnostic/start`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Erreur lors du démarrage du diagnostic.");
  return res.json();
}

export async function sendDiagnosticMessage(
  sessionId: string,
  data: DiagnosticSendRequest
): Promise<any> {
  const formData = new FormData();
  formData.append("content", data.content);

  const res = await fetch(`${BASE_URL}/diagnostic/${sessionId}/send`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error("Erreur lors de l'envoi du message diagnostic.");
  return res.json();
} 