export class AppUtils{
    constructor() { }

    static jsonString(model: any) {
        var cache = [];
        let json = JSON.stringify(model, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {                    
                    try {                       
                        return JSON.parse(JSON.stringify(value));
                    } catch (error) {
                      
                        return;
                    }                }               
                cache.push(value);
            }
            return value;
        });
        cache = null;
        return json;
    }

    static header() {
        var header = {
          "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT",
            "Accept": "application/json"
          }
        };
        return header;
      }
    

}