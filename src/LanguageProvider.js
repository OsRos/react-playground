
import React from "react";
import { IntlProvider } from "react-intl";
import { useSelector } from "react-redux";
import { selectLocale } from "./core/User/selectors";
import messages from "./messages";
const LanguageProvider = ({ children }) => {
  const locale = useSelector(selectLocale)
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      {children}
    </IntlProvider>
  );
};
export default LanguageProvider