import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
export const PORT = 7000
export const BASEURL = `http://localhost:${PORT}/`
export const HEADERS = { 'Content-Type': 'application/json' }
export const ROOTDIR = resolve(dirname(fileURLToPath(import.meta.url)), '..')
export const CUSTOM_EVENTS = {
    end: 'app:end',
    subscribe: 'app:subscribe',
    closedb: 'app:db:closed'

}