import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    return (
        <div>
            <div>
            <Box backgroundColor='red' width='100px' height= '200px' />
            </div>
           
            <NewBoxForm />
        </div>
    )
}

export default BoxList;