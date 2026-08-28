const GEMINI_MODEL = 'gemini-3.6-flash'
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.trim()

export const geminiConfigured = Boolean(GEMINI_API_KEY)

const INDIA_CONNECT_INSTRUCTIONS = `You are the India Connect help assistant for an Indian railway booking prototype.
Answer in plain language and keep replies to three short sentences or fewer.
You can explain PNRs, RAC, waitlists, Tatkal, refunds, payment states, coaches, seats, and booking steps.
Do not claim live availability, live train running status, or a guaranteed confirmation.
If a question is outside railway booking, say that you can only help with this journey and railway booking.`

/**
 * Calls Gemini directly from the prototype when a local VITE_GEMINI_API_KEY is
 * configured. The UI always supplies a prepared answer first, so a missing
 * key, quota limit, network error, or blocked request never breaks the flow.
 */
export async function askGemini(question: string, signal?: AbortSignal): Promise<string> {
  if (!GEMINI_API_KEY) throw new Error('Gemini API key is not configured')

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': GEMINI_API_KEY,
    },
    signal,
    body: JSON.stringify({
      contents: [{ parts: [{ text: `${INDIA_CONNECT_INSTRUCTIONS}\n\nUser question: ${question}` }] }],
      generationConfig: {
        maxOutputTokens: 260,
        thinkingConfig: {
          thinkingLevel: 'minimal',
        },
      },
    }),
  })

  if (!response.ok) throw new Error(`Gemini request failed (${response.status})`)
  const payload = await response.json() as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>
  }
  const text = payload.candidates?.[0]?.content?.parts?.map((part) => part.text ?? '').join('').trim()
  if (!text) throw new Error('Gemini returned no text')
  return text
}
