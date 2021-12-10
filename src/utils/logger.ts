import pino from 'pino'
import dayjs from 'dayjs'

export const logger = pino({
    prettyPrint: true,
    base: {
        pid: false
    },
    timestamp: () => `,"time: ${dayjs().format()}"`
})
