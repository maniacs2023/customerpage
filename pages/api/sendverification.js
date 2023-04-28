import {tw} from '../../vonage';

async function Sendverification(props){
    const phoneNumber = props;
    try{
        const service = await tw.verify.v2.services.create({
            friendlyName: phoneNumber
          });
          console.log(service.sid);
    }catch(e){
        console.log(e);
    }
}
export default Sendverification;