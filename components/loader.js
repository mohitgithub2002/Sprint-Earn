import { PropagateLoader } from "react-spinners";
import LoaderComponent from "./loadercomponent";

const Loader = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-white text-black">
            {/* <PropagateLoader color="#306338" /> */}
            <LoaderComponent />
            {/* <p className="mt-6 ml-2 text-xl font-semibold">Loading</p> */}
        </div>
    );
}

export default Loader;
