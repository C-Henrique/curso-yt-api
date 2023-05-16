import { server } from './server/Server';
server.listen(process.env.PORT ||3333, ()=>{
    return console.log('Api Okay! Link: http://localhost:'+process.env.PORT || 3333);
});