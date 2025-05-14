class ApiResponse {
    constructor(statusCode, data, message = "Sucess") {
        this.message = message
        this.statusCode = statusCode
        this.message = message
        this.success = statusCode < 400
    }
}

export { ApiResponse }