// Automation service integration (optional)
// To use: Implement your automation API calls here
// To remove: Delete this file and remove imports from components/pages.

import axios from 'axios';

const AUTOMATION_API_URL = import.meta.env.VITE_AUTOMATION_API_URL || 'http://localhost:5000/api/automation';

/**
 * Trigger an automation task
 * @param {string} task - The automation task name
 * @param {object} params - Parameters for the task
 * @returns {Promise<object>} Result from automation backend
 */
export async function triggerAutomation(task, params) {
  try {
    const response = await axios.post(AUTOMATION_API_URL, { task, params });
    return response.data;
  } catch (error) {
    return { error: 'Automation service failed.' };
  }
} 