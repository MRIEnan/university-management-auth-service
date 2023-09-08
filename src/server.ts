import mongoose from "mongoose";
import app from './app';
import config from "./config/index";

const port = config.port

async function bootstrap() {
    try{
        await mongoose.connect(config.database_url as string);
        
        console.log(`🎁 database is connected succesfully`);

        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })

    }catch(err){
        console.log('Failed to connect database',err)
    }
}

bootstrap()