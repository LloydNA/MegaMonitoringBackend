import userData from './test_entry.json'
import { User } from '../types'

// GET

const user: User = userData as User

export const getUser = (): User => user
