import { http, HttpResponse } from 'msw'

export const handlers = [
  // Mock para POST /rsvp
  http.post('/rsvp', async ({ request }) => {
    const body = await request.json()
    console.log('Intercepted POST /rsvp', body)

    return HttpResponse.json({ success: true }, { status: 200 })
  }),
]
