"use client"

import React, { useState } from "react";

const experienceOptions = [
  { value: "debutant", label: "Débutant" },
  { value: "intermediaire", label: "Intermédiaire" },
  { value: "avance", label: "Avancé" },
];
const elevageOptions = [
  { value: "poulets", label: "Poulets" },
  { value: "canards", label: "Canards" },
  { value: "pintades", label: "Pintades" },
  { value: "autre", label: "Autre" },
];

export default function DiagnosticForm() {
  const [experience, setExperience] = useState("");
  const [typeElevage, setTypeElevage] = useState("");
  const [quantite, setQuantite] = useState("");
  const [surface, setSurface] = useState("");
  const [localisation, setLocalisation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: call API or next step
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-8 w-full max-w-md flex flex-col items-center"
      >
        <p className="text-center text-gray-400 mb-6 text-sm">
          Répondez à ces questions pour personnaliser votre expérience
        </p>
        <select
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          value={experience}
          onChange={e => setExperience(e.target.value)}
          required
        >
          <option value="">Votre niveau d'expérience</option>
          {experienceOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <select
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          value={typeElevage}
          onChange={e => setTypeElevage(e.target.value)}
          required
        >
          <option value="">Type d'élevage</option>
          {elevageOptions.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <input
          type="number"
          min={1}
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Quantité"
          value={quantite}
          onChange={e => setQuantite(e.target.value)}
        />
        <input
          type="number"
          min={1}
          className="w-full mb-3 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Superficie (m²)"
          value={surface}
          onChange={e => setSurface(e.target.value)}
        />
        <input
          type="text"
          className="w-full mb-6 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Localisation"
          value={localisation}
          onChange={e => setLocalisation(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded transition"
          disabled={loading}
        >
          {loading ? "Chargement..." : "Continuer"}
        </button>
      </form>
    </div>
  );
}
