import cache from "./cache";
import { connectSdk } from "./WalletService";

export async function getTokenMetadata(collateralTokenId: string) {
    const sdk = await connectSdk();

    return cache(collateralTokenId, async () => {
        return sdk.getTokenMetadata(collateralTokenId);
    });
}