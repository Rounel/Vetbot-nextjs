export const BASE_API_URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : "http://localhost:8000/api";
export const MEDIA_API_URL = process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_API_URL : "http://localhost:8000/media/";


export async function login(email: string, password: string) {
    console.log("Tentative login:", email, password)

    const res = await fetch(`${BASE_API_URL}/login/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, password: password })
    })
  
    if (!res.ok) {
      const error = await res.json()
      console.log("FAIL:", error)
      throw new Error(error.detail || "Erreur d'authentification")
    }
  
    const data = await res.json()
    localStorage.setItem("access_token", data.token)
    

    console.log("Réponse backend:", data)
    return data
}

export async function registerProvider(formData: any) {
  console.log("THIS IS BASE API URL: ", BASE_API_URL)
    const res = await fetch(`${BASE_API_URL}/register/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    });
    const data = await res.json()
    console.log("THIS IS DATA REGISTER: ", data)
    return data;
}

export async function startDiagnosticConversation(formData: any) {
    const token = localStorage.getItem("access_token")
    const res = await fetch(`${BASE_API_URL}/vetbot/diagnostic/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({content: formData})
    });
    return res.json();
}

export async function startConseilConversation(formData: any) {
    const token = localStorage.getItem("access_token")
    const res = await fetch(`${BASE_API_URL}/vetbot/conseil/start`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify({content: formData})
    });
    return res.json();
}

export async function getDiagnosticsConversations() {
    const token = localStorage.getItem("access_token")
    const res = await fetch(`${BASE_API_URL}/vetbot/diagnostic/user-conversations`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.json();
}

export async function getConseilsConversations() {
    const token = localStorage.getItem("access_token")
    const res = await fetch(`${BASE_API_URL}/vetbot/conseil/user-conversations`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.json();
}

export async function setDiagnosticsConversations() {
    const token = localStorage.getItem("access_token")
    const res = await fetch(`${BASE_API_URL}/providers/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.json();
}

export async function setConseilsConversations() {
    const token = localStorage.getItem("access_token")
    const res = await fetch(`${BASE_API_URL}/providers/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.json();
}

// get diagnostics conversation (DC) messages
export async function getDCMessages(id: string) {
    const token = localStorage.getItem("access_token")
    const res = await fetch(`${BASE_API_URL}/vetbot/diagnostic/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.json();
}

// get conseils conversation (CC) messages
export async function getCCMessages(id: string) {
    const token = localStorage.getItem("access_token")
    const res = await fetch(`${BASE_API_URL}/vetbot/conseil/${id}/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return res.json();
}

export async function sendDiagnosticMessage(formData: any, id: string) {
    const token = localStorage.getItem("access_token")
    
    const res = await fetch(`${BASE_API_URL}/vetbot/diagnostic/${id}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ content: formData })
    })
    
    if (!res.ok) {
        console.log(res)
      const error = await res.json()
      console.log("FAIL:", error)
      throw new Error(error.detail || "Erreur d'envoi'")
    }
  
    const data = await res.json()
    console.log("Réponse de l'ia:", data)
    return data
}

export async function sendConseilMessage(formData: any, id: string) {
    const token = localStorage.getItem("access_token")
    
    const res = await fetch(`${BASE_API_URL}/vetbot/diagnostic/${id}/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ content: formData })
    })
    
    if (!res.ok) {
        console.log(res)
      const error = await res.json()
      console.log("FAIL:", error)
      throw new Error(error.detail || "Erreur d'envoi'")
    }
  
    const data = await res.json()
    console.log("Réponse de l'ia:", data)
    return data
}

export async function logout() {
    const access = localStorage.getItem("access_token")
    console.log('ACCESS', access)
    const res = await fetch(`${BASE_API_URL}/logout/`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access}`
        },
    });
    if (res.ok) {
        localStorage.setItem("access_token", "")
    }
    return res;
}
