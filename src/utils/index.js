const generateID = (date = new Date()) => 0 - `${date.getMilliseconds()}${date.getDay()}${date.getSeconds()}`;

export default generateID;
