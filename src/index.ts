import { server } from './server/Server';
server.listen(process.env.PORT , ()=>{
    return console.log('Api Okay! Link: http://localhost:'+process.env.PORT);
});