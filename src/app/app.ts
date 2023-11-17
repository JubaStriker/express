import { Server } from "http";
import app from "./server"

let server: Server;

const PORT = 3000;

async function bootstrap() {
    server = app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`)
    })
}

bootstrap();
