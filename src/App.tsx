import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import i18n from "./i18n";
import { Layout, ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import { AppSidebar } from "./components/AppSidebar";
import { I18nextProvider } from "react-i18next";
import { defaultTheme } from "./styles/defaultTheme";
import { useMediaQuery } from "react-responsive";

const { Content } = Layout;

function App() {
  const mobile = useMediaQuery({ maxWidth: "750px" });
  return (
    <I18nextProvider i18n={i18n} defaultNS={"translation"}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: defaultTheme.colors.secondary,
                colorBgTextHover: defaultTheme.colors.secondary,
    
              },
            }}
          >
            <Layout style={{ height: "100vh" }}>
              <AppSidebar />
              <Content
                style={{
                  marginLeft: mobile ? undefined : "50px",
                  minHeight: 280,
                  backgroundColor: "#202020",
                }}
              >
                <AppRoutes />
              </Content>
            </Layout>
          </ConfigProvider>
        </BrowserRouter>
      </ThemeProvider>
    </I18nextProvider>
  );
}

export default App;
