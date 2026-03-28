import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export const getAIGreeting = async (timeOfDay: string, weather: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a cool, brand-authentic Dr Pepper AI assistant. 
      The current time is ${timeOfDay} and the weather is ${weather}. 
      Give a short, punchy (max 15 words) greeting suggesting a Dr Pepper drink. 
      Use a "Liquid Newstalgia" vibe.`,
    });
    return response.text || "A cold Dr Pepper for a perfect moment.";
  } catch (error) {
    console.error("AI Greeting Error:", error);
    return "23 Flavors. One You. Ready for a sip?";
  }
};

export const generateDirtySodaRecipe = async (ingredients: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are a "Dirty Soda" mixologist. 
      The user has these ingredients: ${ingredients}. 
      Create a creative recipe using Dr Pepper as the base. 
      Give it a cool name. Keep it concise. Format as Markdown.`,
    });
    return response.text || "Mix Dr Pepper with a splash of lime and coconut cream for a classic twist.";
  } catch (error) {
    console.error("Recipe Generation Error:", error);
    return "Error generating recipe. Try mixing Dr Pepper with some cream and lime!";
  }
};
