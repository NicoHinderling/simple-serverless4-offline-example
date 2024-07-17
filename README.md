## How to test:

1. clone the repo
2. `npm i --legacy-peer-deps` (because `serverless-offline` still has the serverless dep version at 3)
3. `npx sls offline start --httpPort 4000 --reloadHandler`

Then try hitting the `/hello` endpoint, with postman or curl. 

This is what I get:

```
GET /hello (λ: hello)
✖ Unhandled exception in handler 'hello'.
✖ Error: Cannot find module 'index'
Require stack:
- /Users/nicolashinderling/dev/simple-serverless4-offline-example/node_modules/serverless-offline/src/lambda/handler-runner/in-process-runner/aws-lambda-ric/UserFunction.js
Runtime.ImportModuleError: Error: Cannot find module 'index'
Require stack:
- /Users/nicolashinderling/dev/simple-serverless4-offline-example/node_modules/serverless-offline/src/lambda/handler-runner/in-process-runner/aws-lambda-ric/UserFunction.js
    at _loadUserApp (/Users/nicolashinderling/dev/simple-serverless4-offline-example/node_modules/serverless-offline/src/lambda/handler-runner/in-process-runner/aws-lambda-ric/UserFunction.js:310:15)
    at async module.exports.load (/Users/nicolashinderling/dev/simple-serverless4-offline-example/node_modules/serverless-offline/src/lambda/handler-runner/in-process-runner/aws-lambda-ric/UserFunction.js:341:21)
    at async InProcessRunner.run (file:///Users/nicolashinderling/dev/simple-serverless4-offline-example/node_modules/serverless-offline/src/lambda/handler-runner/in-process-runner/InProcessRunner.js:41:21)
    at async MessagePort.<anonymous> (file:///Users/nicolashinderling/dev/simple-serverless4-offline-example/node_modules/serverless-offline/src/lambda/handler-runner/worker-thread-runner/workerThreadHelper.js:24:14)
✖ Error: Cannot find module 'index'
Require stack:
- /Users/nicolashinderling/dev/simple-serverless4-offline-example/node_modules/serverless-offline/src/lambda/handler-runner/in-process-runner/aws-lambda-ric/UserFunction.js
```
