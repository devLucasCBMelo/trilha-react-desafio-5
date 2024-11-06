import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ubnjujurwqiubeofogpl.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibmp1anVyd3FpdWJlb2ZvZ3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4ODkxODMsImV4cCI6MjA0NjQ2NTE4M30.fI4jNrrce7mW_7mH-ZM6YB2toYtQCAnM3AO2VyxPVwo",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVibmp1anVyd3FpdWJlb2ZvZ3BsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA4ODkxODMsImV4cCI6MjA0NjQ2NTE4M30.fI4jNrrce7mW_7mH-ZM6YB2toYtQCAnM3AO2VyxPVwo"
    }
})