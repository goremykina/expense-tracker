export class HttpException extends Error {
    public statusCode: number
    public message: string
    public details?: unknown

    constructor(statusCode: number, message: string, details?: unknown) {
        super(message)
        this.statusCode = statusCode
        this.message = message
        this.details = details

        Object.setPrototypeOf(this, new.target.prototype)
        Error.captureStackTrace(this)
    }
}

export class NotFoundException extends HttpException {
    constructor(message = 'Resource not found', details?: unknown) {
        super(404, message, details)
    }
}

export class ValidationException extends HttpException {
    constructor(message = 'Validation error', details?: unknown) {
        super(400, message, details)
    }
}

export class InternalServerException extends HttpException {
    constructor(message = 'Internal Server Error', details?: unknown) {
        super(500, message, details)
    }
}
