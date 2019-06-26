function solve(object) {
    let methodName = ["GET", "POST", "DELETE", "CONNECT"];
    let version = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];


    if (!methodName.includes(object.method)) {
        throw new Error("Invalid request header: Invalid Method");
    } else if (!object.hasOwnProperty("uri") || !object.uri.match(/^\*$|^([a-z\d.]+)$/g)) {
        throw new Error("Invalid request header: Invalid URI");
    } else if (!version.includes(object.version)) {
        throw new Error("Invalid request header: Invalid Version");
    } else if (!object.hasOwnProperty("message") || object.message.match(/[<>\\&'"]/g)) {
        throw new Error("Invalid request header: Invalid Message");
    }
    return object;

}

solve({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }
);

solve({
        method: 'OPTIONS',
        uri: 'git.master',
        version: 'HTTP/1.1',
        message: '-recursive'
    }
);