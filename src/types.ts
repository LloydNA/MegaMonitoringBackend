export interface Plant {
  name: string
  humidity: number
}

export interface User {
  name: string
  houses: House[]
}

export interface House {
  name: string
  location: {
    latitude: number
    longitude: number
  }
  devices: Device[]
}

export interface Device {
  name: string
  temperatureC: number
  temperatureF: number
  humidity: number
  plants: Plant[]
}
