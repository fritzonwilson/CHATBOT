import axios from 'axios';

// ML API endpoint (replace with your backend URL)
const ML_API_URL = import.meta.env.VITE_ML_API_URL || 'http://localhost:5000/api/predict';

/**
 * Send a message to the ML backend and get a response
 * @param {string} message
 * @returns {Promise<string>} Bot reply
 */
export async function sendMessage(message) {
  try {
    const response = await axios.post(ML_API_URL, { message });
    return response.data.reply;
  } catch (error) {
    // Handle error or return a fallback
    return 'Sorry, I could not get a response.';
  }
}

// To remove: Delete this file and remove imports from components/pages. 