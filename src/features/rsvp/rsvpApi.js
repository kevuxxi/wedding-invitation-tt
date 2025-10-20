import { axiosInstance } from '../../shared/api/axios'

export const rsvpApi = {
  async submitRsvp(data) {
    return await axiosInstance.post('/rsvp', data)
  },

  async getRsvpByEmail(email) {
    return await axiosInstance.get(`/rsvp/${email}`)
  },
}
