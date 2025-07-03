export class ResponseFormatter {
  format(response: any): any {
    return {
      status: response.status,
      data: response.data,
      timestamp: new Date().toISOString()
    };
  }
}
