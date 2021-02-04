import createDaoContract from "../../services/contract/DaoContract";
import { setDaoErrors, setDaoInfo, setDaoLoading } from "./dao"

export function loadDaoInfo() {
    return async (dispatch: Function) => {
        try {
            dispatch(setDaoLoading(true));
            const contract = await createDaoContract();
            const bond = await contract.getBond();

            dispatch(setDaoInfo({
                bond,
            }));
    
            dispatch(setDaoLoading(false));
        } catch (error) {
            dispatch(setDaoErrors(error));
            dispatch(setDaoLoading(false));
        }
    }
}