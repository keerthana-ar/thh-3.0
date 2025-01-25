import { pipeline } from '@huggingface/transformers';

export async function analyzeSentiment(text) {
  try {
    // Initialize sentiment analysis pipeline
    const classifier = await pipeline(
      'sentiment-analysis', 
      'Xenova/bert-base-multilingual-uncased-sentiment'
    );

    // Analyze sentiment
    const result = await classifier(text);
    
    return {
      label: result[0].label,
      score: result[0].score
    };
  } catch (error) {
    console.error('Sentiment analysis error:', error);
    return null;
  }
}