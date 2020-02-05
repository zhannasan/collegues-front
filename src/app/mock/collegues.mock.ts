import {Collegue} from '../models/Collegue';

const photoUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/768px-Circle-icons-profile.svg.png';
const collegueMock = new Collegue('12345', 'Snow', 'Jon', 'jon.snow@north.com', new Date('1985-07-15'), photoUrl);

export{collegueMock};
