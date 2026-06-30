import {CssBaseline, ThemeProvider} from "@mui/material";
import PaymentManagementPage from "./payment-dispatching/components/payment/PaymentManagementPage.tsx";
import theme from "./theme.ts";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <PaymentManagementPage/>
        </ThemeProvider>
    );
};

export default App;
