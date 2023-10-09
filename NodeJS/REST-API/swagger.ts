import {Express, Request, Response} from "express";
import swaggerJsdoc from "swagger-jsdoc"; // build the swagger docs
import swaggerUi from "swagger-ui-express"; // expose the docs in an interface
import {version} from './package.json' // when you bump your app version, swagger doc version will be bumped as well
// import logger as well

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: 'REST API Docs',
            version
        },  
    },
    apis: ["./server.ts"],
}

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number) {
    // Swagger page
    app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    // Docs in JSON format
    app.get('/docs.json', (req: Request, res: Response) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })

    console.log(`📗 Docs avaiable at http://localhost:${port}/docs`)
}

// In the build pipeline, build the docs and publish to postman

export default swaggerDocs;
