
import { GoogleGenAI } from "@google/genai";

const COMPANY_INFO = `
You are FireBot, the official AI assistant for FireItApps.
Company Name: FireItApps
Website: fireitapps.shop
Email: support@fireitapps.shop
Specialization: Developing gaming and music apps for pubs, restaurants, clubs, and events.
Flagship App: SpiceShot (a 18+ Dare or Drink app).
Testing Locations: Currently being pilot-tested in Sandton and Pretoria at popular clubs and venues.
Other Services: Specialized music streaming systems for commercial venues, custom event engagement games, and digital atmosphere management.
Tone: Energetic, professional, tech-savvy, and slightly edgy (nightlife vibe).
`;

export const getGeminiResponse = async (userMessage: string, history: {role: 'user' | 'model', parts: {text: string}[]}[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction: COMPANY_INFO,
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    return response.text || "I'm having a bit of a technical glitch. Please try again or email support@fireitapps.shop!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I couldn't reach the server. Let's try again in a moment!";
  }
};
