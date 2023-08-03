import { OPENAI_API_KEY } from "@env";
export const getAnswerFromAI = async (prompt) => {
  const url = "https://api.openai.com/v1/completions";
  const body = {
    model: "text-davinci-003",
    prompt: prompt,
    max_tokens: 100,
    temperature: 0,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify(body),
  };
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
