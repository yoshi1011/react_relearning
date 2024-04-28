import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MaterialBasic from "./reactLibrary/MaterialBasic";
import MaterialDrawer from "./reactLibrary/MaterialDrawer";
import {ThemeProvider} from "@mui/material";
import theme from "./reactLibrary/theme";
import FormMui from "./reactLibrary/FormMui";
import {QueryClient, QueryClientProvider} from "react-query";
import QueryBasic from "./reactLibrary/QueryBasic";
import QuerySuspense from "./reactLibrary/QuerySuspense";
import {ErrorBoundary} from "react-error-boundary";

const root = ReactDOM.createRoot(document.getElementById('root'));
const cli = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true,
        }
    }
})
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <MaterialBasic/>
            <MaterialDrawer/>
            <FormMui />
            <Suspense fallback={<p>Loading...</p>}>
                <ErrorBoundary fallback={<div>エラーが発生しました</div>}>
                    <QueryClientProvider client={cli}>
                        <QuerySuspense />
                    </QueryClientProvider>
                </ErrorBoundary>
            </Suspense>
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
