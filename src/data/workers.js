import { nanoid } from "nanoid";
import workerText1 from "./workerText1";
import workerText2 from "./workerText2";

const workers = [
    {
        id: nanoid(),
        name: "Ben Parker",
        department: "[ dział ]",
        text: workerText1,
        photo: "circle1",
        align: "left",
        
    },
    {
        id: nanoid(),
        name: "Michael Dam",
        department: "[ dział ]",
        text: workerText2,
        photo: "circle2",
        align: "right",
    },
]

export default workers