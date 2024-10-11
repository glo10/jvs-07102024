export const responseMessage = (message) => `{"message":"${message}"}`
export const formValidation = (data) => {
  data = JSON.parse(data)
  if (!data.email || !data.password) {
    throw new Error('email or password required')
  }
  data = [
    data.lastname,
    data.firstname,
    data.email,
    data.password,
    data.age,
    data.country,
    data.city,
    data.cityLatitude,
    data.cityLongitude
  ]
  return data
}