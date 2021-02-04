import createDaoContract from "../../services/contract/DaoContract";
import { setCouncil, setCouncilErrors, setCouncilLoading } from "./council"

export function loadCouncil() {
    return async (dispatch: Function) => {
        try {
            dispatch(setCouncilLoading(true));
            const contract = await createDaoContract();
            const council = await contract.getCouncil();
            dispatch(setCouncil(council));
            dispatch(setCouncilLoading(false));
        } catch(error) {
            dispatch(setCouncilErrors(error));
            dispatch(setCouncilLoading(false));
        }
    }
}