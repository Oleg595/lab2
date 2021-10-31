import axios from 'axios';

async function GetHTML(): JSX.Element {
    let res = await axios.get("https://docs.google.com/spreadsheets/d/1rMxtwEngU6_Sphvwkg29g9-4Wr70qy2WRBzulnHDOuY/edit#gid=0");
    return res.data;
}

export default GetHTML
