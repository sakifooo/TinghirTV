'use server';
/**
 * @fileOverview A Genkit flow for generating AI-powered football match previews and tactical summaries.
 *
 * - aiMatchStorytellerPreviews - A function that generates match previews and tactical summaries.
 * - AIMatchStorytellerPreviewsInput - The input type for the aiMatchStorytellerPreviews function.
 * - AIMatchStorytellerPreviewsOutput - The return type for the aiMatchStorytellerPreviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIMatchStorytellerPreviewsInputSchema = z.object({
  team1Name: z.string().describe('The name of the first team.'),
  team2Name: z.string().describe('The name of the second team.'),
  matchDate: z.string().describe('The date of the upcoming match (e.g., "2024-12-25").'),
  context: z.string().optional().describe('Any additional context or specific points to cover.'),
});
export type AIMatchStorytellerPreviewsInput = z.infer<typeof AIMatchStorytellerPreviewsInputSchema>;

const AIMatchStorytellerPreviewsOutputSchema = z.object({
  matchPreview: z.string().describe('A concise and engaging preview of the football match.'),
  tacticalSummary: z.string().describe('A summary of potential tactics and key player matchups.'),
});
export type AIMatchStorytellerPreviewsOutput = z.infer<typeof AIMatchStorytellerPreviewsOutputSchema>;

const getMatchData = ai.defineTool(
  {
    name: 'getMatchData',
    description: 'Fetches historical data, recent form, and key player information for two football teams.',
    inputSchema: z.object({
      team1: z.string().describe('The name of the first team.'),
      team2: z.string().describe('The name of the second team.'),
    }),
    outputSchema: z.string().describe('A summary string of match data including head-to-head, recent form, and key players.'),
  },
  async (input) => {
    // In a real application, this would call an external API or database
    // to retrieve actual match data. For this example, we return simulated data.
    const team1Data = `Team ${input.team1}: Won 3, Lost 1, Drawn 1 in last 5 matches. Key player: Striker XYZ.`;
    const team2Data = `Team ${input.team2}: Won 2, Lost 2, Drawn 1 in last 5 matches. Key player: Midfielder ABC.`;
    const headToHead = `In last 5 encounters, ${input.team1} won 2, ${input.team2} won 1, 2 draws.`;
    return `Match Data for ${input.team1} vs ${input.team2}:\n${team1Data}\n${team2Data}\n${headToHead}`;
  }
);

const matchStorytellerPrompt = ai.definePrompt({
  name: 'matchStorytellerPrompt',
  input: {schema: AIMatchStorytellerPreviewsInputSchema},
  output: {schema: AIMatchStorytellerPreviewsOutputSchema},
  tools: [getMatchData],
  prompt: `You are an expert football commentator and tactician. Your task is to generate a compelling match preview and a insightful tactical summary for an upcoming football game.\n\nFirst, use the 'getMatchData' tool to retrieve relevant historical and current form data for both teams.\n\nMatch Details:\nTeam 1: {{{team1Name}}}\nTeam 2: {{{team2Name}}}\nDate: {{{matchDate}}}\n{{#if context}}\nAdditional Context: {{{context}}}\n{{/if}}\n\nUse the retrieved match data and the details above to craft your response.\n\nMatch Preview:\n- Be engaging and highlight the key narratives.\n- Mention recent form, head-to-head stats, and any significant player absences or returns.\n\nTactical Summary:\n- Discuss potential formations.\n- Identify key player matchups.\n- Suggest strategic approaches for both teams based on their strengths and weaknesses.\n- Predict potential turning points.\n\nEnsure the output is in the specified JSON format.\n`,
});

const aiMatchStorytellerPreviewsFlow = ai.defineFlow(
  {
    name: 'aiMatchStorytellerPreviewsFlow',
    inputSchema: AIMatchStorytellerPreviewsInputSchema,
    outputSchema: AIMatchStorytellerPreviewsOutputSchema,
  },
  async (input) => {
    const {output} = await matchStorytellerPrompt(input);
    return output!;
  }
);

export async function aiMatchStorytellerPreviews(
  input: AIMatchStorytellerPreviewsInput
): Promise<AIMatchStorytellerPreviewsOutput> {
  return aiMatchStorytellerPreviewsFlow(input);
}
