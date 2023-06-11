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
  devices: Device[]
}

export interface Device {
  name: string
  temperatureC: number
  temperatureF: number
  humidity: number
  location: {
    latitude: number
    longitude: number
  }
  plants: Plant[]
}
