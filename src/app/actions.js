'use server'

const NOTION_API_VERSION = '2022-06-28'
const NOTION_API_BASE = 'https://api.notion.com/v1'

/**
 * Submit a single event report to Notion
 * @param {Object} data - The event data to submit
 * @param {string} data.report_id - The id of the report
 * @param {string} data.event_id - The id of the event
 * @param {string} data.report_date - When the event occurred
 * @param {string} data.reporter - Name of the person reporting
 */
export async function submitEventReport(data) {
    console.log(data)
    try {
        const response = await fetch(`${NOTION_API_BASE}/pages`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
                'Content-Type': 'application/json',
                'Notion-Version': NOTION_API_VERSION,
            },
            body: JSON.stringify({
                parent: {
                    type: 'database_id',
                    database_id: process.env.NOTION_REPORTED_EVENTS_DATABASE_ID,
                },
                properties: {
                    id: {
                        title: [
                            {
                                type: 'text',
                                text: { content: data.report_id },
                            },
                        ],
                    },
                    event_id: {
                        type: 'number',
                        number: data.event_id,
                    },
                    report_date: {
                        type: 'date',
                        date: { start: data.report_date },
                    },
                    reporter: {
                        type: 'rich_text',
                        rich_text: [
                            {
                                text: {
                                    content: data.reporter,
                                },
                            },
                        ],
                    },
                },
            }),
        })

        if (!response.ok) {
            throw new Error(`Notion API error: ${response.statusText}`)
        }

        return { success: true }
    } catch (error) {
        console.error('Error submitting event report:', error)
        return { success: false, error: error.message }
    }
}

/**
 * Submit user feedback to Notion
 * @param {Object} data - The feedback data to submit
 * @param {string} data.feedback - The feedback content
 * @param {string} data.category - Category of feedback (e.g., 'bug', 'feature', 'improvement')
 * @param {string} data.user - Name of the user providing feedback
 * @param {string} data.contact - Contact information
 */
export async function submitUserFeedback(data) {
    try {
        const response = await fetch(`${NOTION_API_BASE}/pages`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.NOTION_API_KEY}`,
                'Content-Type': 'application/json',
                'Notion-Version': NOTION_API_VERSION,
            },
            body: JSON.stringify({
                parent: {
                    database_id: process.env.NOTION_FEEDBACK_DATABASE_ID,
                },
                properties: {
                    Feedback: {
                        rich_text: [
                            {
                                text: {
                                    content: data.feedback,
                                },
                            },
                        ],
                    },
                    Category: {
                        select: {
                            name: data.category,
                        },
                    },
                    User: {
                        rich_text: [
                            {
                                text: {
                                    content: data.user,
                                },
                            },
                        ],
                    },
                    Contact: {
                        rich_text: [
                            {
                                text: {
                                    content: data.contact,
                                },
                            },
                        ],
                    },
                },
            }),
        })

        if (!response.ok) {
            throw new Error(`Notion API error: ${response.statusText}`)
        }

        return { success: true }
    } catch (error) {
        console.error('Error enviando feedback del usuario:', error)
        return { success: false, error: error.message }
    }
}
