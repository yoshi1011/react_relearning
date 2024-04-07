import {ErrorBoundary} from "react-error-boundary";
import ErrorRetryThrow from "./ErrorRetryThrow";
import ErrorFallback from "./ErrorFallback";

export default function ErrorRetryRoot() {
    const handleReset = () => console.log('Retry');

    return(
        <>
            <h3>Error Boundaryの基本</h3>
            <ErrorBoundary
                onReset={handleReset}
                FallbackComponent={ErrorFallback}>
                <ErrorRetryThrow/>
            </ErrorBoundary>
        </>
    )
}
